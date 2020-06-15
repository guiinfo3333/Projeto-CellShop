import React, { Component } from 'react';
import './style.css';
import '../../style.css';
import Container from '@material-ui/core/Container';
import api from '../../services/api';
import axios from 'axios'

export default class Produto extends Component{
    state = {
        product:{},
        error:''
    }
    formatPrice(value) {
        let val = (Number(value) / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        let name = this.props.match.params.name;
        console.log(name);
        console.log(id);
    
        this.loadProduto(id);
            
        
    
    }
    loadProduto = (id) => {
    
        axios.get(api+`/selectproduct?op=totaldescription&id=${id}`).then(response => {
            if(response.data.length==0){

                window.location.href="/";
                
            }else{
                this.setState({ product:response.data[0]})
            }
            

        }, response =>{
            console.log(response)
        })
    }
    render(){
    
        const { product,error } = this.state;
      
            return(
                <main className="default">
                    <Container maxWidth={ false }>
                        <div className="produto">
                            <div className="inline-foto">
                                <img src={ product.url } alt="Foto"/>
                            </div>
                            <div className="inline-desc">
                                <div className="titulo">
                                    <strong> { product.nameproduct } </strong>
                                </div>
                                <div className="des">
                                    <p> { product.description }</p>
                                </div>
                                <div className="preco">
                                    <p>R$ { this.formatPrice(product.value) }</p>
                                </div>
                                {/* <div className="compra">
                                    <button type="button">Adicionar ao carrinho</button>
                                    <button type="button">Comprar</button>
                                </div> */}
                            </div>
                        </div>
                        <fieldset className="ficha-tecnica">
                            <legend>Ficha técnica</legend>
                            <table className="table">
                                <tbody>
                                    {product.model
                                        ? <tr><td>Modelo</td><td>{ product.model }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.resolution
                                        ? <tr><td>Resolução</td><td>{ product.resolution }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.dimension
                                        ? <tr><td>Dimensões</td><td>{ product.dimension }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.color
                                        ? <tr><td>Cor</td><td>{ product.color }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.connectivity
                                        ? <tr><td>Conectividade</td><td>{ product.connectivity }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.processor 
                                        ? <tr><td>Processador</td><td>{ product.processor }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.memory 
                                        ? <tr><td>Memória</td><td>{ product.memory }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.chip 
                                        ? <tr><td>Chip</td><td>{ product.chip }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.weight 
                                        ? <tr><td>Peso</td><td>{ product.weight }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.brand
                                        ? <tr><td>Marca</td><td>{ product.brand }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.camera
                                        ? <tr><td>Camera</td><td>{ product.camera }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.frequency
                                        ? <tr><td>Frequência</td><td>{ product.frequency }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.drums
                                        ? <tr><td>Bateria</td><td>{ product.drums }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.inches
                                        ? <tr><td>Polegadas</td><td>{ product.inches }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.connections
                                        ? <tr><td>Conexões</td><td>{ product.connections }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.operationalsystem
                                        ? <tr><td>Sistema operacional</td><td>{ product.operationalsystem }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.bluetooth
                                        ? <tr><td>bluetooth</td><td>{ product.bluetooth }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.powervoltage
                                        ? <tr><td>Tensão de alimentação</td><td>{ product.powervoltage }</td></tr>
                                        : <tr></tr>
                                    }
                                    {product.wifi 
                                        ? <tr><td>Wi-fi</td><td>{ product.wifi }</td></tr>
                                        : <tr></tr>
                                    }
                                </tbody>
                            </table>
                        </fieldset>
                    </Container>
                </main>
            );
        
        }
       
}

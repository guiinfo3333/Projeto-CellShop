import React, { Component } from 'react';
import './style.css';


export default class Botao extends Component{
    componentDidMount(){
        var btn = document.querySelectorAll('.button');
        switch(this.props.estilo){
            case 'info':
                for(var i=0;i<btn.length;i++){
                    btn[i].classList.add("info");
                }
                break;
            case 'dark':
                for(var i=0;i<btn.length;i++){
                btn[i].classList.add("dark");
                }
                break;
            case 'danger':
                for(var i=0;i<btn.length;i++){
                btn[i].classList.add("danger");
                }
                break;
            default:
                for(var i=0;i<btn.length;i++){
                btn[i].classList.add("padrao");
                }
                break;
        }
    }
    render(){
        return(
            <button type={this.props.tipo} className="button" estilo={this.props.estilo} >
                { this.props.name }
            </button>
        );
    }
}
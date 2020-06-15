import React, { Component} from 'react';
import './style.css'
import '../../style.css';
import { Link } from 'react-router-dom'; 
import Notfund from '../../static/icons/404.png'


export default class NotFound extends Component{
  render(){
    return(
      <div className="notfound404">
        <ul className="not-found-list">
          <li><img src={ Notfund } alt="404"/></li>
          <li><strong>Página não encontrada.</strong></li>
          <li>Esta página não existe ou foi retirada do ar.</li>
          <li><Link to="/">Voltar á página inicial.</Link></li>
        </ul>
      </div>
    )
  }
}

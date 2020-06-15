import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class Banner extends Component{
    render(){
        return (
            <div className="content-banner">
                <div className="titulo">
                <hr/><Link to={ this.props.link }><h1>{ this.props.title }</h1></Link><hr/>
                </div>
                <div className="banner">
                  <Link to={ this.props.link } className="link"><img src={ this.props.foto } alt="Banner"/></Link>  
                </div>
            </div>
        );
    }
}

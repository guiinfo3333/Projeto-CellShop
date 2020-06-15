import React, { Component } from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import slide from '../../../static/imagens/slide2.jpg'
import Carousel from 'react-bootstrap/Carousel'

export default class Slide extends Component {
    render(){
        return(
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ this.props.foto1 }
                alt="Slide"
              />
              <Carousel.Caption>
                <h3>{ this.props.title1 }</h3>
                <p>{ this.props.text1 }</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ this.props.foto2 }
                alt="Slide"
              />
              <Carousel.Caption>
                <h3>{ this.props.title2 }</h3>
                <p>{ this.props.text2 }</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ this.props.foto3 }
                alt="Slide"
              />
              <Carousel.Caption>
                <h3>{ this.props.title3 }</h3>
                <p>{ this.props.text3 }</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ this.props.foto4 }
                alt="Slide"
              />
              <Carousel.Caption>
                <h3>{ this.props.title4 }</h3>
                <p>{ this.props.text4 }</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    };
}


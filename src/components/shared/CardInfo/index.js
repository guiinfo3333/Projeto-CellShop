import React, { Component } from 'react';
import './style.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'; 


export default class CardInfo extends Component{
    formatPrice(value) {
        let val = (value / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    render(){
        return(
            <div>
                <Card className="card-wd">
                <Link to={ this.props.linkButton2 } className="button">
                    <CardActionArea>
                        <CardMedia
                        className="card-media"
                        image={ this.props.imagem }
                        title={ this.props.titlehover }
                        />
                        <CardContent className="cardcontent">
                        <Typography gutterBottom className="titulo">
                        { this.props.title }
                        </Typography>
                        <Typography gutterBottom className="subtitulo">
                        { this.formatPrice(this.props.subtitle) }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" id={ this.props.id } className="description">
                        { this.props.text }
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Link>
                    <CardActions className="cardaction">
                        <Link to={ this.props.linkButton2 } className="button">
                            <Button size="small" style={{ color:'#1f1f1f' }} className="button-card">
                                <img src={ this.props.icon2 } alt={ this.props.altIcon2 } className="icon"/>
                                { this.props.nameButton2 }
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
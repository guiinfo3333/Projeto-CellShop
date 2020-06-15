import React from 'react';
import './style.css';
// import insta from '../../../static/icons/instagram.png';
// import face from '../../../static/icons/facebook.png';
// import twitter from '../../../static/icons/twitter.png';

const Footer = () =>(
    <footer>
        {/* <div id="info-footer">
            <div className="block-div">
                <h2>Contatos</h2>
                <ul className="list-footer">
                    <li>Telefone - (##) # ####-####</li>
                    <li>Telefone - (##) # ####-####</li>
                    <li>Email - emailfantasia@gmail.com</li>
                </ul>
            </div>
            <div className="block-div">
                <h2>Atendimento</h2>
                <ul className="list-footer">
                    <li><a href="#"> Ajuda</a></li>
                    <li><a href="#"> Trabalhe conosco</a></li>
                    <li><a href="#"> Fale conosco</a></li>
                </ul>
            </div>
            <div className="block-div">
                <h2>Redes sociais</h2>
                <ul className="list-rs">
                    <li><a href="#"> <img src={ insta } alt="Instagram"/></a></li>
                    <li><a href="#"> <img src={ face } alt="Facebook"/></a></li>
                    <li><a href="#"> <img src={ twitter } alt="Twitter"/></a></li>
                </ul>
            </div>
        </div> */}
        <div className="copyright">
            <ul>
               <li>Copyright © 2020 </li> 
               <li> CellShop </li>
               <li> Todos os direitos reservados.</li> 
            </ul>
          
        </div>
    </footer>
);

export default Footer;
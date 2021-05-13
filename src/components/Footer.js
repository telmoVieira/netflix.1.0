import React from 'react';
import './Footer.css';
import insta from './assets/img/insta.png';
import face from './assets/img/face.png';

export default () => {
    return(
        <footer>
          <div className = "footer--div">
            <h1 className = "footer--h1">Esta cópia da Netflix foi feita por <a href="https://www.linkedin.com/in/telmo-vieira-7a3b39141/">Telmo Vieira</a> no ambito de estudo React</h1>
            <h2>Todos os direitos pertencem a Netflix e Themoviedb.org</h2>
            <div className = "footer--logo">
                <a href= "https://www.instagram.com/telmov2/" >
                <img src = {insta} />
                </a>
                <a href= "https://www.facebook.com/telmov2/" >
                <img src = {face} />
                </a>
            </div>
          </div>
        </footer>
    );

}
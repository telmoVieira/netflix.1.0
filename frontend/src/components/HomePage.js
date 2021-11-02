import { Link } from 'react-router-dom';
import './HomePage.css';
import netflix from './assets/img/netflix.png';

export default () => {
      
    return (
        
           <div className="page--home">
                <div className="page--home--first">
                 <div className="container">
                    <div className="header--logo--home">
                        <a href="/">
                            <img src={netflix} alt="Netflix" />
                        </a>
                    </div>
                </div>
                    <div className="container1">
                        <Link className="buttonEnter" to="/view" >
                            Entrar
                        </Link>
                    </div>
                </div>
            </div> 
    );
}
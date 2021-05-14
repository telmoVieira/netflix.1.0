import { Link } from 'react-router-dom';
import './HomePage.css';

export default () => {
    return (
            <div className="page--home">
                <div className="page--home--first">
                    <h1>Welcome</h1>
                    <Link to="/view" >
                        Entrar
                </Link>
                </div>
            </div>
    );
}
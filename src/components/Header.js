import './Header.css';
import netflix from './assets/img/netflix.png';
import user from './assets/img/user.png';

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={netflix} alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={user} alt="Usuario">
                    </img>
                </a>
            </div>
        </header>
    );
}
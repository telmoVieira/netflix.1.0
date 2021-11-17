import './HomePage.css';
import netflix from './assets/img/netflix.png';
import babyGroot from './assets/img/babyGroot.png';
import capitaoAmerica from './assets/img/capitaoAmerica.png';
import mulherMaravilha from './assets/img/mulherMaravilha.png';

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
                    <a href="/view">
                            <img className="usersImg" src={babyGroot} alt="BabyGroot" />
                    </a>
                    <a href="/view">
                            <img className="usersImg" src={capitaoAmerica} alt="Netflix" to="/view" />
                    </a>
                    <a href="/view">
                            <img className="usersImg" src={mulherMaravilha} alt="Netflix" />
                    </a>
                </div>
                </div>
            </div> 
    );
}
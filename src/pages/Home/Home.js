import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className="container">
            <h1>Welcome</h1>
            <Link to="/view" >
                Entrar
            </Link>
        </div>
        </>
    );
}

export default Home;
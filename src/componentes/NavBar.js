import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget'; 

const NavBar = () => {
    return(
        <header>
            <div className="backNav">
                <img src="./media/marseille.png" className="img-thumbnail" alt="logo"></img>
                <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active text-dark" aria-current="page" href="#">LIVING</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">COCINA</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">HABITACIÓN</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-dark" href="#">NIÑAS Y NIÑOS</a>
                </li>
                </ul>
                <CartWidget />
            </div>
        </header>

    );
}

export default NavBar;
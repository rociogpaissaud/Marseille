import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
        <header>
            <div className="backNav">
                <h1 className="logoMarseille">MARSEILLE</h1>
                <img src="./media/marseille.png" className="img-thumbnail" alt="logo"></img>
                <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active text-dark" aria-current="page" href="#">REMERAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">CAMISAS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#">JEANS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-dark" href="#">ABRIGOS</a>
                </li>
                </ul>
            </div>
        </header>

    );
}

export default NavBar;
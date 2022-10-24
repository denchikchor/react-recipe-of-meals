import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/logo.svg';

function Header() {
    return (
        <nav className="Header">
            <Link to="/" className="brand-logo">
                <img src={logo} alt="logo" />
            </Link>

            <div className="link">
                <a href="https://github.com/denchikchor/react-recipe-of-meals">
                    Repo
                </a>
            </div>
        </nav>
    );
}

export { Header };

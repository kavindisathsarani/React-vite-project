import './Navbar.css';
import logo from '../../../assets/pngtree-salon-logo-png-image_4004444.png';
import {Link} from "react-router-dom";
export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo as string} alt="icon"/>
                <span className="business-name">Glow Up salon</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <button className="btn-sign-in">
                <Link to="/login">Sign In</Link>
            </button>

        </nav>


    );
}
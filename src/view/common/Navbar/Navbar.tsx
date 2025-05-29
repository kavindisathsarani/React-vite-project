import logo from '../../../assets/pngtree-salon-logo-png-image_4004444.png';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-[#1e1e2f] text-white font-sans">
            <div className="flex items-center">
                <img
                    src={logo as string}
                    alt="icon"
                    className="h-10 w-10 object-cover rounded-full border-2 border-white"
                />
                <span className="ml-2 text-white">Glow Up salon</span>
            </div>

            <ul className="flex gap-6 list-none m-0 p-0">
                <li>
                    <Link
                        to="/"
                        className="text-white text-base hover:text-[#00bcd4] transition-colors duration-300"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-white text-base hover:text-[#00bcd4] transition-colors duration-300"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-white text-base hover:text-[#00bcd4] transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            <button className="bg-[#4eaacf] text-[#f0ecec] text-lg px-4 py-2 rounded-lg hover:bg-[#009cb0]  transition">
                <Link to="/login" className="no-underline text-inherit">
                    Sign In
                </Link>
            </button>
        </nav>
    );
}



/*
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
}*/


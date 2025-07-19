import logo from '../../../assets/pngtree-salon-logo-png-image_4004444.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setUsername(storedUsername);
        setRole(storedRole);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        setUsername(null);
        setRole(null);
        navigate("/login");
    };

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-[#1e1e2f] text-white font-sans">
            {/* Logo and Brand */}
            <div className="flex items-center">
                <img
                    src={logo as string}
                    alt="icon"
                    className="h-10 w-10 object-cover rounded-full border-2 border-white"
                />
                <span className="ml-2 text-xl font-semibold">Glow Up Salon</span>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-6 list-none m-0 p-0">
                {role === 'customer' && (
                    <>
                        <li><Link to="/" className="hover:text-[#00bcd4] transition-colors duration-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-[#00bcd4] transition-colors duration-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-[#00bcd4] transition-colors duration-300">Contact</Link></li>
                        <li><Link to="/shopping-cart" className="hover:text-[#00bcd4] transition-colors duration-300">My-Cart</Link></li>
                    </>
                )}
                {role === 'admin' && (
                    <>
                        <li><Link to="/admin-panel" className="hover:text-[#00bcd4] transition-colors duration-300">Admin Panel</Link></li>
                        <li><Link to="/manage-products" className="hover:text-[#00bcd4] transition-colors duration-300">Manage Products</Link></li>
                    </>
                )}
            </ul>

            {/* User Controls */}
            <div className="flex items-center gap-4">
                {username ? (
                    <>
                        <p className="text-white text-lg">{username}</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link
                        to="/login"
                        className="bg-[#4eaacf] text-white px-4 py-2 rounded-lg hover:bg-[#009cb0] transition"
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}


/*import logo from '../../../assets/pngtree-salon-logo-png-image_4004444.png';
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";

export function Navbar() {
    const [username, setUsername] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedRole = localStorage.getItem("role");
        setRole(storedRole);
        setUsername(storedUsername);
    }, []);

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
                {
                    role === 'customer' && (
                        <>
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
                            <li>
                                <Link
                                    to="/shopping-cart"
                                    className="text-white text-base hover:text-[#00bcd4] transition-colors duration-300"
                                >
                                    My-Cart
                                </Link>
                            </li>
                        </>
                    )}
            </ul>

            <button className="bg-[#4eaacf] text-[#f0ecec] text-lg px-4 py-2 rounded-lg hover:bg-[#009cb0]  transition">
                {username ? (
                    <p className="text-xl text-white">{username}</p>
                ) : (
                    <Link to="/login" className="no-underline text-inherit">
                        Sign In
                    </Link>
                )}
            </button>
        </nav>
    );
}*/


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


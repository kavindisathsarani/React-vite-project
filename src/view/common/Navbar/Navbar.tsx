import './Navbar.css'
export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/pngtree-salon-logo-png-image_4004444.png" alt="Logo"/>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        /* <div className="navbar">
             This is Navbar
         </div>*/
    );
}
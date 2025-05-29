export function Footer() {
    return (
        <footer className="bg-[#1e1e2f] text-white py-12 px-6 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-semibold tracking-wide mb-3">GlowUp Salon</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Discover beauty and elegance with GlowUp, your trusted salon for glowing transformations.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-1">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><a href="#" className="hover:text-[#00bcd4] transition">Home</a></li>
                        <li><a href="#" className="hover:text-[#00bcd4] transition">Services</a></li>
                        <li><a href="#" className="hover:text-[#00bcd4] transition">About</a></li>
                        <li><a href="#" className="hover:text-[#00bcd4] transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-1">Contact Us</h4>
                    <div className="text-gray-300 text-sm space-y-2">
                        <p>Email: support@glowup.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>

                {/* Newsletter or Note */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-1">Stay Updated</h4>
                    <p className="text-gray-400 text-sm mb-3">Join our newsletter for the latest styles & offers.</p>
                    <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 rounded bg-gray-700 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
                    />
                    <button className="mt-3 w-full bg-[#00bcd4] hover:bg-[#009cb0] text-white py-2 rounded text-sm transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                © 2025 GlowUp. All rights reserved.
            </div>
        </footer>
    );
}



/*
import './Footer.css'
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <p>GlowUp Salon</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@glowup.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 GlowUp. All rights reserved.</p>
            </div>
        </footer>
        /!* <div className="footer">
             This is Footer!
         </div>*!/
    );
}*/

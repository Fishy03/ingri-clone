import "./Navbar.css";
import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { Link, useLocation } from 'react-router-dom';
import ingri from "/src/assets/Ingri.png";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Cafe", path: "/cafe" },
    { name: "Horeca", path: "/horeca" },
    { name: "Gifting", path: "/gifting" },
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Recipes", path: "/recipes" },
    { name: "Contact", path: "/contact" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getCartCount, setIsCartOpen, setIsLoginModalOpen, user, logout } = useCart();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCartClick = () => {
        setIsCartOpen(true);
    };

    const handleAccountClick = () => {
        if (user) {
            // User is logged in - could show dropdown
            logout();
        } else {
            setIsLoginModalOpen(true);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={ingri} alt="Ingri"/>
                    </Link>
                </div>
                
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <Link 
                            key={item.path} 
                            to={item.path} 
                            onClick={() => setIsMenuOpen(false)}
                            className={location.pathname === item.path ? 'active' : ''}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="navbar-user">
                    <button className="cart-button" onClick={handleCartClick}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"/>
                            <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
                        {getCartCount() > 0 && <span className="cart-count">{getCartCount()}</span>}
                    </button>
                    <button className="account-button" onClick={handleAccountClick}>
                        {user ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        )}
                    </button>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12"/>
                            ) : (
                                <>
                                    <path d="M3 12h18"/>
                                    <path d="M3 6h18"/>
                                    <path d="M3 18h18"/>
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
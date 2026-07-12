import "./Footer.css";
import ingri from "/src/assets/Ingri.png";

const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
];

const socialLinks = [
    { name: "Instagram", path: "https://instagram.com" },
    { name: "Facebook", path: "https://facebook.com" },
    { name: "Twitter", path: "https://twitter.com" },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <img src={ingri} alt="Ingri" />
                        <p>Premium ready-to-eat meals and spices delivered to your doorstep.</p>
                    </div>

                    <div className="footer-links-section">
                        <h3>Quick Links</h3>
                        <div className="footer-links">
                            {footerLinks.map(link => (
                                <a key={link.path} href={link.path}>{link.name}</a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-socials-section">
                        <h3>Follow Us</h3>
                        <div className="footer-socials">
                            {socialLinks.map(social => (
                                <a key={social.name} href={social.path} target="_blank" rel="noopener noreferrer">
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Ingri. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
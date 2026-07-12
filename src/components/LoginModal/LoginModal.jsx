import "./LoginModal.css";
import { useCart } from '../../context/CartContext.jsx';
import { useState } from 'react';

function LoginModal() {
    const { isLoginModalOpen, setIsLoginModalOpen, login } = useCart();
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleClose = () => {
        setIsLoginModalOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login/signup
        login({ 
            name: formData.name || formData.email.split('@')[0], 
            email: formData.email 
        });
        setFormData({ name: '', email: '', password: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isLoginModalOpen) return null;

    return (
        <>
            <div className="login-overlay" onClick={handleClose}></div>
            <div className="login-modal">
                <div className="modal-header">
                    <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
                    <button className="close-button" onClick={handleClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required={!isLogin}
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <div className="modal-footer">
                        <p>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button 
                                className="toggle-button"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginModal;

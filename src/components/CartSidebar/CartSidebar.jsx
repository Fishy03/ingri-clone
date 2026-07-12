import "./CartSidebar.css";
import { useCart } from '../../context/CartContext.jsx';

function CartSidebar() {
    const { 
        cartItems, 
        removeFromCart, 
        updateQuantity, 
        getCartTotal, 
        isCartOpen, 
        setIsCartOpen 
    } = useCart();

    const handleClose = () => {
        setIsCartOpen(false);
    };

    const handleCheckout = () => {
        alert('Checkout functionality would be implemented here with Razorpay integration');
    };

    return (
        <>
            {isCartOpen && <div className="cart-overlay" onClick={handleClose}></div>}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-button" onClick={handleClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1">
                                <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"/>
                                <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"/>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                            </svg>
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.name} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">₹{item.price}</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <button 
                                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                        className="quantity-button"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                        className="quantity-button"
                                    >
                                        +
                                    </button>
                                </div>
                                <button 
                                    className="remove-button"
                                    onClick={() => removeFromCart(item.name)}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Subtotal</span>
                            <span className="total-amount">₹{getCartTotal()}</span>
                        </div>
                        <button className="checkout-button" onClick={handleCheckout}>
                            Proceed to Checkout
                        </button>
                        <p className="cart-note">Shipping and taxes calculated at checkout</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartSidebar;

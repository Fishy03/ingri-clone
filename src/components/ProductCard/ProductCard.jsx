import "./ProductCard.css";
import { useCart } from '../../context/CartContext.jsx';

function ProductCard({image, name, price}){
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ name, price, image });
    };

    return(
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={name} />
            </div>
            
            <div className="product-info">
                <h3>{name}</h3>

                <p className="price">
                    ₹{price}
                </p>

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}


export default ProductCard;
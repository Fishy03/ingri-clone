import "./CategoryCard.css";

function CategoryCard({ image, title }) {
    return (
        <div className="category-card">
            <div className="category-image">
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
        </div>
    );
}

export default CategoryCard;
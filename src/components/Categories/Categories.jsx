import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.css";
import product from "../../assets/product.jpeg";

const categories = [
    {   
        title: "Rice",
        image: product,
    },
    {
        title: "Spices",
        image: product,
    },
    {
        title: "Pickles",
        image: product,
    },
    {
        title: "Ready to Cook",
        image: product,
    },
];

function Categories() {
    return (
        <section className="categories">
            <div className="categories-container">
                <div className="categories-header">
                    <h2>Shop by Category</h2>
                    <p>Explore our wide range of authentic products</p>
                </div>
                <div className="categories-grid">
                    {categories.map(category => (
                        <CategoryCard
                            key={category.title}
                            image={category.image}
                            title={category.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
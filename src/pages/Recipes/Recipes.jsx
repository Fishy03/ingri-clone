import "./Recipes.css";

import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import recipe from "../../assets/recipe.png";
import r1 from "../../assets/recipes/r1.png";
import r2 from "../../assets/recipes/r2.png";
import r3 from "../../assets/recipes/r3.png";
import r4 from "../../assets/recipes/r4.png";
import r5 from "../../assets/recipes/r5.png";
import r6 from "../../assets/recipes/r6.png";
import r7 from "../../assets/recipes/r7.png";
import r8 from "../../assets/recipes/r8.png";
import r9 from "../../assets/recipes/r9.png";
import r10 from "../../assets/recipes/r10.png";

const galImgs = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10];

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/recipes`,
        );
        const data = await response.json();
        if (data.success) {
          setRecipes(data.data);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);
  return (
    <>
      <Navbar />

      <main className="recipes-page">
        {/* ================= HERO ================= */}

        <section className="recipes-hero">
          <div className="recipes-circle recipes-circle-one"></div>
          <div className="recipes-circle recipes-circle-two"></div>

          <div className="recipes-container">
            <div className="recipes-left">
              <p className="recipes-tag">FROM OUR KITCHEN TO YOURS</p>

              <h1>
                Recipes of the
                <span> Collection</span>
              </h1>

              <p className="recipes-description">
                Explore a curated selection of culinary art where each dish
                tells a story. Every recipe is crafted with seasonal
                ingredients, thoughtful techniques, and a passion for bringing
                people together around exceptional food.
              </p>
            </div>

            <div className="recipes-right">
              <img src={recipe} alt="Recipes Collection" />
            </div>
          </div>
        </section>

        {/* ================= CURRENT MENU ================= */}

        <section className="recipes-menu">
          <div className="recipes-menu-heading">
            <p>THE CURRENT MENU</p>

            <h2>
              A Culinary Collection of
              <br />
              Flavours and Seasonal
              <br />
              Delights
            </h2>
          </div>

          <div className="recipes-grid">
            {recipes.map((recipe, index) => (
              <article className="recipe-card" key={index}>
                <div className="recipe-image">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/uploads/${recipe.image}`}
                    alt={recipe.title}
                  />

                  <div className="recipe-badges">
                    <span>{recipe.category}</span>

                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="recipe-content">
                  <div className="recipe-meta">
                    <span>{recipe.time}</span>

                    <span>•</span>

                    <span>{recipe.servings} Servings</span>
                  </div>

                  <h3>{recipe.title}</h3>

                  <p>{recipe.description}</p>

                  <button className="recipe-btn">View Recipe →</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= GALLERY ================= */}

        <section className="recipes-gallery">
          <div className="gallery-heading">
            <p>GALLERY</p>

            <h2>
              A Taste of
              <span> Everything</span>
            </h2>
          </div>

          <div className="gallery-strip">
            {[...galImgs, ...galImgs].map((image, index) => (
              <div className="gallery-item" key={index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTRIBUTION ================= */}

        <section className="recipes-contribute">
          <div className="recipes-contribute-content">
            <div className="chef-icon">🍳</div>

            <h2>Contributing to the Archives</h2>

            <p>
              Have a family recipe that deserves to be shared? We're building a
              growing community of food lovers, home chefs and storytellers.
              Submit your favourite recipe and it may become part of the Ingri
              collection.
            </p>

            <a href="/contact" className="submit-btn">
              Submit Your Recipe
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Recipes;

import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import RecipeForm from "./RecipeForm";
import toast from "react-hot-toast";

function RecipesPanel() {
  const [recipes, setRecipes] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

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
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/recipes/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchRecipes();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Recipe Management</h1>

          <p>Create and manage recipes</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => {
            setEditingRecipe(null);
            setShowForm(true);
          }}
        >
          + Add Recipe
        </button>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Recipes</span>

          <h2>{recipes.length}</h2>
        </div>

        <div className="dashboard-card">
          <span>Categories</span>

          <h2>{new Set(recipes.map((recipe) => recipe.category)).size}</h2>
        </div>

        <div className="dashboard-card">
          <span>Difficulty Levels</span>

          <h2>{new Set(recipes.map((recipe) => recipe.difficulty)).size}</h2>
        </div>
      </div>

      <div className="products-grid-admin">
        {recipes.map((recipe) => (
          <div className="product-admin-card" key={recipe._id}>
            <div className="card-image">
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${recipe.image}`}
                alt={recipe.title}
              />
            </div>

            <div className="product-content">
              <h3 className="product-title">{recipe.title}</h3>

              <p className="product-description">{recipe.description}</p>

              <div className="product-meta">
                <span className="category-pill">{recipe.category}</span>

                <span>{recipe.time}</span>
              </div>

              <div className="product-meta">
                <span>{recipe.difficulty}</span>

                <span>{recipe.servings} Servings</span>
              </div>

              <div className="card-buttons">
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingRecipe(recipe);
                    setShowForm(true);
                  }}
                >
                  ✏ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(recipe._id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <RecipeForm
          recipe={editingRecipe}
          onClose={() => {
            setShowForm(false);
            setEditingRecipe(null);
          }}
          onSuccess={() => {
            fetchRecipes();
            setEditingRecipe(null);
            setShowForm(false);
          }}
        />
      )}
    </>
  );
}

export default RecipesPanel;

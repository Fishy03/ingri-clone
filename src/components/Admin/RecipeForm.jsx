import { useState, useEffect } from "react";
import "./ProductForm.css";
import { getToken } from "../../utils/auth";

function RecipeForm({ recipe, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    difficulty: "",
    time: "",
    servings: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || "",
        description: recipe.description || "",
        category: recipe.category || "",
        difficulty: recipe.difficulty || "",
        time: recipe.time || "",
        servings: recipe.servings || "",
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("difficulty", formData.difficulty);
    data.append("time", formData.time);
    data.append("servings", formData.servings);

    if (image) {
      data.append("image", image);
    }

    try {
      let url = `${import.meta.env.VITE_API_URL}/api/recipes`;
      let method = "POST";

      if (recipe) {
        url = `${import.meta.env.VITE_API_URL}/api/recipes/${recipe._id}`;
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        alert(recipe ? "Recipe Updated!" : "Recipe Added!");

        onSuccess();
        onClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="product-form">
        <button type="button" className="close-modal" onClick={onClose}>
          ×
        </button>

        <h2>{recipe ? "Edit Recipe" : "Add Recipe"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Recipe Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <input
            name="difficulty"
            placeholder="Difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          />

          <input
            name="time"
            placeholder="Cooking Time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="servings"
            placeholder="Servings"
            value={formData.servings}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
          />

          <label className="image-upload">
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />

            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="preview-image"
              />
            ) : recipe ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${recipe.image}`}
                alt={recipe.title}
                className="preview-image"
              />
            ) : (
              <div className="empty-upload">
                <span className="upload-icon">📷</span>

                <h4>Upload Recipe Image</h4>

                <p>PNG, JPG up to 5 MB</p>
              </div>
            )}

            <div className="upload-overlay">
              {recipe ? "📷 Change Recipe Image" : "📷 Upload Recipe Image"}
            </div>
          </label>

          <div className="buttons">
            <button type="submit">
              {recipe ? "Update Recipe" : "Save Recipe"}
            </button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;

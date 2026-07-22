import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import BlogForm from "./BlogForm";
import toast from "react-hot-toast";

function BlogsPanel() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);

      const data = await response.json();

      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchBlogs();
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
          <h1>Blog Management</h1>

          <p>Create and manage blog articles</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => {
            setEditingBlog(null);
            setShowForm(true);
          }}
        >
          + Add Blog
        </button>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Blogs</span>

          <h2>{blogs.length}</h2>
        </div>

        <div className="dashboard-card">
          <span>Categories</span>

          <h2>{new Set(blogs.map((blog) => blog.category)).size}</h2>
        </div>

        <div className="dashboard-card">
          <span>Authors</span>

          <h2>{new Set(blogs.map((blog) => blog.author)).size}</h2>
        </div>
      </div>

      <div className="products-grid-admin">
        {blogs.map((blog) => (
          <div className="product-admin-card" key={blog._id}>
            <div className="card-image">
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${blog.image}`}
                alt={blog.title}
              />
            </div>

            <div className="product-content">
              <h3 className="product-title">{blog.title}</h3>

              <p className="product-description">{blog.excerpt}</p>

              <div className="product-meta">
                <span className="category-pill">{blog.category}</span>

                {/* <span>{blog.readTime}</span> */}
              </div>

              <div className="card-buttons">
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingBlog(blog);
                    setShowForm(true);
                  }}
                >
                  ✏ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(blog._id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <BlogForm
          blog={editingBlog}
          onClose={() => {
            setShowForm(false);
            setEditingBlog(null);
          }}
          onSuccess={() => {
            fetchBlogs();
            setEditingBlog(null);
            setShowForm(false);
          }}
        />
      )}
    </>
  );
}

export default BlogsPanel;

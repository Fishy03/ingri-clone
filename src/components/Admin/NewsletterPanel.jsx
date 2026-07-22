import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";

function NewsletterPanel() {
  const [subscribers, setSubscribers] = useState([]);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        setSubscribers(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this subscriber?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchSubscribers();
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
          <h1>Newsletter Subscribers</h1>

          <p>Manage newsletter subscriptions</p>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Subscribers</span>

          <h2>{subscribers.length}</h2>
        </div>
      </div>

      <div className="products-grid-admin">
        {subscribers.map((subscriber) => (
          <div className="product-admin-card" key={subscriber._id}>
            <div className="product-content">
              <h3 className="product-title">{subscriber.email}</h3>

              <div className="product-meta">
                <span>{new Date(subscriber.createdAt).toLocaleString()}</span>
              </div>

              <div className="card-buttons">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(subscriber._id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewsletterPanel;

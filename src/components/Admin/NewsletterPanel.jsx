import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
    const result = await Swal.fire({
      title: "Delete Subscriber?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

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
        toast.success("Subscriber deleted successfully.");
        fetchSubscribers();
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete subscriber.");
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

      <div className="products-grid-admin compact-grid">
        {subscribers.map((subscriber) => (
          <div className="product-admin-card" key={subscriber._id}>
            <div
              className="product-content"
              style={{
                textAlign: "center",
              }}
            >
              <h3
                className="product-title"
                style={{
                  wordBreak: "break-word",
                }}
              >
                📧 {subscriber.email}
              </h3>

              <div className="product-meta">
                <span>
                  Joined on{" "}
                  {new Date(subscriber.createdAt).toLocaleDateString()}
                </span>
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

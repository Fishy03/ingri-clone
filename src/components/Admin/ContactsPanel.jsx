import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";

function ContactsPanel() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchContacts();
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
          <h1>Contact Messages</h1>

          <p>View and manage customer enquiries</p>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Messages</span>

          <h2>{contacts.length}</h2>
        </div>
      </div>

      <div className="products-grid-admin">
        {contacts.map((contact) => (
          <div className="product-admin-card" key={contact._id}>
            <div className="product-content">
              <h3 className="product-title">{contact.name}</h3>

              <div className="product-meta">
                <span>{contact.email}</span>
              </div>

              {contact.phone && (
                <div className="product-meta">
                  <span>{contact.phone}</span>
                </div>
              )}

              {contact.subject && (
                <div className="product-meta">
                  <span className="category-pill">{contact.subject}</span>
                </div>
              )}

              <div className="product-meta">
                <strong>Message</strong>
              </div>

              <div className="message-box">{contact.message}</div>
              <button
                className="edit-btn"
                onClick={() => setSelectedContact(contact)}
              >
                View
              </button>

              <div className="product-meta">
                <span>{new Date(contact.createdAt).toLocaleString()}</span>
              </div>

              <div className="card-buttons">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(contact._id)}
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

export default ContactsPanel;

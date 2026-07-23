import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
    const result = await Swal.fire({
      title: "Delete Message?",
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
        toast.success("Message deleted successfully.");
        fetchContacts();
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete message.");
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

      <div className="products-grid-admin compact-grid">
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
                <span>{contact.message.length} characters</span>
              </div>
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

      {selectedContact && (
        <div className="modal-overlay" onClick={() => setSelectedContact(null)}>
          <div className="product-form" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setSelectedContact(null)}
            >
              ×
            </button>

            <h2>Contact Details</h2>

            <div className="contact-details">
              <div className="detail-row">
                <strong>Name</strong>
                <span>{selectedContact.name}</span>
              </div>

              <div className="detail-row">
                <strong>Email</strong>
                <span>{selectedContact.email}</span>
              </div>

              {selectedContact.phone && (
                <div className="detail-row">
                  <strong>Phone</strong>
                  <span>{selectedContact.phone}</span>
                </div>
              )}

              {selectedContact.subject && (
                <div className="detail-row">
                  <strong>Subject</strong>
                  <span>{selectedContact.subject}</span>
                </div>
              )}

              <div className="detail-row">
                <strong>Received</strong>
                <span>
                  {new Date(selectedContact.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="message-section">
                <strong>Message</strong>

                <div className="message-preview">{selectedContact.message}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactsPanel;

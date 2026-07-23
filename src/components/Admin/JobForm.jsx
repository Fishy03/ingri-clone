import { useState, useEffect } from "react";
import "./ProductForm.css";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";

function JobForm({ job, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || "",
        department: job.department || "",
        location: job.location || "",
        type: job.type || "",
      });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSaving(true);
      let url = `${import.meta.env.VITE_API_URL}/api/jobs`;
      let method = "POST";

      if (job) {
        url = `${import.meta.env.VITE_API_URL}/api/jobs/${job._id}`;
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(job ? "Job Updated!" : "Job Added!");
        onSuccess();
        onClose();
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to save job.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="product-form">
        <button type="button" className="close-modal" onClick={onClose}>
          ×
        </button>

        <h2>{job ? "Edit Job" : "Add Job"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            name="type"
            placeholder="Employment Type"
            value={formData.type}
            onChange={handleChange}
            required
          />

          <div className="buttons">
            <button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : job ? "Update Job" : "Add Job"}
            </button>

            <button type="button" onClick={onClose} disabled={isSaving}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;

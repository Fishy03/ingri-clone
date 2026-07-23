import { useState, useEffect } from "react";
import { getToken } from "../../utils/auth";
import JobForm from "./JobForm";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function JobsPanel() {
  const [jobs, setJobs] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/jobs`);

      const data = await response.json();

      if (data.success) {
        setJobs(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Job?",
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
        `${import.meta.env.VITE_API_URL}/api/jobs/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Job deleted successfully.");
        fetchJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <div className="dashboard-header">
        <div>
          <h1>Job Management</h1>

          <p>Create and manage job openings</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => {
            setEditingJob(null);
            setShowForm(true);
          }}
        >
          + Add Job
        </button>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span>Total Jobs</span>

          <h2>{jobs.length}</h2>
        </div>

        <div className="dashboard-card">
          <span>Departments</span>

          <h2>{new Set(jobs.map((job) => job.department)).size}</h2>
        </div>

        <div className="dashboard-card">
          <span>Job Types</span>

          <h2>{new Set(jobs.map((job) => job.type)).size}</h2>
        </div>
      </div>

      <div className="products-grid-admin">
        {jobs.map((job) => (
          <div className="product-admin-card" key={job._id}>
            <div className="product-content">
              <h3 className="product-title">{job.title}</h3>

              <div className="product-meta">
                <span className="category-pill">{job.department}</span>
              </div>

              <div className="product-meta">
                <span>📍 {job.location}</span>
              </div>

              <div className="product-meta">
                <span>{job.type}</span>
              </div>

              <div className="card-buttons">
                <button
                  className="edit-btn"
                  onClick={() => {
                    setEditingJob(job);
                    setShowForm(true);
                  }}
                >
                  ✏ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(job._id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <JobForm
          job={editingJob}
          onClose={() => {
            setShowForm(false);
            setEditingJob(null);
          }}
          onSuccess={() => {
            fetchJobs();
            setEditingJob(null);
            setShowForm(false);
          }}
        />
      )}
    </>
  );
}

export default JobsPanel;

import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/auth";

const menuItems = [
  { id: "products", label: "📦 Products" },
  { id: "blogs", label: "📝 Blogs" },
  { id: "recipes", label: "🍲 Recipes" },
  { id: "jobs", label: "💼 Jobs" },
  { id: "contacts", label: "📩 Contacts" },
  { id: "newsletter", label: "✉ Newsletter" },
];

function Sidebar({ activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/admin");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>INGRI</h2>
        <span>Admin Panel</span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${activePage === item.id ? "active" : ""}`}
            onClick={() => setActivePage(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;

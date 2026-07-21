import { useEffect, useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import "./Dashboard.css";
import BlogsPanel from "../../components/Admin/BlogsPanel";
import RecipesPanel from "../../components/Admin/RecipePanel";
import ProductsPanel from "../../components/Admin/ProductsPanel";

function Dashboard() {
  const [activePage, setActivePage] = useState("products");

  return (
    <div className="dashboard">
      <div className="dashboard-layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <div className="dashboard-main">
          <div className="dashboard-container">
            {activePage === "products" && (
              <ProductsPanel
              // products={products}
              // showForm={showForm}
              // editingProduct={editingProduct}
              // setShowForm={setShowForm}
              // setEditingProduct={setEditingProduct}
              // handleDelete={handleDelete}
              // fetchProducts={fetchProducts}
              />
            )}
            {activePage === "blogs" && <BlogsPanel />}

            {activePage === "recipes" && <RecipesPanel />}

            {activePage === "jobs" && <h1>Jobs</h1>}

            {activePage === "contacts" && <h1>Contacts</h1>}

            {activePage === "newsletter" && <h1>Newsletter</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

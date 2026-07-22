import { useEffect, useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import "./Dashboard.css";
import BlogsPanel from "../../components/Admin/BlogsPanel";
import RecipesPanel from "../../components/Admin/RecipePanel";
import ProductsPanel from "../../components/Admin/ProductsPanel";
import JobsPanel from "../../components/Admin/JobPanel";

function Dashboard() {
  const [activePage, setActivePage] = useState("products");

  return (
    <div className="dashboard">
      <div className="dashboard-layout">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <div className="dashboard-main">
          <div className="dashboard-container">
            {activePage === "products" && <ProductsPanel />}

            {activePage === "blogs" && <BlogsPanel />}

            {activePage === "recipes" && <RecipesPanel />}

            {activePage === "jobs" && <JobsPanel />}

            {activePage === "contacts" && <h1>Contacts</h1>}

            {activePage === "newsletter" && <h1>Newsletter</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

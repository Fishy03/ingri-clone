import { useEffect, useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import "./Dashboard.css";
import "../../components/Admin/Common/AdminCommon.css";
import BlogsPanel from "../../components/Admin/BlogsPanel";
import RecipesPanel from "../../components/Admin/RecipePanel";
import ProductsPanel from "../../components/Admin/ProductsPanel";
import JobsPanel from "../../components/Admin/JobPanel";
import ContactsPanel from "../../components/Admin/ContactsPanel";
import Newsletter from "../../components/Admin/NewsletterPanel";

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

            {activePage === "contacts" && <ContactsPanel />}

            {activePage === "newsletter" && <Newsletter />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

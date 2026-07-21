import { useEffect, useState } from "react";
import Sidebar from "../../components/Admin/Sidebar";
import "./Dashboard.css";
import BlogsPanel from "../../components/Admin/BlogsPanel";
// import ProductForm from "../../components/Admin/ProductForm";
// import { getToken } from "../../utils/auth";
import ProductsPanel from "../../components/Admin/ProductsPanel";

function Dashboard() {
  // const [products, setProducts] = useState([]);
  // const [showForm, setShowForm] = useState(false);
  // const [editingProduct, setEditingProduct] = useState(null);
  const [activePage, setActivePage] = useState("products");

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/products`,
  //     );

  //     const data = await response.json();

  //     if (data.success) {
  //       setProducts(data.data);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   const confirmDelete = window.confirm(
  //     "Are you sure you want to delete this product?",
  //   );

  //   if (!confirmDelete) return;

  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/products/${id}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Authorization: `Bearer ${getToken()}`,
  //         },
  //       },
  //     );
  //     const data = await response.json();

  //     if (data.success) {
  //       fetchProducts();
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

            {activePage === "recipes" && <h1>Recipes</h1>}

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

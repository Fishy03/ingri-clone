import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Cafe from "./pages/Cafe/Cafe.jsx";
import Reserve from "./pages/Reserve/Reserve.jsx";
import Horeca from "./pages/Horeca/Horeca.jsx";
import Partner from "./pages/Partner/Partner.jsx";
import Gifting from "./pages/Gifting/Gifting.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Recipes from "./pages/Recipes/Recipes.jsx";
import CartSidebar from "./components/CartSidebar/CartSidebar.jsx";
import LoginModal from "./components/LoginModal/LoginModal.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/horeca" element={<Horeca />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <CartSidebar />
      <LoginModal />
    </Router>
  );
}

export default App;

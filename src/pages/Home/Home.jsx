import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Products from "../../components/Products/Products.jsx";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AboutPreview from "../../components/AboutPreview/AboutPreview.jsx";
import Partnerships from "../../components/Partnerships/Partnerships.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <Products />
      <Partnerships />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default Home;

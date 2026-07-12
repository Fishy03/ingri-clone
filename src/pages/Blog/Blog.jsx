import "./Blog.css";

import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import insights from "../../assets/insights.png";
import editor from "../../assets/editor.png";
import Gastronomy from "../../assets/Gastronomy.png";
import wine from "../../assets/wine.png";
import Pastry from "../../assets/Pastry.png";
import gala from "../../assets/gala.png";
import farm from "../../assets/farm.png";
import heritage from "../../assets/heritage.png";

import { ArrowRight } from "lucide-react";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs');
        const data = await response.json();
        if (data.success) {
          setBlogPosts(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const postsPerPage = 3;

  const filteredPosts =
    selectedCategory === "All Stories"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <>
      <Navbar />

      <main className="blog-page">
        {/* HERO */}

        <section className="blog-hero">
          <div className="blog-circle blog-circle-one"></div>
          <div className="blog-circle blog-circle-two"></div>

          <div className="blog-container">
            <div className="blog-left">
              <p className="blog-tag">ARCHIVES & INSIGHTS</p>

              <h1>
                The
                <span> Journal</span>
              </h1>

              <p>
                A curated space where we explore the intersection of classical
                art, seasonal heritage, and the culinary stories that breathe
                life into Ingri.
              </p>
            </div>

            <div className="blog-right">
              <img src={insights} alt="Ingri Journal" />
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}

        <section className="featured-blog">
          <div className="featured-heading">
            <span className="featured-line"></span>

            <p>EDITOR'S CHOICE</p>
          </div>

          <div className="featured-card">
            <div className="featured-image">
              <img src={editor} alt="Featured Story" />

              <span className="featured-category">Museum Stories</span>
            </div>

            <div className="featured-content">
              <div className="featured-meta">
                <span>November 14, 2024</span>

                <span>•</span>

                <span>8 min read</span>
              </div>

              <h2>
                The Renaissance of Seasonal Roots: A Culinary Journey Through
                History
              </h2>

              <p>
                Discover how classical artworks from the 16th century inspire
                our modern approach to vegetable-centric dishes, blending
                historical techniques with contemporary plating.
              </p>

              <div className="featured-bottom">
                <div className="featured-author">
                  <div className="author-avatar">E</div>

                  <span>Eleanor Vance</span>
                </div>

                <button className="read-btn">
                  Read Story
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}

        <section className="blog-filters">
          <div className="filter-container">
            {[
              "All Stories",
              "behind the scenes",
              "culinary",
              "events",
              "sustainability",
              "chef's table",
            ].map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category === "All Stories"
                  ? "All Stories"
                  : category
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1),
                      )
                      .join(" ")}
              </button>
            ))}
          </div>
        </section>

        {/* BLOG GRID */}

        <section className="blog-grid-section">
          <div className="blog-grid">
            {displayedPosts.map((post, index) => (
              <article className="blog-card" key={index}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />

                  <span className="blog-card-category">{post.category}</span>
                </div>

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>

                    <span>•</span>

                    <span>5 min read</span>
                  </div>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <span className="card-author">INGRI Journal</span>

                    <button className="blog-read-btn">
                      Read
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PAGINATION */}

        <section className="blog-pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-btn ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </section>

        {/* NEWSLETTER */}

        <section className="blog-newsletter">
          <div className="newsletter-container">
            <h2>Never miss a story from the gallery.</h2>

            <p>
              Subscribe to our newsletter and get the latest stories, recipes,
              and updates delivered directly to your inbox.
            </p>

            <form
              className="newsletter-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.querySelector('input').value;
                try {
                  const response = await fetch('http://localhost:5000/api/newsletter', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                  });
                  const data = await response.json();
                  if (data.success) {
                    alert('Successfully subscribed!');
                    e.target.reset();
                  } else {
                    alert(data.message || 'Subscription failed');
                  }
                } catch (error) {
                  console.error('Error subscribing:', error);
                  alert('Error subscribing. Please try again.');
                }
              }}
            >
              <input type="email" placeholder="Email address" required />

              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Blog;

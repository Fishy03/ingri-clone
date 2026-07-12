import "./About.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import craft from "../../assets/craft.png";
import whatwedo from "../../assets/whatwedo.png";

import founder1 from "../../assets/founder1.png";
import founder2 from "../../assets/founder2.png";

import { Leaf, ChefHat, Factory, ShieldCheck, ArrowRight } from "lucide-react";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        {/* HERO */}

        <section className="about-hero">
          <div className="about-circle about-circle-one"></div>
          <div className="about-circle about-circle-two"></div>

          <div className="about-container">
            <div className="about-left">
              <p className="about-tag">OUR STORY</p>

              <h1>
                Good
                <span> INGRI-dients.</span>
                <br />
                Good Food
              </h1>

              <p>
                Ingri is a contemporary food brand founded on ingredient-led
                cooking and precise execution. Every format we build reflects
                the same commitment to quality, structure and memorable
                experiences.
              </p>
            </div>

            <div className="about-right">
              <img src={craft} alt="About Ingri" />
            </div>
          </div>
        </section>

        {/* VALUES */}

        <section className="about-values">
          <div className="values-heading">
            <p>OUR VALUES</p>

            <h2>
              Crafted with
              <span> Intention</span>
            </h2>

            <div className="heading-line"></div>

            <p className="values-subtitle">
              Every product we create begins with quality ingredients,
              thoughtful sourcing and an uncompromising commitment to
              consistency.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <Leaf size={34} />

              <h3>Premium Ingredients</h3>

              <p>
                Carefully sourced ingredients selected for freshness, flavour
                and reliability.
              </p>
            </div>

            <div className="value-card">
              <ChefHat size={34} />

              <h3>Chef Crafted</h3>

              <p>
                Recipes developed to deliver restaurant-quality taste with
                effortless preparation.
              </p>
            </div>

            <div className="value-card">
              <Factory size={34} />

              <h3>Modern Production</h3>

              <p>
                State-of-the-art manufacturing that maintains consistency across
                every batch.
              </p>
            </div>

            <div className="value-card">
              <ShieldCheck size={34} />

              <h3>Quality Assurance</h3>

              <p>
                Strict quality checks ensure every product meets the highest
                standards.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}

        <section className="about-story">
          <div className="story-container">
            <div className="story-image">
              <img src={whatwedo} alt="Ingri Cafe" />
            </div>

            <div className="story-content">
              <p className="story-tag">OUR EXPERTISE</p>

              <h2>
                What We
                <span> Do</span>
              </h2>

              <div className="story-line"></div>

              <p>
                At Ingri, we develop ingredient-led food solutions designed for
                both home kitchens and professional environments. From
                ready-to-eat and ready-to-use products to frozen, freeze-dried
                and specialty formats, our focus is on delivering consistent
                quality through chef-led processes and clean-label ingredients.
              </p>

              <p>
                Serving home cooks, restaurants and hospitality partners, Ingri
                combines culinary expertise with modern food systems to create
                products that balance convenience, flavour and reliability.
              </p>

              <a href="/shop" className="about-btn">
                Explore Products
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}

        <section className="about-philosophy">
          <div className="philosophy-container">
            <span className="quote-mark">“</span>

            <h2>
              We don't just create dishes; we create
              <br />
              standards.
            </h2>

            <p>What we build is designed to last.</p>

            <p>In flavour, in systems, and in experience.</p>

            <div className="philosophy-line"></div>

            <span className="philosophy-tag">THE INGRI PHILOSOPHY</span>
          </div>
        </section>

        {/* FOUNDERS */}

        <section className="about-founders">
          <div className="founders-heading">
            <p>OUR PEOPLE</p>

            <h2>
              Meet the
              <span> Founders</span>
            </h2>

            <div className="heading-line"></div>

            <p className="founders-subtitle">
              Two minds united by a singular vision: redefining culinary
              excellence through precision, authenticity and unwavering
              standards.
            </p>
          </div>

          <div className="founders-grid">
            <div className="founder-card">
              <img src={founder1} alt="Chef Sunil Chauhan" />

              <span className="founder-role">FOUNDER</span>

              <h3>Chef Sunil Chauhan</h3>

              <p>
                A graduate of IHM Pusa with over three decades of culinary
                leadership. Renowned for uniting tradition with disciplined
                innovation, he builds concepts rooted in precision and
                scalability.
              </p>

              <em>
                His work reflects a rare balance of craft, structure and
                enduring standards.
              </em>
            </div>

            <div className="founder-card">
              <img src={founder2} alt="Ilisha Chauhan" />

              <span className="founder-role">CO-FOUNDER</span>

              <h3>Ilisha Chauhan</h3>

              <p>
                As Co-Founder, Ilisha shapes the brand's operational backbone
                and creative direction. She integrates strategic thinking with
                an instinctive understanding of craft and customer experience.
              </p>

              <em>
                Her approach ensures every idea grows with both precision and
                purpose.
              </em>
            </div>
          </div>
        </section>

        {/* COMPANY GLIMPSE */}

        <section className="about-company">
          <div className="company-heading">
            <p>THE COMPANY</p>

            <h2>A Glimpse into the Company</h2>

            <div className="heading-line"></div>

            <p className="company-subtitle">
              Founded with the ambition to create a world-class food enterprise
              that prioritizes accountability, honesty, and quality. Ingri was
              born from the recognition that discerning customers seek
              high-quality, origin-focused products that bring them joy. Our
              vision is to cultivate a transparent organization driven by its
              people, where individuals can truly be themselves and excel.
            </p>
          </div>

          <div className="company-grid">
            <div className="company-card">
              <div className="company-icon">☕</div>

              <h3>Museo Camera Cafe</h3>

              <p>
                Our flagship location within the prestigious photography museum.
              </p>
            </div>

            <div className="company-card">
              <div className="company-icon">🛍️</div>

              <h3>Retail Products</h3>

              <p>
                Bringing Ingri quality to your home with curated retail
                offerings.
              </p>
            </div>

            <div className="company-card">
              <div className="company-icon">🤝</div>

              <h3>HoReCa Partnerships</h3>

              <p>
                Collaborating with hotels, restaurants, cafés and corporate
                clients.
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}

        <section className="about-stats">
          <div className="stats-heading">
            <p>BY THE NUMBERS</p>

            <h2>
              Built on
              <span> Consistency</span>
            </h2>

            <div className="heading-line"></div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>120k+</h3>

              <span>Customers Served</span>
            </div>

            <div className="stat-card">
              <h3>2,019</h3>

              <span>Year Founded</span>
            </div>

            <div className="stat-card">
              <h3>50+</h3>

              <span>Menu Items</span>
            </div>

            <div className="stat-card">
              <h3>20+</h3>

              <span>HoReCa Partners</span>
            </div>

            <div className="stat-card">
              <h3>3</h3>

              <span>Locations</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;

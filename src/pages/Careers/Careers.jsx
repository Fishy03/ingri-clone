import "./Careers.css";

import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { ArrowRight, Briefcase, MapPin, Clock, Users } from "lucide-react";

function Careers() {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "${import.meta.env.VITE_API_URL}/api/jobs",
        );
        const data = await response.json();
        if (data.success) {
          setJobOpenings(data.data);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  return (
    <>
      <Navbar />

      <main className="careers-page">
        {/* HERO */}

        <section className="careers-hero">
          <div className="careers-circle careers-circle-one"></div>
          <div className="careers-circle careers-circle-two"></div>

          <div className="careers-container">
            <p className="careers-tag">CAREERS</p>

            <h1>
              Come Build Something
              <br />
              <span>Delicious</span> With Us
            </h1>

            <p>
              At INGRI, we're not just making food — we're crafting experiences
              that bring people together. Join a team where passion meets
              purpose.
            </p>
          </div>
        </section>

        {/* OPEN POSITIONS */}

        <section className="careers-openings">
          <div className="openings-heading">
            <p>OPEN POSITIONS</p>

            <h2>
              Join Our
              <span> Team</span>
            </h2>

            <div className="heading-line"></div>
          </div>

          {jobOpenings.length > 0 ? (
            <div className="job-openings-grid">
              {jobOpenings.map((job) => (
                <div key={job._id} className="job-card">
                  <h3>{job.title}</h3>
                  <div className="job-details">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-openings">
              <Briefcase size={42} className="briefcase-icon" />

              <h3>No open positions at the moment</h3>

              <p>
                Check back soon or send your resume to
                <a href="mailto:careers@ingri.in">careers@ingri.in</a>
              </p>
            </div>
          )}
        </section>

        {/* WHAT WE LOOK FOR */}

        <section className="career-values">
          <div className="values-heading">
            <p>WHAT WE LOOK FOR</p>

            <h2>
              Are You Ready to Be Part of Something
              <span> Special?</span>
            </h2>

            <div className="heading-line"></div>
          </div>

          <div className="career-values-grid">
            <div className="career-value-card">
              <Users size={22} />

              <div>
                <h3>Curiosity & Dedication</h3>

                <p>
                  A genuine passion for food, flavors, and the craft behind
                  everything we create.
                </p>
              </div>
            </div>

            <div className="career-value-card">
              <Users size={22} />

              <div>
                <h3>Teamwork & Social Skills</h3>

                <p>
                  We thrive together. Strong collaboration and communication are
                  at our core.
                </p>
              </div>
            </div>

            <div className="career-value-card">
              <Clock size={22} />

              <div>
                <h3>Accountability & Pride</h3>

                <p>
                  Own your work, take pride in every detail, and hold yourself
                  to the highest standards.
                </p>
              </div>
            </div>

            <div className="career-value-card">
              <ArrowRight size={22} />

              <div>
                <h3>Eager to Learn & Execute</h3>

                <p>
                  Stay curious, embrace new challenges, and turn ideas into
                  action every single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS CTA */}

        <section className="careers-cta">
          <div className="careers-overlay"></div>

          <div className="careers-cta-content">
            <p className="cta-tag">JOIN THE TEAM</p>

            <h2>
              Think You'd Be a Great
              <span> Fit?</span>
            </h2>

            <p>
              We'd love to hear from you. Send us your resume and a few words
              about why you're excited about INGRI. We're always open to meeting
              passionate people.
            </p>

            <div className="cta-buttons">
              <a href="mailto:careers@ingri.in" className="cta-primary">
                <ArrowRight size={18} />
                Send Your Resume
              </a>

              <a href="/contact" className="cta-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Careers;

import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const values = [
  { icon: '🧼', title: 'Hygiene First', desc: 'We maintain the highest cleanliness standards — always. Your health is our priority.' },
  { icon: '💛', title: 'Flavors That Deliver', desc: 'Every item is made fresh with real ingredients. No shortcuts, no compromise.' },
  { icon: '💰', title: 'Pocket-Friendly Always', desc: '₹1 to ₹200 per person — because good food shouldn\'t be a luxury.' },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="section-container about-hero-content">
          <p className="section-eyebrow fade-up">Our Story</p>
          <h1 className="about-hero-title fade-up">More Than Just a Café.</h1>
          <p className="about-hero-sub fade-up">
            We built this place for people who believe great food should be clean, affordable, and full of heart.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="section-container story-inner">
          <div className="story-image-col fade-left">
            <div className="story-image-placeholder">
              <div className="story-img-overlay">
                <span className="story-img-icon">☕</span>
                <span className="story-img-label">The Cafecito</span>
              </div>
            </div>
          </div>
          <div className="story-text-col fade-right">
            <p className="section-eyebrow dark">Where It All Began</p>
            <h2 className="story-heading">A Corner Built on Care</h2>
            <p className="story-body">
              The Cafecito was born out of a simple belief — that good food should not only taste great but also be clean, safe, and accessible. Nestled in Marium Nagar, Sewa Nagar, just a short walk from campus, we opened our doors to become that go-to corner where students could unwind, families could share a meal, and every guest would leave satisfied.
            </p>
            <p className="story-body" style={{ marginTop: '18px' }}>
              From our very first day, hygiene and quality have been non-negotiable. Every ingredient is fresh, every plate is prepared with attention, and every guest is welcomed like a regular. That's not just a motto — it's how we run every single shift.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="section-container">
          <p className="section-eyebrow fade-up" style={{ textAlign: 'center' }}>What We Stand For</p>
          <h2 className="values-heading fade-up">The Principles Behind Every Plate</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card fade-up">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings */}
      <section className="ratings-section">
        <div className="section-container ratings-inner">
          <p className="section-eyebrow dark fade-up" style={{ textAlign: 'center' }}>Recognition</p>
          <h2 className="ratings-heading fade-up">Loved by Hundreds, Rated by All.</h2>
          <div className="big-rating fade-scale">4.9 ★</div>
          <p className="ratings-sub fade-up">Based on 156 verified Google Reviews</p>
          <blockquote className="ratings-quote fade-up">
            "One of the best budget cafes near campus — fresh food, generous portions, welcoming staff."
            <cite> — Verified Guest</cite>
          </blockquote>
        </div>
      </section>

      {/* Owner Note */}
      <section className="owner-section">
        <div className="section-container owner-inner">
          <div className="owner-card fade-up">
            <p className="section-eyebrow" style={{ marginBottom: '20px' }}>A Message from Our Kitchen</p>
            <blockquote className="owner-message">
              "We're truly grateful for every guest who walks through our door. It's your trust, your kind words, and your continued support that pushes us to do better every single day. Whether you're here for a quick coffee between classes or a long evening with friends — we're honored to be part of your day. See you soon at The Cafecito. 🧡"
            </blockquote>
            <Link to="/menu" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

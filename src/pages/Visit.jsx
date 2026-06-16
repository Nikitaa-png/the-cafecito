import { useScrollReveal } from '../hooks/useScrollReveal';
import './Visit.css';

const cards = [
  {
    icon: '📍',
    title: 'Location',
    content: (
      <>
        <p>Shop No 2, Marium Nagar, Sewa Nagar,<br />Ghaziabad, Uttar Pradesh 201001</p>
        <a
          href="https://maps.google.com/?q=The+Cafecito+Marium+Nagar+Ghaziabad"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-outline info-btn"
        >
          Get Directions
        </a>
      </>
    ),
  },
  {
    icon: '🕐',
    title: 'Hours',
    content: (
      <>
        <p className="hours-main">Mon – Sun</p>
        <p className="hours-time">11:00 AM – 10:00 PM</p>
        <p className="hours-note">People typically spend 25 min to 3 hours here.</p>
        <p className="hours-peak">Peak hours: Friday & Saturday evenings</p>
      </>
    ),
  },
  {
    icon: '📞',
    title: 'Contact',
    content: (
      <>
        <p className="contact-num">+91 98119 27262</p>
        <p>Call ahead for bulk orders and party bookings.</p>
        <a href="tel:+919811927262" className="btn-primary info-btn">
          Call Us
        </a>
      </>
    ),
  },
];

export default function Visit() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="visit-hero">
        <div className="visit-grain" />
        <div className="visit-hero-overlay" />
        <div className="section-container visit-hero-content">
          <p className="section-eyebrow fade-up">Find Us</p>
          <h1 className="visit-hero-title fade-up">Come Find Us.</h1>
          <p className="visit-hero-sub fade-up">
            A cozy corner in Sewa Nagar that's always worth the visit.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="visit-info-section">
        <div className="section-container">
          <div className="info-cards-grid">
            {cards.map((card, i) => (
              <div key={i} className="info-card fade-up">
                <div className="info-card-icon">{card.icon}</div>
                <h3 className="info-card-title">{card.title}</h3>
                <div className="info-card-content">{card.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="section-container">
          <p className="section-eyebrow fade-up" style={{ marginBottom: '24px' }}>Find Us on the Map</p>
          <div className="map-wrapper fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0977!2d77.4126!3d28.6712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThe+Cafecito%2C+Marium+Nagar%2C+Sewa+Nagar%2C+Ghaziabad!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: '12px', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Cafecito Location"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="visit-cta fade-up">
        <div className="section-container visit-cta-inner">
          <h2 className="visit-cta-heading">Ready to visit? Order ahead on Zomato.</h2>
          <a
            href="https://zomato.onelink.me/xqzv/i32n07wd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🍽 Order on Zomato
          </a>
        </div>
      </section>
    </>
  );
}

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

/* ── Hero ── */
function Hero() {
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.1}px)`;
      if (textRef.current) textRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-content" ref={textRef}>
        <h1 className="hero-headline">
          Your Go-To Spot for <em>Good Food</em>,<br />Good Vibes, and Great Coffee.
        </h1>
        <p className="hero-sub">
          Fresh, flavorful, and filling — right near campus. Budget-friendly bites that never compromise on taste.
        </p>
        <div className="hero-btns">
          <Link to="/menu" className="btn-primary">Explore Our Menu</Link>
          <Link to="/visit" className="btn-outline">Find Us</Link>
        </div>
        <div className="hero-badge">
          <span className="badge-star">⭐</span>
          <span>4.9 · 156 Google Reviews</span>
        </div>
      </div>
    </section>
  );
}

/* ── Signature Items ── */
const items = [
  { icon: '🧄', name: 'Cheesy Garlic Bread', caption: 'The one everyone talks about.' },
  { icon: '☕', name: 'Classic Cold Coffee', caption: 'Smooth, bold, and perfectly chilled.' },
  { icon: '🍔', name: 'Veg Burger', caption: 'Crispy, fresh, and oh-so-satisfying.' },
  { icon: '🥤', name: 'Loaded Milkshake', caption: 'Thick, rich, and newly introduced.' },
];

function SignatureItems() {
  return (
    <section className="signature-section">
      <div className="section-container">
        <p className="section-eyebrow fade-up">Fan Favourites</p>
        <h2 className="signature-heading fade-up">The Ones You Keep Coming Back For</h2>
        <div className="signature-grid">
          {items.map((item, i) => (
            <div key={i} className="sig-card fade-up">
              <div className="sig-icon">{item.icon}</div>
              <h3 className="sig-name">{item.name}</h3>
              <p className="sig-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Cafecito ── */
function useCountUp(target, duration = 1800, suffix = '') {
  const [val, setVal] = useState('0');
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const isFloat = String(target).includes('.');
        const num = parseFloat(target);
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const cur = num * eased;
          setVal((isFloat ? cur.toFixed(1) : Math.round(cur)) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, suffix]);

  return [val, ref];
}

function StatItem({ value, suffix, label }) {
  const [display, ref] = useCountUp(value, 1600, suffix);
  return (
    <div className="stat-item fade-up" ref={ref}>
      <span className="stat-number">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function WhyCafecito() {
  return (
    <section className="why-section">
      <div className="section-container why-inner">
        <div className="why-stats fade-left">
          <StatItem value="4.9" suffix="★" label="Google Rating" />
          <StatItem value="156" suffix="+" label="Happy Reviews" />
          <div className="stat-item fade-up">
            <span className="stat-number">₹1–200</span>
            <span className="stat-label">Average Spend</span>
          </div>
          <div className="stat-item fade-up">
            <span className="stat-number">25m–3hr</span>
            <span className="stat-label">Typical Visit</span>
          </div>
        </div>
        <div className="why-copy fade-up">
          <p className="section-eyebrow dark">Our Promise</p>
          <h2 className="why-heading">Good Food Shouldn't Cost a Fortune.</h2>
          <p className="why-body">
            At The Cafecito, we believe every meal should be clean, safe, and delicious — without burning a hole in your pocket. Nestled in a cozy corner near the campus, we've built a space where students, families, and food lovers all feel at home.
          </p>
          <p className="why-body" style={{ marginTop: '16px' }}>
            From our freshly made garlic bread to our creamy cold coffee, every item on our menu is crafted with care and served with a smile.
          </p>
          <Link to="/menu" className="btn-primary" style={{ marginTop: '28px' }}>See Our Menu</Link>
        </div>
      </div>
    </section>
  );
}

/* ── Reviews Carousel ── */
const reviews = [
  { name: 'Arvind Tyagi', stars: 5, text: 'Fresh, flavorful, and very filling — perfect after a long day of classes. Portions are generous, so you definitely get value for every rupee spent.' },
  { name: 'Shalika Budhiraja', stars: 5, text: 'Visited for breakfast. Special burgers, fries, shakes, coffee, and garlic bread — the taste was absolutely yum. Staff were welcoming, and I loved it so much I planned my evening party here too.' },
  { name: 'Trishla Negi', stars: 4, text: 'One of the most budget-friendly cafes with a great variety. Cheesy Garlic Bread, Salted Fries, Paneer Wrap, Vada Pao, and Classic Cold Coffee are absolute highlights.' },
  { name: 'Anmol Gupta', stars: 5, text: 'If you\'re looking for a cozy, vibrant café with great vibes and delicious coffee in Ghaziabad, The Cafecito absolutely delivers. From the moment you walk in, the friendly staff make you feel welcome.' },
  { name: 'Jyoti Chhikara', stars: 5, text: 'The garlic bread totally exceeded my expectations — loaded with fresh toppings on a perfectly crispy base. The burgers were juicy, flavorful, and super satisfying.' },
];

function ReviewCarousel() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % reviews.length), 4000);
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, []);

  const go = (n) => { setIdx(n); startTimer(); };

  return (
    <section className="reviews-section">
      <div className="section-container">
        <p className="section-eyebrow light fade-up">Guest Reviews</p>
        <h2 className="reviews-heading fade-up">What Our Guests Are Saying</h2>
        <div className="carousel-track" onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={startTimer}>
          <div className="carousel-viewport">
            {reviews.map((r, i) => {
              const pos = (i - idx + reviews.length) % reviews.length;
              let cls = 'review-card';
              if (pos === 0) cls += ' active';
              else if (pos === 1) cls += ' next';
              else if (pos === reviews.length - 1) cls += ' prev';
              else cls += ' hidden';
              return (
                <div key={i} className={cls}>
                  <div className="review-top-border" />
                  <div className="review-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                  <p className="review-text">"{r.text}"</p>
                  <p className="review-author">— {r.name}</p>
                </div>
              );
            })}
          </div>
          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={() => go((idx - 1 + reviews.length) % reviews.length)} aria-label="Previous">‹</button>
            <div className="carousel-dots">
              {reviews.map((_, i) => (
                <button key={i} className={`dot ${i === idx ? 'active' : ''}`} onClick={() => go(i)} aria-label={`Review ${i + 1}`} />
              ))}
            </div>
            <button className="carousel-arrow" onClick={() => go((idx + 1) % reviews.length)} aria-label="Next">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Instagram ── */
const instaPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: 'Coffee latte art in a cozy cafe',
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    alt: 'Cheesy garlic bread close up',
  },
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    alt: 'Warm cafe interior ambiance',
  },
  {
    url: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&q=80',
    alt: 'Cold coffee with cream',
  },
  {
    url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
    alt: 'Loaded burger with fries',
  },
  {
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80',
    alt: 'Thick milkshake with toppings',
  },
];

function InstagramSection() {
  return (
    <section className="insta-section">
      <div className="section-container">
        <p className="section-eyebrow dark fade-up">Social</p>
        <h2 className="insta-heading fade-up">Follow Our Vibe</h2>
        <p className="insta-sub fade-up">@thecafecito.in — See what's fresh today</p>
        {/* Live feed: replace with Instagram Basic Display API or Curator.io widget */}
        <div className="insta-grid">
          {instaPhotos.map((photo, i) => (
            <a
              key={i}
              href="https://www.instagram.com/thecafecito.in"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-tile fade-scale"
              aria-label={`View on Instagram — ${photo.alt}`}
              style={{ '--i': i }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="insta-img"
              />
              <div className="insta-hover">
                <span className="insta-heart">♥</span>
                <span className="insta-view">View on Instagram</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-up">
          <a
            href="https://www.instagram.com/thecafecito.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Order Banner ── */
function OrderBanner() {
  return (
    <section className="order-banner fade-up">
      <div className="banner-texture" />
      <div className="section-container banner-inner">
        <h2 className="banner-heading">Craving Something Right Now?</h2>
        <p className="banner-sub">Order fresh from The Cafecito — delivered to your door via Zomato.</p>
        <a
          href="https://zomato.onelink.me/xqzv/i32n07wd"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary banner-btn"
        >
          🍽 Order on Zomato
        </a>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Home() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <SignatureItems />
      <WhyCafecito />
      <ReviewCarousel />
      <InstagramSection />
      <OrderBanner />
    </>
  );
}

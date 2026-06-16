import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Menu.css';

const vegItems = {
  'Starters & Snacks': [
    'Cheesy Garlic Bread', 'Plain Garlic Bread', 'Salted Fries',
    'Peri Peri Fries', 'Cheese Fries', 'Loaded Nachos',
    'Paneer Wrap', 'Vada Pao', 'Corn & Cheese Toast',
  ],
  'Mains': [
    'Veg Burger', 'Veggie Loaded Burger', 'Paneer Burger', 'Aloo Tikki Burger',
    'Veg Pasta (Red / White)', 'Maggi (Plain / Masala / Cheese)',
    'Veg Sandwich', 'Grilled Veg Sandwich',
  ],
};

const nonVegItems = {
  'Chicken Dishes': [
    'Chicken Burger', 'Chicken Loaded Burger', 'Crispy Chicken Burger',
    'Chicken Wrap', 'Chicken Pasta (Red / White)', 'Chicken Sandwich',
  ],
};

const beverages = {
  'Hot Beverages': [
    'Espresso', 'Americano', 'Café Latte', 'Cappuccino', 'Hot Chocolate', 'Masala Chai',
  ],
  'Cold Coffee & Shakes': [
    'Classic Cold Coffee', 'Vanilla Cold Coffee', 'Mocha Cold Coffee',
    'Oreo Milkshake', 'Chocolate Milkshake', 'Strawberry Milkshake',
    'Butterscotch Milkshake', 'Loaded Milkshake ✦ New',
  ],
  'Mocktails & Coolers': [
    'Virgin Mojito', 'Blue Lagoon', 'Watermelon Cooler', 'Lemonade',
  ],
};

function MenuCard({ name, isVeg, isNonVeg }) {
  return (
    <div className="menu-card fade-up">
      <span className="food-dot" style={{ color: isVeg ? '#4CAF50' : isNonVeg ? '#E53935' : '#C8A96E' }}>●</span>
      <span className="menu-item-name">{name}</span>
    </div>
  );
}

function CategorySection({ title, items, isVeg, isNonVeg }) {
  return (
    <div className="cat-section">
      <h3 className="cat-title fade-up">{title}</h3>
      <div className="menu-grid">
        {items.map((item, i) => (
          <MenuCard key={i} name={item} isVeg={isVeg} isNonVeg={isNonVeg} />
        ))}
      </div>
    </div>
  );
}

function FoodTab() {
  const [sub, setSub] = useState('veg');
  return (
    <div className="food-tab-content">
      <div className="sub-toggle">
        <button
          className={`sub-btn ${sub === 'veg' ? 'active-veg' : ''}`}
          onClick={() => setSub('veg')}
        >
          <span className="veg-dot">🟢</span> Veg
        </button>
        <button
          className={`sub-btn ${sub === 'nonveg' ? 'active-nonveg' : ''}`}
          onClick={() => setSub('nonveg')}
        >
          <span className="nv-dot">🔴</span> Non-Veg
        </button>
      </div>

      <div className={`tab-panel ${sub === 'veg' ? 'show' : ''}`}>
        {Object.entries(vegItems).map(([cat, items]) => (
          <CategorySection key={cat} title={cat} items={items} isVeg />
        ))}
      </div>
      <div className={`tab-panel ${sub === 'nonveg' ? 'show' : ''}`}>
        {Object.entries(nonVegItems).map(([cat, items]) => (
          <CategorySection key={cat} title={cat} items={items} isNonVeg />
        ))}
      </div>
    </div>
  );
}

function BeveragesTab() {
  return (
    <div className="bev-tab-content">
      {Object.entries(beverages).map(([cat, items]) => (
        <div key={cat} className="bev-section">
          <h3 className="bev-cat-label fade-up">{cat}</h3>
          <div className="menu-grid">
            {items.map((item, i) => (
              <div key={i} className="menu-card bev-card fade-up">
                <span className="bev-dot">☕</span>
                <span className="menu-item-name">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Menu() {
  const [tab, setTab] = useState('food');
  useScrollReveal();

  return (
    <>
      {/* Hero bar */}
      <section className="menu-hero">
        <div className="section-container">
          <h1 className="menu-hero-title fade-up">Our Menu</h1>
          <p className="menu-hero-sub fade-up">
            Fresh ingredients. Honest flavors. Made with care every single day.
          </p>
        </div>
      </section>

      {/* Main tabs */}
      <section className="menu-body">
        <div className="section-container">
          <div className="main-tabs fade-up">
            <button
              className={`main-tab ${tab === 'food' ? 'active' : ''}`}
              onClick={() => setTab('food')}
            >
              🥗 Food
            </button>
            <button
              className={`main-tab ${tab === 'bev' ? 'active' : ''}`}
              onClick={() => setTab('bev')}
            >
              🥤 Beverages
            </button>
          </div>

          <div className="tab-content-wrapper">
            <div className={`tab-panel ${tab === 'food' ? 'show' : ''}`}>
              <FoodTab />
            </div>
            <div className={`tab-panel ${tab === 'bev' ? 'show' : ''}`}>
              <BeveragesTab />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="menu-cta-strip">
        <div className="section-container menu-cta-inner">
          <div>
            <p className="menu-cta-text">Can't decide? Order directly on Zomato and see today's availability.</p>
          </div>
          <a
            href="https://zomato.onelink.me/xqzv/i32n07wd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            🍽 Order Now
          </a>
        </div>
      </section>
    </>
  );
}

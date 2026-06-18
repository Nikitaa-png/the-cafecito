import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Menu.css';

/* ── Data ── */
const vegItems = {
  'Starters & Snacks': [
    { name: 'Cheesy Garlic Bread', price: 99, img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&q=75', badge: '⭐ Bestseller' },
    { name: 'Plain Garlic Bread', price: 69, img: 'https://images.unsplash.com/photo-1619531040576-f9416740661f?w=400&q=75' },
    { name: 'Salted Fries', price: 59, img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=75' },
    { name: 'Peri Peri Fries', price: 79, img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&q=75' },
    { name: 'Cheese Fries', price: 89, img: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=75' },
    { name: 'Loaded Nachos', price: 119, img: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&q=75' },
    { name: 'Paneer Wrap', price: 109, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=75' },
    { name: 'Vada Pao', price: 39, img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=75' },
    { name: 'Corn & Cheese Toast', price: 89, img: 'https://images.unsplash.com/photo-1484723091739-30990cefc0ca?w=400&q=75' },
  ],
  'Mains': [
    { name: 'Veg Burger', price: 99, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75', badge: '🔥 Popular' },
    { name: 'Veggie Loaded Burger', price: 129, img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=75' },
    { name: 'Paneer Burger', price: 119, img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=75' },
    { name: 'Aloo Tikki Burger', price: 89, img: 'https://images.unsplash.com/photo-1596662951482-0bc3ca5b66df?w=400&q=75' },
    { name: 'Veg Pasta (Red / White)', price: 129, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=75' },
    { name: 'Maggi (Plain / Masala / Cheese)', price: 69, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=75' },
    { name: 'Veg Sandwich', price: 79, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=75' },
    { name: 'Grilled Veg Sandwich', price: 99, img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400&q=75' },
  ],
};

const nonVegItems = {
  'Chicken Dishes': [
    { name: 'Chicken Burger', price: 139, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=75', badge: '🔥 Popular' },
    { name: 'Chicken Loaded Burger', price: 169, img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&q=75' },
    { name: 'Crispy Chicken Burger', price: 159, img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&q=75' },
    { name: 'Chicken Wrap', price: 149, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=75' },
    { name: 'Chicken Pasta (Red / White)', price: 159, img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&q=75' },
    { name: 'Chicken Sandwich', price: 129, img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400&q=75' },
  ],
};

const beverages = {
  'Hot Beverages': [
    { name: 'Espresso', price: 59, img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=75' },
    { name: 'Americano', price: 69, img: 'https://images.unsplash.com/photo-1532004491497-ba35c367d634?w=400&q=75' },
    { name: 'Café Latte', price: 89, img: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=75' },
    { name: 'Cappuccino', price: 89, img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=75' },
    { name: 'Hot Chocolate', price: 99, img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=75' },
    { name: 'Masala Chai', price: 39, img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=75' },
  ],
  'Cold Coffee & Shakes': [
    { name: 'Classic Cold Coffee', price: 99, img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=75', badge: '⭐ Bestseller' },
    { name: 'Vanilla Cold Coffee', price: 109, img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=75' },
    { name: 'Mocha Cold Coffee', price: 119, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=75' },
    { name: 'Oreo Milkshake', price: 129, img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=75' },
    { name: 'Chocolate Milkshake', price: 119, img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=75' },
    { name: 'Strawberry Milkshake', price: 119, img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=75' },
    { name: 'Butterscotch Milkshake', price: 129, img: 'https://images.unsplash.com/photo-1618450822854-b3fdc6e3f6e7?w=400&q=75' },
    { name: 'Loaded Milkshake', price: 149, img: 'https://images.unsplash.com/photo-1605969040664-f4dcd4b00aa4?w=400&q=75', badge: '✦ New' },
  ],
  'Mocktails & Coolers': [
    { name: 'Virgin Mojito', price: 99, img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=75' },
    { name: 'Blue Lagoon', price: 109, img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=75' },
    { name: 'Watermelon Cooler', price: 99, img: 'https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?w=400&q=75' },
    { name: 'Lemonade', price: 69, img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&q=75' },
  ],
};

/* ── Menu Card ── */
function MenuCard({ item, isVeg, isNonVeg }) {
  return (
    <div className="menu-card fade-scale">
      <div className="menu-card-img-wrap">
        <img
          src={item.img}
          alt={item.name}
          className="menu-card-img"
          loading="lazy"
          onError={e => { e.target.style.display = 'none'; }}
        />
        {item.badge && <span className="menu-card-badge">{item.badge}</span>}
        <div className="menu-card-dot-wrap">
          {isVeg   && <span className="veg-indicator" title="Vegetarian" />}
          {isNonVeg && <span className="nonveg-indicator" title="Non-Vegetarian" />}
        </div>
      </div>
      <div className="menu-card-body">
        <p className="menu-card-name">{item.name}</p>
        <p className="menu-card-price">₹{item.price}</p>
      </div>
    </div>
  );
}

function CategorySection({ title, items, isVeg, isNonVeg }) {
  return (
    <div className="cat-section">
      <h3 className="cat-title fade-up">{title}</h3>
      <div className="menu-grid">
        {items.map((item, i) => (
          <MenuCard key={i} item={item} isVeg={isVeg} isNonVeg={isNonVeg} />
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
        <button className={`sub-btn ${sub === 'veg' ? 'active-veg' : ''}`} onClick={() => setSub('veg')}>
          🟢 Veg
        </button>
        <button className={`sub-btn ${sub === 'nonveg' ? 'active-nonveg' : ''}`} onClick={() => setSub('nonveg')}>
          🔴 Non-Veg
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
        <CategorySection key={cat} title={cat} items={items} />
      ))}
    </div>
  );
}

export default function Menu() {
  const [tab, setTab] = useState('food');
  useScrollReveal();

  return (
    <>
      <section className="menu-hero">
        <div className="section-container">
          <p className="section-eyebrow fade-up">What We Serve</p>
          <h1 className="menu-hero-title fade-up">Our Menu</h1>
          <p className="menu-hero-sub fade-up">
            Fresh ingredients. Honest flavors. Made with care every single day.
          </p>
        </div>
      </section>

      <section className="menu-body">
        <div className="section-container">
          <div className="main-tabs fade-up">
            <button className={`main-tab ${tab === 'food' ? 'active' : ''}`} onClick={() => setTab('food')}>
              🥗 Food
            </button>
            <button className={`main-tab ${tab === 'bev' ? 'active' : ''}`} onClick={() => setTab('bev')}>
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

      <section className="menu-cta-strip">
        <div className="section-container menu-cta-inner">
          <p className="menu-cta-text">Can't decide? Order directly on Zomato and see today's availability.</p>
          <a href="https://zomato.onelink.me/xqzv/i32n07wd" target="_blank" rel="noopener noreferrer" className="btn-primary">
            🍽 Order Now
          </a>
        </div>
      </section>
    </>
  );
}

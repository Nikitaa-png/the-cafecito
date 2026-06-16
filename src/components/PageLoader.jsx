import { useState, useEffect } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // bar fills in ~1.8s → hide at 2.4s
    const timer = setTimeout(() => setHidden(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
      <div className="loader-ring" />
      <div className="loader-logo">
        The Cafecito<span>.</span>
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}

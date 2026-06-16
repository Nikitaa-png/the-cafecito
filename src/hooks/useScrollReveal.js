import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right, .fade-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Stagger siblings
            const siblings = el.parentElement
              ? [...el.parentElement.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right, .fade-scale')]
              : [];
            const idx = siblings.indexOf(el);
            const base = parseFloat(el.dataset.delay || 0);
            el.style.transitionDelay = `${base + idx * 0.07}s`;
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

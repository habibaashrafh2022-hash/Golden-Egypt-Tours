import { useEffect } from 'react';

export default function useLuxuryEffects() {
  useEffect(() => {
    // ─── Custom Cursor ───
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      rafId = requestAnimationFrame(animateRing);
    };

    const handleHover = (e) => {
      const el = e.target.closest('a, button, [data-hover]');
      if (ring) ring.classList.toggle('hovering', !!el);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    rafId = requestAnimationFrame(animateRing);

    // ─── Scroll Progress ───
    const progressBar = document.querySelector('.scroll-progress');
    const updateProgress = () => {
      if (!progressBar) return;
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min((scrolled / max) * 100, 100);
      progressBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    // ─── Reveal on Scroll ───
    const revealEls = document.querySelectorAll('.reveal, .reveal-left');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));

    // ─── Loading Screen ───
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = '';
      }, 2200);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('scroll', updateProgress);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);
}
import { useEffect } from 'react';
import T from '../data/theme';

const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
      body { overflow-x: hidden; background: ${T.bg}; }
      a { text-decoration: none; color: inherit; cursor: pointer; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes expandLine {
        0%,100% { width: 24px; opacity: 0.3; }
        50%     { width: 48px; opacity: 0.7; }
      }
      @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-15px,20px)} }
      @keyframes float2 { 0%,100%{transform:rotate(45deg) translate(0,0)} 50%{transform:rotate(45deg) translate(10px,-15px)} }
      @keyframes float3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(5px,10px) scale(1.1)} }
      .geo-1 { animation: float1 8s ease-in-out infinite; }
      .geo-2 { animation: float2 10s ease-in-out infinite; transform: rotate(45deg); }
      .geo-3 { animation: float3 6s ease-in-out infinite; }
      .scroll-line { animation: expandLine 2s ease-in-out infinite; }
      .service-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 3px;
        background: ${T.accent};
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s ease;
      }
      .service-card:hover::before { transform: scaleX(1); }
      .nav-link { position: relative; padding-bottom: 2px; transition: color 0.2s; }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -2px; left: 0;
        width: 0; height: 1px;
        background: ${T.text};
        transition: width 0.3s ease;
      }
      .nav-link:hover::after { width: 100%; }

      /* ─── Responsive ─── */
      .hero-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 60px); }
      .services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; }
      .exp-row { display: grid; grid-template-columns: 160px 1fr auto; align-items: center; }
      .works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; }

      @media (max-width: 1024px) {
        .services-grid { grid-template-columns: repeat(2, 1fr); }
      }

      @media (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr; min-height: auto; }
        .hero-dark { min-height: 70vh; }
        .services-grid { grid-template-columns: 1fr; }
        .exp-row { grid-template-columns: 1fr; gap: 4px; }
        .exp-type-badge { margin-top: 8px; justify-self: start; }
        .works-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        .footer-bottom { flex-direction: column; gap: 8px; }
      }

      @media (max-width: 480px) {
        .site-header { padding: 0 20px !important; }
        .site-nav { gap: 16px !important; font-size: 12px !important; }
        .hero-dark { padding: 64px 24px 36px !important; min-height: 60vh; }
        .hero-info { padding: 48px 20px !important; }
        .section-pad { padding-left: 20px !important; padding-right: 20px !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

export default GlobalStyles;

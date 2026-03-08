import { useEffect } from 'react';
import T from '../data/theme';

const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
      body { overflow-x: hidden; background: ${T.bg}; }
      a { text-decoration: none; color: inherit; cursor: pointer; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .hero-video { object-position: center 30%; }
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
      .hero-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 52px); }
      .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; }
      .exp-row { display: grid; grid-template-columns: 160px 1fr auto; align-items: center; }
      .writing-row { display: grid; grid-template-columns: 100px 1fr auto; align-items: baseline; gap: 16px; }
      .works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
      .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; }

      @media (max-width: 1024px) {
        .services-grid { grid-template-columns: repeat(2, 1fr); }
        .works-grid { grid-template-columns: repeat(2, 1fr); }
      }

      /* ─── Tablet / small laptop ─── */
      @media (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr; min-height: auto; }
        .hero-dark { min-height: 60vh; }
        .desktop-nav { display: none !important; }
        .mobile-menu-btn { display: flex !important; }
        .services-grid { grid-template-columns: 1fr; }
        .exp-row { grid-template-columns: 1fr; gap: 4px; }
        .exp-type-badge { margin-top: 8px; justify-self: start; }
        .writing-row { grid-template-columns: 1fr; gap: 4px; }
        .works-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        .footer-bottom { flex-direction: column; gap: 8px; }
        .hero-info { padding: 40px 32px !important; }
      }

      /* ─── Tooltip: prevent left-overflow on narrow screens ─── */
      @media (max-width: 768px) {
        .pill-tooltip {
          left: 0 !important;
          transform: translateY(0) !important;
          max-width: calc(100vw - 40px) !important;
        }
        .pill-tooltip > div { left: 24px !important; }
      }

      /* ─── Mobile: iPhone / Huawei / OPPO Find N5 folded ─── */
      @media (max-width: 480px) {
        .site-header { padding: 0 20px !important; height: 44px !important; }
        .site-header > div:first-child { font-size: 14px !important; }
        .hero-dark {
          padding: 32px 20px 24px !important;
          min-height: auto !important;
        }
        .hero-dark h1 { font-size: clamp(32px, 9vw, 44px) !important; margin-bottom: 12px !important; }
        .hero-dark .hero-subtags { margin-bottom: 16px !important; font-size: 11px !important; }
        .hero-info { padding: 24px 20px !important; }
        .hero-info h2 { font-size: 28px !important; margin-bottom: 4px !important; }
        .hero-info > p { font-size: 14px !important; margin-bottom: 24px !important; }
        .hero-info > div { margin-bottom: 16px !important; }
        .hero-info > div span:first-child { font-size: 10px !important; margin-bottom: 4px !important; }
        .hero-info .pill-row { gap: 6px !important; margin-top: 4px !important; }
        .hero-info .pill-item { padding: 7px 14px !important; font-size: 12px !important; }
        .hero-info > a { margin-top: 12px !important; font-size: 14px !important; padding: 8px 0 !important; }
        .section-pad { padding-left: 20px !important; padding-right: 20px !important; }
        .status-dot { width: 16px !important; height: 16px !important; }
        .hero-video { object-position: center 40% !important; }
      }

      /* ─── Small mobile: iPhone SE / narrow Android ─── */
      @media (max-width: 375px) {
        .site-header { padding: 0 16px !important; height: 40px !important; }
        .hero-dark { padding: 28px 16px 20px !important; }
        .hero-dark h1 { font-size: 28px !important; margin-bottom: 10px !important; }
        .hero-dark .hero-subtags { font-size: 10px !important; margin-bottom: 12px !important; }
        .hero-info { padding: 20px 16px !important; }
        .hero-info h2 { font-size: 24px !important; }
        .hero-info > p { font-size: 13px !important; margin-bottom: 20px !important; }
        .hero-info .pill-item { padding: 6px 12px !important; font-size: 11px !important; }
        .hero-info > a { font-size: 13px !important; }
      }

      /* ─── Foldable unfolded: OPPO Find N5 / Samsung Fold ─── */
      @media (min-width: 600px) and (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr 1fr; min-height: auto; }
        .hero-dark { min-height: auto; padding: 48px 24px 28px !important; justify-content: center !important; }
        .hero-dark h1 { font-size: clamp(24px, 4.5vw, 36px) !important; margin-bottom: 12px !important; }
        .hero-dark .hero-subtags { font-size: 10px !important; margin-bottom: 20px !important; }
        .hero-info { padding: 32px 20px !important; }
        .hero-info h2 { font-size: 26px !important; margin-bottom: 4px !important; }
        .hero-info > p { font-size: 13px !important; margin-bottom: 24px !important; }
        .hero-info > div { margin-bottom: 16px !important; }
        .hero-info .pill-item { padding: 7px 14px !important; font-size: 11px !important; }
        .hero-info > a { font-size: 14px !important; margin-top: 12px !important; }
        .works-grid { grid-template-columns: repeat(2, 1fr); }
        .services-grid { grid-template-columns: repeat(2, 1fr); }
        .hero-video { object-position: center 35% !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

export default GlobalStyles;

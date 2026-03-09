import { useRef, useState, useEffect } from 'react';

const ScrollReveal = ({ children, delay = '0s', style = {}, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: 0,
        animation: visible ? `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay} both` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

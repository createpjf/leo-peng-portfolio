import useInView from '../hooks/useInView';

const ScrollReveal = ({ children, delay = '0s', style = {}, className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: 0,
        animation: inView ? `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay} both` : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

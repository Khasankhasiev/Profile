import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedCursor.module.scss';

const AnimatedCursor: React.FC = () => {
  const dotRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef<HTMLDivElement>(null);
  const dotElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      dotRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotElRef.current) {
        dotElRef.current.style.left = `${e.clientX - 4}px`;
        dotElRef.current.style.top = `${e.clientY - 4}px`;
      }

      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a, button, [role="button"]'));
    };

    const animate = () => {
      posRef.current.x += (dotRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (dotRef.current.y - posRef.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${posRef.current.x - 20}px`;
        ringRef.current.style.top = `${posRef.current.y - 20}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line

  if (!visible) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`${styles.ring} ${hovering ? styles.hovered : ''}`}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99998 }}
      />
      <div
        ref={dotElRef}
        className={styles.dot}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 99999 }}
      />
    </>
  );
};

export default AnimatedCursor;

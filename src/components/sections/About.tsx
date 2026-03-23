import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { candidate, stats } from '../../data/portfolioData';
import styles from './About.module.scss';

const Counter: React.FC<{ value: number; suffix: string; delay: number; run: boolean }> = ({
  value, suffix, delay, run,
}) => {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!run || startedRef.current) return;
    startedRef.current = true;
    const timeout = setTimeout(() => {
      const duration = 1800;
      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [run, value, delay]);

  return <>{display}{suffix}</>;
};

const About: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="container">
        <SectionTitle
          label="// about me"
          title="Обо мне"
          subtitle="Немного о себе, опыте и интересах"
        />

        <div className={styles.grid}>
          <div className={styles.avatarSide}>
            <div className={styles.avatarCard}>
              <div className={styles.avatarGlow} />
              <div className={styles.avatar}>
                <span className={styles.avatarInitials}>ХХ</span>
                <div className={styles.avatarRing} />
              </div>
              <div className={styles.avatarInfo}>
                <h3 className={styles.avatarName}>{candidate.name}</h3>
                <p className={styles.avatarRole}>{candidate.role}</p>
                <div className={styles.avatarMeta}>
                  <p>{candidate.location}</p>
                  <p>{candidate.experience}</p>
                  <p>Готов к переезду</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.textSide}>
            <p className={styles.text}>{candidate.about}</p>

            <div className={styles.hobbies}>
              <p className={styles.hobbiesLabel}>Интересы:</p>
              <div className={styles.hobbiesList}>
                {candidate.hobbies.map((h) => (
                  <span key={h.label} className={styles.hobbyTag}>
                    {h.emoji} {h.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={ref} className={styles.stats}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statValue}>
                <Counter value={stat.value} suffix={stat.suffix} delay={i * 0.15} run={inView} />
              </span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

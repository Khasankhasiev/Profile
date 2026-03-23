import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { languages, education } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import styles from './Languages.module.scss';

const ArcProgress: React.FC<{ percent: number; color: string; inView: boolean; delay: number }> = ({
  percent, color, inView, delay
}) => {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - (circ * percent) / 100;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--color-bg-secondary)" strokeWidth="8" />
      <motion.circle
        cx="50" cy="50" r={r}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circ }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', filter: `drop-shadow(0 0 6px ${color}80)` }}
      />
    </svg>
  );
};

const Languages: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Languages */}
          <div>
            <SectionTitle label="// languages" title="Языки" />
            <div ref={ref} className={styles.langList}>
              {languages.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  className={styles.langCard}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                >
                  <ArcProgress percent={lang.percent} color={lang.color} inView={inView} delay={i * 0.2} />
                  <div className={styles.langInfo}>
                    <h3 className={styles.langName}>{lang.name}</h3>
                    <span className={styles.langLevel}>{lang.level}</span>
                    <div className={styles.langBar}>
                      <motion.div
                        className={styles.langBarFill}
                        style={{ background: lang.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percent}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: i * 0.2 + 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionTitle label="// education" title="Образование" />
            <motion.div
              className={styles.eduCard}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.eduYear}>{education.year}</div>
              <div className={styles.eduBadge}>{education.degree}</div>
              <h3 className={styles.eduUniversity}>{education.university}</h3>
              <p className={styles.eduFullName}>{education.fullName}</p>
              <div className={styles.eduDivider} />
              <p className={styles.eduFaculty}>{education.faculty}</p>
              <p className={styles.eduSpecialty}>{education.specialty}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

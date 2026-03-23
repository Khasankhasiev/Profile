import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiClock } from 'react-icons/fi';
import { experience } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import styles from './Experience.module.scss';

const ExperienceCard: React.FC<{ job: typeof experience[0]; index: number }> = ({ job, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`${styles.item} ${isLeft ? styles.left : styles.right}`}>
      <div className={styles.connector}>
        <motion.div
          className={styles.dot}
          style={{ borderColor: job.color, boxShadow: `0 0 16px ${job.color}60` }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, type: 'spring', stiffness: 300 }}
        />
      </div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
        whileHover={{ y: -4 }}
      >
        <div className={styles.cardTop}>
          <div className={styles.cardMeta}>
            <span className={styles.period}>
              <FiCalendar size={12} /> {job.period}
            </span>
            <span className={styles.duration} style={{ background: `${job.color}20`, color: job.color }}>
              <FiClock size={11} /> {job.duration}
            </span>
          </div>
          {job.current && (
            <span className={styles.current}>Текущее</span>
          )}
        </div>

        <div className={styles.cardHeader}>
          <h3 className={styles.role}>{job.role}</h3>
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.company}
            style={{ color: job.color }}
          >
            {job.company} <FiExternalLink size={13} />
          </a>
        </div>

        <p className={styles.description}>{job.description}</p>

        <ul className={styles.achievements}>
          {job.achievements.map((item, i) => (
            <motion.li
              key={i}
              className={styles.achievement}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <span className={styles.bullet} style={{ background: job.color }} />
              {item}
            </motion.li>
          ))}
        </ul>

        <div className={styles.stack}>
          {job.stack.map((tech, i) => (
            <motion.span
              key={tech}
              className={styles.techTag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.04 }}
              whileHover={{ scale: 1.08 }}
              style={{ borderColor: `${job.color}40` }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC = () => (
  <section id="experience" className={`${styles.experience} section`}>
    <div className="container">
      <SectionTitle
        label="// experience"
        title="Опыт работы"
        subtitle="3 года 3 месяца в продуктовой и сервисной разработке"
        centered
      />

      <div className={styles.timeline}>
        <motion.div
          className={styles.line}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {experience.map((job, i) => (
          <ExperienceCard key={job.id} job={job} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

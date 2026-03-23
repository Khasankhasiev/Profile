import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ label, title, subtitle, centered }) => (
  <motion.div
    className={`${styles.wrapper} ${centered ? styles.centered : ''}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6 }}
  >
    <span className={styles.label}>{label}</span>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    <div className={styles.line} />
  </motion.div>
);

export default SectionTitle;

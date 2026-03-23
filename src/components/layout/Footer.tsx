import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { SiReact } from 'react-icons/si';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.name}>Хасиев Хасан Илясович</span>
          <span className={styles.role}>Frontend Developer</span>
        </div>

        <div className={styles.center}>
          <span className={styles.copy}>
            © {year} · Сделан на{' '}
            <span className={styles.react}>
              <SiReact size={14} /> React
            </span>
          </span>
        </div>

        <motion.button
          className={styles.top}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;

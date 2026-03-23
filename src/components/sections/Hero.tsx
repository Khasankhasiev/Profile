import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FiChevronDown, FiDownload, FiMail } from 'react-icons/fi';
import { FaTelegram } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { candidate } from '../../data/portfolioData';
import { scrollToSection } from '../../utils/scrollTo';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const handleDownload = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#6C63FF', '#00D9FF', '#4ADE80', '#FBBF24'],
    });
    const a = document.createElement('a');
    a.href = '/resume.pdf';
    a.download = 'Хасиев_Хасан_резюме.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const nameLetters = candidate.name.split('');

  return (
    <section className={styles.hero}>
      {particlesReady && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              color: { value: ['#6C63FF', '#00D9FF', '#4ADE80'] },
              links: { enable: true, color: '#6C63FF', distance: 130, opacity: 0.15, width: 1 },
              move: { enable: true, speed: 0.8, direction: 'none', random: true, outModes: { default: 'bounce' } },
              number: { value: 60, density: { enable: true } },
              opacity: { value: { min: 0.1, max: 0.4 } },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className={styles.particles}
        />
      )}

      <div className={styles.content}>
        <motion.span
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Привет, меня зовут
        </motion.span>

        <h1 className={styles.name}>
          {nameLetters.map((char, i) => (
            <motion.span
              key={i}
              className={char === ' ' ? styles.space : styles.letter}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.5, ease: 'easeOut' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className={styles.roles}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <span className={styles.rolePrefix}>—</span>
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'Vue.js Specialist', 1800,
              'TypeScript Engineer', 1800,
              'Team Lead aspirant', 1800,
              'UI/UX Enthusiast', 1800,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            className={styles.roleText}
          />
        </motion.div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          {candidate.experience} опыта в продуктовых командах.
          Vue 2/3 · TypeScript · React · WebSocket
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.button
            className={styles.btnPrimary}
            onClick={handleDownload}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={16} /> Скачать резюме
          </motion.button>
          <motion.button
            className={styles.btnOutline}
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Связаться со мной
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          <motion.a
            href={candidate.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            whileHover={{ scale: 1.15, color: 'var(--color-accent)' }}
          >
            <FaTelegram size={22} />
            <span>{candidate.telegramHandle}</span>
          </motion.a>
          <span className={styles.divider} />
          <motion.a
            href={`mailto:${candidate.email}`}
            className={styles.social}
            whileHover={{ scale: 1.15, color: 'var(--color-primary)' }}
          >
            <FiMail size={20} />
            <span>{candidate.email}</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.button
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <FiChevronDown className={styles.chevron} />
      </motion.button>

      <div className={styles.bg} />
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import {
  SiVuedotjs, SiTypescript, SiReact, SiJavascript, SiCss,
  SiVite, SiGit, SiSass, SiAxios, SiWebpack
} from 'react-icons/si';
import styles from './TechRadar.module.scss';

const iconComponents: Record<string, React.ReactNode> = {
  SiVuedotjs: <SiVuedotjs />, SiTypescript: <SiTypescript />,
  SiReact: <SiReact />, SiJavascript: <SiJavascript />, SiCss3: <SiCss />,
  SiVite: <SiVite />, SiGit: <SiGit />, SiSass: <SiSass />,
  SiAxios: <SiAxios />, SiWebpack: <SiWebpack />, SiPinia: <SiVuedotjs />,
};

const orbit1 = [
  { name: 'Vue.js', icon: 'SiVuedotjs', color: '#4FC08D' },
  { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
  { name: 'React', icon: 'SiReact', color: '#61DAFB' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
  { name: 'CSS3', icon: 'SiCss3', color: '#1572B6' },
];

const orbit2 = [
  { name: 'Vite', icon: 'SiVite', color: '#646CFF' },
  { name: 'Git', icon: 'SiGit', color: '#F05032' },
  { name: 'SCSS', icon: 'SiSass', color: '#CC6699' },
  { name: 'Axios', icon: 'SiAxios', color: '#5A29E4' },
  { name: 'Webpack', icon: 'SiWebpack', color: '#8DD6F9' },
];

const OrbitItem: React.FC<{
  item: { name: string; icon: string; color: string };
  index: number;
  total: number;
  radius: number;
  speed: number;
  reverse?: boolean;
}> = ({ item, index, total, radius, speed, reverse }) => {
  const angle = (index / total) * 360;
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className={styles.orbitItem}
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
        color: item.color,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      whileHover={{ scale: 1.3 }}
      title={item.name}
    >
      <motion.div
        animate={{ rotate: reverse ? 360 : -360 }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
        className={styles.orbitIcon}
      >
        {iconComponents[item.icon]}
      </motion.div>
      <span className={styles.orbitLabel}>{item.name}</span>
    </motion.div>
  );
};

const TechRadar: React.FC = () => (
  <section className={`${styles.radar} section`}>
    <div className="container">
      <motion.div
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.label}>// tech stack</span>
        <h2 className={styles.heading}>Технологии в действии</h2>
      </motion.div>

      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Ring 2 (outer) */}
        <motion.div
          className={`${styles.ring} ${styles.ring2}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />

        {/* Ring 1 (inner) */}
        <motion.div
          className={`${styles.ring} ${styles.ring1}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        {/* Orbit 2 items */}
        {orbit2.map((item, i) => (
          <OrbitItem key={item.name} item={item} index={i} total={orbit2.length} radius={175} speed={35} reverse />
        ))}

        {/* Orbit 1 items */}
        {orbit1.map((item, i) => (
          <OrbitItem key={item.name} item={item} index={i} total={orbit1.length} radius={105} speed={25} />
        ))}

        {/* Center */}
        <div className={styles.center}>
          <motion.div
            className={styles.centerInner}
            animate={{ boxShadow: ['0 0 20px rgba(108,99,255,0.3)', '0 0 50px rgba(108,99,255,0.6)', '0 0 20px rgba(108,99,255,0.3)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className={styles.centerText}>Хасан</span>
            <span className={styles.centerSub}>Frontend Dev</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TechRadar;

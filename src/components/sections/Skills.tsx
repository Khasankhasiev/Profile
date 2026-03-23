import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiVuedotjs,
  SiReact, SiNextdotjs, SiPinia, SiRedux, SiVite, SiWebpack,
  SiGit, SiAxios, SiSocketdotio, SiSass, SiJquery
} from 'react-icons/si';
import { skills } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import styles from './Skills.module.scss';

const iconMap: Record<string, React.ReactNode> = {
  SiJavascript: <SiJavascript />, SiTypescript: <SiTypescript />,
  SiHtml5: <SiHtml5 />, SiCss3: <SiCss />, SiVuedotjs: <SiVuedotjs />,
  SiReact: <SiReact />, SiNuxtdotjs: <SiNextdotjs />, SiPinia: <SiPinia />,
  SiRedux: <SiRedux />, SiVite: <SiVite />, SiWebpack: <SiWebpack />,
  SiGit: <SiGit />, SiAxios: <SiAxios />, SiSocketdotio: <SiSocketdotio />,
  SiSass: <SiSass />, SiJquery: <SiJquery />, SiOpenapi: <SiGit />,
};

const tabs = [
  { id: 'core', label: 'Core' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'tools', label: 'Tools' },
  { id: 'other', label: 'Other' },
];

const allTechs = [
  'Vue.js', 'TypeScript', 'React', 'JavaScript', 'CSS3', 'Vite', 'Git',
  'Pinia', 'Vuex', 'Axios', 'SCSS', 'WebSocket', 'REST API', 'Webpack',
  'NuxtJS', 'Redux', 'BEM', 'TinyMCE', 'TipTap', 'Vue I18n', 'GitLab',
  'HTML5', 'Vuelidate', 'jQuery', 'Twig', 'XSLT', 'JSON API',
];

const SkillBar: React.FC<{ name: string; level: number; icon: string; color: string; index: number }> = ({
  name, level, icon, color, index
}) => (
  <motion.div
    className={styles.skillItem}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.5 }}
    whileHover={{ y: -2 }}
  >
    <div className={styles.skillHeader}>
      <span className={styles.skillIcon} style={{ color }}>
        {iconMap[icon] || <span style={{ color }}>{name[0]}</span>}
      </span>
      <span className={styles.skillName}>{name}</span>
      <span className={styles.skillLevel}>{level}%</span>
    </div>
    <div className={styles.barTrack}>
      <motion.div
        className={styles.barFill}
        style={{ background: `linear-gradient(90deg, ${color}cc, ${color})` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.07 + 0.2, duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
);

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('core');
  const current = skills[activeTab as keyof typeof skills];

  return (
    <section id="skills" className={`${styles.skills} section`}>
      <div className="container">
        <SectionTitle
          label="// skills"
          title="Навыки"
          subtitle="Технологии и инструменты, с которыми работаю"
        />

        {/* Tech marquee */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marquee}>
            {[...allTechs, ...allTechs].map((tech, i) => (
              <span key={i} className={styles.marqueeItem}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div className={styles.tabIndicator} layoutId="tabIndicator" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Skill grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {current.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                color={skill.color}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

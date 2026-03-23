import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { codeSnippets } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';
import { copyToClipboard } from '../../utils/copyToClipboard';
import SectionTitle from '../ui/SectionTitle';
import toast from 'react-hot-toast';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from './CodeShowcase.module.scss';

const CodeShowcase: React.FC = () => {
  const { theme } = useTheme();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (code: string, index: number) => {
    const ok = await copyToClipboard(code);
    if (ok) {
      setCopiedIndex(index);
      toast.success('Скопировано!', { icon: '📋', duration: 2000 });
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section id="showcase" className={`${styles.showcase} section`}>
      <div className="container">
        <SectionTitle
          label="// code"
          title="Примеры кода"
          subtitle="Реальные паттерны из моих проектов"
          centered
        />
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
          pagination={{ clickable: true }}
          navigation
          className={styles.swiper}
        >
          {codeSnippets.map((snippet, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.dots}>
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{snippet.title}</h3>
                    <span className={styles.cardLang}>{snippet.language}</span>
                  </div>
                  <motion.button
                    className={styles.copyBtn}
                    onClick={() => handleCopy(snippet.code, i)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Копировать"
                  >
                    {copiedIndex === i ? <FiCheck size={15} color="#4ADE80" /> : <FiCopy size={15} />}
                  </motion.button>
                </div>

                <p className={styles.cardDescription}>{snippet.description}</p>

                <div className={styles.code}>
                  <SyntaxHighlighter
                    language={snippet.language}
                    style={theme === 'dark' ? atomOneDark : atomOneLight}
                    customStyle={{
                      background: 'transparent',
                      padding: '16px',
                      margin: 0,
                      fontSize: '0.8rem',
                      lineHeight: '1.6',
                    }}
                    showLineNumbers
                    lineNumberStyle={{ color: 'var(--color-text-muted)', fontSize: '0.7rem' }}
                  >
                    {snippet.code}
                  </SyntaxHighlighter>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CodeShowcase;

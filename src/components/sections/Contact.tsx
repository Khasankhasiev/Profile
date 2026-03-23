import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCopy,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import toast from "react-hot-toast";
import { candidate } from "../../data/portfolioData";
import { copyToClipboard } from "../../utils/copyToClipboard";
import SectionTitle from "../ui/SectionTitle";
import styles from "./Contact.module.scss";

const contactItems = [
  {
    icon: <FiPhone size={20} />,
    label: "Телефон",
    value: candidate.phone,
    copy: candidate.phone,
    color: "#4ADE80",
  },
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: candidate.email,
    copy: candidate.email,
    href: `mailto:${candidate.email}`,
    color: "#6C63FF",
  },
  {
    icon: <FaTelegram size={20} />,
    label: "Telegram",
    value: candidate.telegramHandle,
    copy: candidate.telegram,
    href: candidate.telegram,
    color: "#00D9FF",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Местоположение",
    value: `${candidate.location} · Готов к переезду`,
    color: "#FBBF24",
  },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(label);
      toast.success(`${label} скопирован!`, { icon: "✅", duration: 2000 });
      setTimeout(() => setCopied(null), 2000);
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <SectionTitle
          label="// contact"
          title="Связаться со мной"
          subtitle="Готов к новым проектам и предложениям"
          centered
        />

        <div className={styles.cardWrapper}>
          {/* Contact cards */}
          <div className={styles.cards}>
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                className={styles.card}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: item.color }}
                style={{ "--item-color": item.color } as React.CSSProperties}
              >
                <div
                  className={styles.cardIcon}
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{item.label}</span>
                  <span className={styles.cardValue}>{item.value}</span>
                </div>
                <div className={styles.cardActions}>
                  {item.copy && (
                    <motion.button
                      className={styles.actionBtn}
                      onClick={() => handleCopy(item.copy!, item.label)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Копировать"
                    >
                      {copied === item.label ? (
                        <FiCheck size={15} color="#4ADE80" />
                      ) : (
                        <FiCopy size={15} />
                      )}
                    </motion.button>
                  )}
                  {item.href && (
                    <motion.a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className={styles.actionBtn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Открыть"
                    >
                      <FiExternalLink size={15} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Telegram CTA */}
            <motion.a
              href={candidate.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramCta}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(0,217,255,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FaTelegram size={22} />
              Написать в Telegram
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";
import Image from "next/image";
import styles from "./category_card.module.css";
import { motion } from "framer-motion";

export default function CategoryCard(props) {
  const pseudoRandomDelay = ((props.index * 37) % 10) * 0.1;
  
  return (
    <motion.div 
      className={styles.category_card}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{
        delay: pseudoRandomDelay,
      }}
    >
      <Image className={styles.category_card__icon} src="/icons/trophy_icon.svg" alt="Trophy Icon" width={65} height={65} />
      <div className={styles.category_card__content}>
        <p className={styles.category_card__subtitle}>Verseny</p>
      </div>
    </motion.div>
  );
}

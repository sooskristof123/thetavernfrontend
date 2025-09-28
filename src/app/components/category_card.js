"use client";
import Image from "next/image";
import styles from "./category_card.module.css";
import { motion } from "framer-motion";

export default function CategoryCard(props) {
  return (
    <motion.div 
      className={styles.category_card}
      initial={{ opacity: 0, rotateY: 45 }}
      whileInView={{ opacity: 1,  rotateY: 0 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{
            duration: 0.7,
            delay: props.index * 0.1,
            type: "spring",
      }}
    >
      <Image className={styles.category_card__icon} src="/icons/trophy_icon.svg" alt="Trophy Icon" width={65} height={65} />
      <div className={styles.category_card__content}>
        <p className={styles.category_card__subtitle}>Verseny</p>
      </div>
    </motion.div>
  );
}

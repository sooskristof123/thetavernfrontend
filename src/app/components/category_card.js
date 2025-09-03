import Image from "next/image";
import styles from "./category_card.module.css";

export default function CategoryCard() {
  return (
    <div className={styles.category_card}>
      <Image className={styles.category_card__icon} src="/icons/trophy_icon.svg" alt="Trophy Icon" width={65} height={65} />
      <div className={styles.category_card__content}>
        <p className={styles.category_card__subtitle}>Verseny</p>
      </div>
    </div>
  );
}

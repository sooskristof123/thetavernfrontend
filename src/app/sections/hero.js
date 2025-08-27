import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_overlay__first}></div>
        <div className={styles.hero_overlay__second}></div>
    </div>
  );
}

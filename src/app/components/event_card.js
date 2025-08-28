import styles from "./event_card.module.css";

export default function EventCard() {
  return (
    <div className={styles.event_card}>
        <div className={styles.event_card__content}>
            <p className={styles.event_card__content__title}>WoW Online Bajnokság</p>
            <p className={styles.event_card__content__info}>2025 szeptember 12</p>
            <p className={styles.event_card__content__info}>Online</p>
        </div>
    </div>
  );
}

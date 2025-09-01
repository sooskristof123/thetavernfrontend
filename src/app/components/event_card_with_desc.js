import styles from "./event_card_with_desc.module.css";

export default function EventCardWithDesc() {
  return (
    <div className={styles.event_card_with_desc}>
      <div className={styles.event_card}>
      </div>
      <div className={styles.event_card__content}>
        <p className={styles.event_card__content__title}>Országos Gaming Expo</p>
        <p className={styles.event_card__content__info}>2025 május 10</p>
        <p className={styles.event_card__content__info}>HALL Debrecen</p>
      </div>
    </div>
  );
}

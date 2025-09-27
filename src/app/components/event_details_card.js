import styles from "./event_details_card.module.css";

export default function EventDetailsCard() {
  return (
    <div className={styles.event_details_card}>
        <p className={styles.event_details_card_title}>Időpont</p>
        <div className={styles.event_details_card_content}>
            <h4>2025. Június 1.</h4>
            <h4>8:00 - 18:00</h4>
        </div>
        <p className={styles.event_details_card_link}>További Időpontok</p>
    </div>
  );
}

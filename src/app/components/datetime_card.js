import Button from "./button";
import styles from "./datetime_card.module.css";

export default function DateTimeCard(props) {
  return (
    props.description ? 
    <div className={styles.datetime_card_desc}>
        <h5>2025.június 1.</h5>
        <h5>8:00 - 18:00</h5>
        <div className={styles.datetime_card_desc_content}>
            <p>{props.description}</p>
            <Button label="Regisztráció" />
        </div>
    </div>
        :     
    <div className={styles.datetime_card}>
        <h5>2025.június 1.</h5>
        <h5>8:00 - 18:00</h5>
        <p>{props.description}</p>
        <Button label="Regisztráció" />
    </div>
  );
}

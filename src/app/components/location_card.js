import styles from "./location_card.module.css";

export default function LocationCard(props) {
  return (
    props.location ?
    <div className={styles.location_card}>
        <iframe 
            src={props.location}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    :
    null
  );
}

import EventCardWithDesc from "../components/event_card_with_desc";
import styles from "./events_near.module.css";

export default function EventsNear() {
  return (
    <div className={styles.events_near}>
        <EventCardWithDesc />
        <EventCardWithDesc />
        <EventCardWithDesc />
        <EventCardWithDesc />
    </div>
  );
}


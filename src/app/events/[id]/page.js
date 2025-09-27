import Button from "@/app/components/button";
import styles from "./events.module.css";
import EventDetailsCard from "@/app/components/event_details_card";

export default function Events() {
  return (
    <div className={styles.page}>
      <div className={styles.page_event_banner}>
        <div className={styles.page_event_banner__overlay}></div>
        <div className={styles.page_event_banner__overlay2}></div>
      </div>

      <div className={styles.page_content}>
        <div className={styles.page_content__header}>
          <h2>Magyar Streamer Bajnokság</h2>
          <Button animated={true} variant="secondary" label="Jegyvásárlás"/>
        </div>
        <div className={styles.page_content__cards}>
          <EventDetailsCard />
          <EventDetailsCard />
          <EventDetailsCard />
        </div>
      </div>
    </div>
  );
}

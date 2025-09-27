import Button from "@/app/components/button";
import styles from "./events.module.css";
import EventDetailsCard from "@/app/components/event_details_card";
import Tag from "@/app/components/tag";
import Link from "next/link";

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
        
        <div className={styles.page_content__details}>
          <h4>Részletek</h4>
          <div className={styles.page_content__details__tags}>
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
          <div className={styles.page_content__details__text}>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>

          </div>
          <Link href="/"><p className={styles.page_content__details__link}>Olvass Tovább</p></Link>
        </div>
      </div>
    </div>
  );
}

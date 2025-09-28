import Button from "@/app/components/button";
import styles from "./events.module.css";
import EventDetailsCard from "@/app/components/event_details_card";
import Tag from "@/app/components/tag";
import Link from "next/link";
import Divider from "@/app/components/divider";
import EventsNear from "@/app/sections/events_near";
import DateTimeCard from "@/app/components/datetime_card";
import LocationCard from "@/app/components/location_card";

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
        <div className={styles.page_content__datetimes}>
          <h4>Időpontok</h4>
          <div className={styles.page_content__datetimes__cards}>
            <DateTimeCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <DateTimeCard />
            <DateTimeCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            <DateTimeCard />
          </div>
        </div>
        <div className={styles.page_content__location}>
          <h4>Helyszín</h4>
          <div className={styles.page_content__location__address}>
            <p>Debreceni Egyetem</p>
            <p>Debrecen Egyetem tér 1, 4032</p>
          </div>
          <LocationCard location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8435.365785041067!2d21.619547750910066!3d47.55504320720335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470df39a92233b%3A0x158b32cc387080a5!2sDebreceni%20Egyetem!5e0!3m2!1shu!2shu!4v1759054267093!5m2!1shu!2shu" />
        </div>
        <div className={styles.page_content__events_near}>
          <div className={styles.particles}>
            <span style={{ '--seed': 0.12, '--x': '10%' }}></span>
            <span style={{ '--seed': 0.73, '--x': '2%' }}></span>
            <span style={{ '--seed': 0.41, '--x': '14%' }}></span>
            <span style={{ '--seed': 0.09, '--x': '56%' }}></span>
            <span style={{ '--seed': 0.56, '--x': '63%' }}></span>
            <span style={{ '--seed': 0.27, '--x': '72%' }}></span>
            <span style={{ '--seed': 0.84, '--x': '22%' }}></span>
            <span style={{ '--seed': 0.33, '--x': '8%' }}></span>
            <span style={{ '--seed': 0.61, '--x': '82%' }}></span>
            <span style={{ '--seed': 0.18, '--x': '54%' }}></span>
            <span style={{ '--seed': 0.95, '--x': '76%' }}></span>
            <span style={{ '--seed': 0.44, '--x': '24%' }}></span>
            <span style={{ '--seed': 0.70, '--x': '35%' }}></span>
            <span style={{ '--seed': 0.05, '--x': '78%' }}></span>
            <span style={{ '--seed': 0.39, '--x': '66%' }}></span>
            <span style={{ '--seed': 0.81, '--x': '84%' }}></span>
            <span style={{ '--seed': 0.24, '--x': '25%' }}></span>
            <span style={{ '--seed': 0.66, '--x': '29%' }}></span>
            <span style={{ '--seed': 0.13, '--x': '72%' }}></span>
            <span style={{ '--seed': 0.52, '--x': '24%' }}></span>
            <span style={{ '--seed': 0.37, '--x': '15%' }}></span>
            <span style={{ '--seed': 0.88, '--x': '19%' }}></span>
            <span style={{ '--seed': 0.46, '--x': '62%' }}></span>
            <span style={{ '--seed': 0.30, '--x': '47%' }}></span>
            <span style={{ '--seed': 0.74, '--x': '81%' }}></span>
            <span style={{ '--seed': 0.19, '--x': '90%' }}></span>
            <span style={{ '--seed': 0.63, '--x': '5%' }}></span>
            <span style={{ '--seed': 0.07, '--x': '50%' }}></span>
            <span style={{ '--seed': 0.51, '--x': '43%' }}></span>
            <span style={{ '--seed': 0.96, '--x': '23%' }}></span>
          </div>
          <h4>További hasonló esemény</h4>
          <EventsNear />
        </div>
      </div>
      <Divider width="xlarge" />
    </div>
  );
}

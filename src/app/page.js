import styles from "./page.module.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Slider from "./components/slider";
import Button from "./components/button";
import Divider from "./components/divider";
import CategoryCard from "./components/category_card";
import GameCard from "./components/game_card";
import EventCard from "./components/event_card";
import EventsNear from "./sections/events_near";
import Partners from "./sections/partners";
import News from "./sections/new";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header />
        <Hero />
        <Slider />

        <div className={styles.hero_content}>
          <div className={styles.hero_content__title}>
            <h2>Welcome to</h2>
            <h1>TheTavern</h1>
            <Divider />
          </div>
          <p className={styles.hero_content__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className={styles.hero_content__button}>
            <Button variant="secondary" label="Tudj meg rólunk többet" />
          </div>
        </div>

        <div className={styles.home_categories}>
          <h3 className={styles.gradient_text}>Kiemelt kategóriák</h3>
          <Divider width="small" />
          <div className={styles.home_categories__cards}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>

        <div className={styles.home_events_recommendations}>
          <div className={styles.home_events_recommendations__content}>
            <div className={styles.home_events_recommendations__content__games}>
              <h3>Te hol játszol legközelebb?</h3>
              <p>Offline és online gamer események országszerte</p>
              <div className={styles.home_events_recommendations__content__game_cards}>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
              </div>
              <p className={styles.home_events_recommendations__content__button}>Összes gamer esemény itt</p>
            </div>

            <h4 className={styles.home_events_recommendations__content__event_title}>Események</h4>
            <div className={styles.home_events_recommendations__content__event_cards}>
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </div>
            <p className={styles.home_events_recommendations__content__button_mobile}>Összes gamer esemény itt</p>

          </div>
        </div>

        <div className={styles.events_near}>
          <div className={styles.events_near__header}>
            <h4>Események a közeledben</h4>
            <p>Több esemény a közelben</p>
          </div>
          <EventsNear />
        </div>

        <div className={styles.home_partners}>
          <h3 className={styles.home_partners__title}>Partnereink</h3>
          <Divider width="small" />
          <Partners />
        </div>

        <div className={styles.home_news}>
          <h3>Legújabb híreink</h3>
          <Divider width="small" />
          <News />
        </div>

        <Divider width="xlarge" />
        <Footer />
    </div>
  );
}

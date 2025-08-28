import styles from "./page.module.css";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Slider from "./components/slider";
import Button from "./components/button";
import Divider from "./components/divider";

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
        </div>
    </div>
  );
}

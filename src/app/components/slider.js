import Button from "./button";
import styles from "./slider.module.css";

export default function Slider() {
  return (
    <div className={styles.slider}>
        <div className={styles.slider_card}>
          <div className={styles.slider_card__content}>
            <p className={styles.slider_card__content__colored}>2025. június 1-3.</p>
            <p className={styles.slider_card__content__colored}>Ludovika Aréna, Budapest</p>
            <h3 className={styles.slider_card__content__title}>Magyar Streamer Bajnokság</h3>
            <p className={styles.slider_card__content__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
          </div>
          <div className={styles.slider_card__button__container}>
            <Button label="Részletek" variant="secondary"/>
          </div>
        </div>
    </div>
  );
}

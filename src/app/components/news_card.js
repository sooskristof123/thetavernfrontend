import styles from "./news_card.module.css";

export default function NewsCard() {
  return (
    <div className={styles.news_card}>
        <p className={styles.news_card__title}>Megnyílt a nyári LAN Party szezon</p>
        <p className={styles.news_card__desc}>Az ország több városában indulnak a LAN események – nézd meg, hol mérheted össze a tudásod a barátaiddal élőben!</p>
        <p className={styles.news_card__link}>Tovább a hírre</p>
    </div>
  );
}

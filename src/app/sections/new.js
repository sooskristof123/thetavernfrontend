import Image from "next/image";
import styles from "./news.module.css";
import NewsCard from "../components/news_card";
import Button from "../components/button";

export default function News() {
  return (
    <div className={styles.news}>
        <div className={styles.news_cards}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
        <Button animated={true} variant="secondary" label="További híreink"/>
    </div>
  );
}


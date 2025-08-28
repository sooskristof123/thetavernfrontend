import Button from "../components/button";
import Navigation from "../components/navigation";
import SearchBar from "../components/searchbar";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
        <p className={styles.header_logo}>TT</p>
        <SearchBar />
        <Navigation />
        <Button label="Bejelentkezés"/>
    </div>
  );
}

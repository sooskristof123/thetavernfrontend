import styles from "./searchbar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
        <input className={styles.searchbar_input} placeholder="Keress az események között" />
    </div>
  );
}

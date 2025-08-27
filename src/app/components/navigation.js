import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
        <Link href="/">Események</Link>
        <Link href="/">Rólunk</Link>
        <Link href="/">Hírek</Link>
    </div>
  );
}

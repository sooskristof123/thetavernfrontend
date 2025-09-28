import Link from "next/link";
import styles from "./navigation.module.css";
import Button from "./button";

export default function Navigation(props) {
  return (
    !props.isMobile ? 
      <div className={styles.navigation}>
          <Link href="/">Események</Link>
          <Link href="/">Rólunk</Link>
          <Link href="/">Hírek</Link>
      </div>
      :
      <div className={styles.navigation_mobile}>
          <Link href="/"><h4>Események</h4></Link>
          <Link href="/"><h4>Rólunk</h4></Link>
          <Link href="/"><h4>Hírek</h4></Link>
      </div>
  );
}

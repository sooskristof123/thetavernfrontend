import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_content}>
            <p className={styles.footer_content__org_logo}>TT</p>
            <p className={styles.footer_content__org_name}>TheTavern</p>
            <p className={styles.footer_content__org_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles.footer_content__social}>
                <div className={styles.footer_content__social__item}>

                </div>
                <div className={styles.footer_content__social__item}>
                    
                </div>
            </div>
        </div>

        <div className={styles.footer_nav}>
            <Link href="/">Események</Link>
            <Link href="/">Rólunk</Link>
            <Link href="/">Bejelentkezés</Link>
        </div>
      </div>
        
    </div>
  );
}


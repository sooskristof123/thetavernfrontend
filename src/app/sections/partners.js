import Image from "next/image";
import styles from "./partners.module.css";

export default function Partners() {
  return (
    <div className={styles.partners}>
        <Image className={styles.partners__bc} src="/images/barcraft.png" width={115} height={100} alt="Barcraft" />
        <Image className={styles.partners__sheldons} src="/images/sheldons.png" width={180} height={43} alt="Sheldons" />
        <Image className={styles.partners__oge} src="/images/oge_horizontbw.png" width={180} height={62} alt="OGE" />
        <Image className={styles.partners__bc} src="/images/barcraft.png" width={115} height={100} alt="Barcraft" />
        <Image className={styles.partners__sheldons} src="/images/sheldons.png" width={180} height={43} alt="Sheldons" />
        <Image className={styles.partners__oge} src="/images/oge_horizontbw.png" width={180} height={62} alt="OGE" />
        <Image className={styles.partners__bc} src="/images/barcraft.png" width={115} height={100} alt="Barcraft" />
    </div>
  );
}


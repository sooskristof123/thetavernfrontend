import Image from "next/image";
import styles from "./partners.module.css";

export default function Partners() {
  return (
    <div className={styles.partners}>
        <Image src="/images/barcraft.png" width={115} height={100} alt="Barcraft" />
        <Image src="/images/sheldons.png" width={180} height={43} alt="Sheldons" />
        <Image src="/images/oge_horizontbw.png" width={180} height={62} alt="OGE" />
        <Image src="/images/barcraft.png" width={115} height={100} alt="Barcraft" />
        <Image src="/images/sheldons.png" width={180} height={43} alt="Sheldons" />
        <Image src="/images/oge_horizontbw.png" width={180} height={62} alt="OGE" />
        <Image src="/images/barcraft.png" width={115} height={100} alt="Barcraft" />
    </div>
  );
}


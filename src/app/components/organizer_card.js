import Button from "./button";
import styles from "./organizer_card.module.css";

export default function OrganizerCard() {

  return (
    <div className={styles.organizer_card}>
      <div className={styles.organizer_card__header}>
        <div className={styles.organizer_card__header__profile__image}>

        </div>
        <div className={styles.organizer_card__header__profile__info}>
          <p className={styles.organizer_card__header__profile__info__name}>WeAreTheVR™. WE ARE MEDIA TECH Bt.</p>
          <div className={styles.organizer_card__header__profile__info__stats}>
            <div className={styles.organizer_card__header__profile__info__stats__item}>
                <p className={styles.organizer_card__header__profile__info__stats__item__number}>95</p>
                <p className={styles.organizer_card__header__profile__info__stats__item__label}>követő</p>
            </div>
            <div className={styles.organizer_card__header__profile__info__stats__item}>
                <p className={styles.organizer_card__header__profile__info__stats__item__number}>14</p>
                <p className={styles.organizer_card__header__profile__info__stats__item__label}>esemény</p>
            </div>
          </div>
        </div>
        <div className={styles.organizer_card__header__follow}>
          <Button label="Követés" variant="secondary" animated={true} />
          <Button label=" " variant="secondary" animated={true} />
        </div>
      </div>

      <div className={styles.organizer_card__header__profile__mobile__info__stats}>
        <div className={styles.organizer_card__header__profile__mobile__info__stats__item}>
          <p className={styles.organizer_card__header__profile__mobile__info__stats__item__number}>95</p>
          <p className={styles.organizer_card__header__profile__mobile__info__stats__item__label}>követő</p>
        </div>
        <div className={styles.organizer_card__header__profile__mobile__info__stats__item}>
          <p className={styles.organizer_card__header__profile__mobile__info__stats__item__number}>14</p>
          <p className={styles.organizer_card__header__profile__mobile__info__stats__item__label}>esemény</p>
        </div>
      </div>

      <div className={styles.organizer_card__bio}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in...</p>
      </div>

      <div className={styles.organizer_card__social}>
        <div className={styles.organizer_card__social__item}></div>
        <div className={styles.organizer_card__social__item}></div>
        <div className={styles.organizer_card__social__item}></div>
        <div className={styles.organizer_card__social__item}></div>
        <div className={styles.organizer_card__social__item}></div>
      </div>
    </div>
  );
}

import styles from "./text_with_hover.module.css";

export default function TextWithHover(props) {
  return (
    <p className={styles.textWithHover}>
        {props.label}
    </p>
  );
}
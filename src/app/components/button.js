import styles from "./button.module.css";

export default function Button(props) {
  const buttonClass = props.variant === "secondary" ? styles.button_secondary : styles.button;
  
  return (
    <button className={buttonClass}>
        <p>{props.label || "Label"}</p>
    </button>
  );
}

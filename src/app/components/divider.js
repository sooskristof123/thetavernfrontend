import styles from "./divider.module.css";

export default function Divider(props) {
  // Create width class name based on props
  const widthClass = props.width ? styles[`width_${props.width}`] : '';
  
  // Combine classes
  const className = widthClass ? `${styles.divider} ${widthClass}` : styles.divider;
  
  return (
    <div className={className}>
    </div>
  );
}

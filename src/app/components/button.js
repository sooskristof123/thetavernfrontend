"use client";
import styles from "./button.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Button(props) {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const buttonClass = props.variant === "secondary" ? styles.button_secondary : styles.button;

  useEffect(() => {
    if (!btnRef.current || !spanRef.current) return;
    
    const btn = btnRef.current;
    const span = spanRef.current;
    
    const handleMouseMove = (e) => {
      if (!span || !btn) return;
      const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      spanRef.current.style.setProperty("--x", `${x}%`);
      spanRef.current.style.setProperty("--y", `${y}%`);
    };

    const handleMouseLeave = () => {
      if (!span) return;
      spanRef.current.style.setProperty("--x", "50%");
      spanRef.current.style.setProperty("--y", "50%");
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);  return (
    props.animated ? 
      <motion.button 
        whileTap={{ scale: 0.985 }}
        className={buttonClass}
        ref={btnRef}
        onClick={props.onClick}
      >
        <span 
          ref={spanRef}
          className={styles.animatedSpot}
        ></span>
        <p>{props.label || "Label"}</p>
      </motion.button> 
      : 
      <button className={buttonClass} onClick={props.onClick}>
        <p>{props.label || "Label"}</p>
      </button>
  );
}

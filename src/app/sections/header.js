"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../components/button";
import Navigation from "../components/navigation";
import SearchBar from "../components/searchbar";
import styles from "./header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_mobile__nav}>
        <p className={styles.header_logo}>TT</p>
        { !isMobileMenuOpen ? 
          <Image onClick={handleMobileMenuClick} className={styles.header_mobile__nav__open} src="/icons/hamburger.svg" alt="Menu" width={24} height={24} /> 
          :
          <Image onClick={handleMobileMenuClick} className={styles.header_mobile__nav__close} src="/icons/close.svg" alt="Close" width={24} height={24} />
        }
      </div>
      <SearchBar />
      <Navigation />
      <Button label="Bejelentkezés"/>
      { isMobileMenuOpen ? 
        <div className={styles.header_mobile__nav__content}>
          <Navigation isMobile={true} />
          <div className={styles.header_mobile__nav__content__button}>
            <Button label="Bejelentkezés" />
          </div>
          <p>Kövess minket!</p>
        </div>
        :
        <></>
      }
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../components/button";
import Navigation from "../components/navigation";
import SearchBar from "../components/searchbar";
import styles from "./header.module.css";
import ProfileIcon from "../components/profile_icon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // mock login state
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
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
      <div className={styles.header_searchbar__wrapper}>
        <SearchBar />
      </div>
      <Navigation />
      { isLoggedIn ? 
        <ProfileIcon />
        : 
        isMobileMenuOpen ? 
          <div className={styles.header_mobile__nav__content}>
            <Navigation isMobile={true} />
            <div className={styles.header_mobile__nav__content__button}>
              <Button label="Bejelentkezés" onClick={handleLoginClick} />
            </div>
            <p>Kövess minket!</p>
          </div>
          :
          <Button label="Bejelentkezés" onClick={handleLoginClick} />
      }
    </div>
  );
}

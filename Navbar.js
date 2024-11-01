"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (language) => {
    console.log(`Selected language: ${language}`);
    // Implement your language change logic here (e.g., update state or context)
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Crypto Logo" width={50} height={50} />
       
      </div>
      <ul className={styles.navLinks}>
        <li>
          <div className={styles.languageSelector} onClick={toggleDropdown}>
            Language ▼
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <ul>
                <li onClick={() => handleLanguageChange('English')}>English</li>
                <li onClick={() => handleLanguageChange('Spanish')}>Spanish</li>
                <li onClick={() => handleLanguageChange('French')}>French</li>
                <li onClick={() => handleLanguageChange('German')}>German</li>
                <li onClick={() => handleLanguageChange('Chinese')}>Chinese</li>
                {/* Add more languages as needed */}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

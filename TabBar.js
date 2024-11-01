"use client";
import Link from 'next/link'; 
import React, { useState } from 'react';
import { FaHome, FaExchangeAlt, FaHistory, FaUser } from 'react-icons/fa';
import styles from './TabBar.module.css';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Trade', icon: <FaExchangeAlt />, path: '/trade' },
    { name: 'Record', icon: <FaHistory />, path: '/record' },
    { name: 'Mine', icon: <FaUser />, path: '/mine' },
  ];

  return (
    <div className={styles.tabbar}>
      <div role="tablist" className={styles.tabList}>
        {tabs.map((tab, index) => (
          <Link href={tab.path} key={index}>
            <div
              role="tab"
              className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
              tabIndex={0}
              aria-selected={activeTab === index}
              onClick={() => setActiveTab(index)}
              onKeyPress={(e) => e.key === 'Enter' && setActiveTab(index)}
            >
              <div className={styles.iconWrapper}>
                {tab.icon}
              </div>
              <div className={styles.tabText}>
                <span>{tab.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabBar;

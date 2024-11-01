'use client'
import React from 'react';
import styles from './MarketQuotation.module.css'; // Import CSS module

const MarketQuotation = () => {
  const data = [
    {
      name: 'BTC',
      price: '72320.77',
      change: '0.38%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png',
    },
    {
      name: 'ETH',
      price: '2655.84',
      change: '-1.00%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png',
    },
    {
      name: 'XRP',
      price: '0.52153',
      change: '-0.33%',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfhGSMedVnJMAycP-d61YpEWChquWDZd7zHYlt32rFwseoo2j-WDxKKr3fqgii2rmxz8&usqp=CAU',
    },
    {
      name: 'LTC',
      price: '71.59',
      change: '-0.94%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2.png',
    },
    {
      name: 'DOGE',
      price: '0.170875',
      change: '3.35%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/74.png',
    },
    {
      name: 'SOL',
      price: '174.6197',
      change: '0.39%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2010.png',
    },
    {
      name: 'DOT',
      price: '5.64',
      change: '2.24%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/9130.png',
    },
    {
      name: 'TRX',
      price: '0.16909',
      change: '0.30%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/1958.png',
    },
    {
      name: 'BCH',
      price: '372.82',
      change: '0.64%',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Bitcoin_Cash.png',
    },
    {
      name: 'ADA',
      price: '0.358149',
      change: '1.02%',
      imgSrc: 'https://s2.coinmarketcap.com/static/img/coins/200x200/2010.png',
    },
  ];

  return (
    <div className={styles.marketQuotation}>
      <div className={styles.title}>
        <span>Market Quotation</span>
      </div>
      <div className={styles.header}>
        <div className={styles.headerItem}>Name</div>
        <div className={styles.headerItem}>Latest Price</div>
        <div className={styles.headerItem}>24h Change</div>
      </div>
      <div className={styles.list}>
        {data.map((item, index) => {
          // Determine if the change is positive or negative for styling
          const changeValue = parseFloat(item.change);
          const priceValue = parseFloat(item.price.replace(/,/g, '')); // Remove commas for parsing
          
          return (
            <div key={index} className={styles.item}>
              <div className={styles.itemDetails}>
                <img src={item.imgSrc} alt={item.name} className={styles.itemImage} />
                <span className={styles.itemName}>{item.name}</span>
              </div>
              <div className={`${styles.itemPriceLatest} ${priceValue > 0 ? styles.green : styles.red}`}>
                ${parseFloat(item.price).toFixed(2)} {/* Corrected to always display price as a number */}
              </div>
              <div className={`${styles.itemChange} ${changeValue > 0 ? styles.green : styles.red}`}>
                {changeValue > 0 ? '+' : ''}{item.change} {/* Show change percentage */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketQuotation;

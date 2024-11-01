"use client";
import styles from './CryptoPrices.module.css';

const CryptoPrices = () => {
  const cryptocurrencies = [
    { symbol: 'BTC', price: '72397', change: '0.48%', color: 'red' },
    { symbol: 'XRP', price: '0.52152', change: '-0.33%', color: 'green' },
    { symbol: 'ETH', price: '2659.89', change: '-0.85%', color: 'green' },
    { symbol: 'TRX', price: '0.169112', change: '0.31%', color: 'red' },
  ];

  return (
    <div className={styles.homeTop}>
      <div className={styles.hotBitsWrapper}>
        <div className={styles.hotBitsMain}>
          {cryptocurrencies.map((crypto, index) => (
            <div className={styles.flexItem} key={index}>
              <div className={styles.itemName}>
                <span>{crypto.symbol}</span>
              </div>
              <div className={styles.itemValue}>
                <span className={styles[crypto.color]}>{crypto.price}</span>
              </div>
              <div className={`${styles.itemNum} ${styles[crypto.color]}`}>
                <span>{crypto.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoPrices;

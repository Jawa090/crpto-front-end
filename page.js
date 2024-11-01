"use client";
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import CryptoPrices from './components/CryptoPrices';
import QuickTransfer from './components/QuickTransfer';
import MarketQuotation from './components/MarketQuotation'; 
import TabBar from './components/TabBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Slider />
        <CryptoPrices />
        <QuickTransfer />
        <MarketQuotation />
      </main>
      <TabBar /> {/* Placing TabBar outside main if it is a fixed footer */}
    </>
  );
}

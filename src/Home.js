import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Prada PR53SS CATWALK Cat Eye Sunglasses For Women+FREE Complimentary Eyewear Care Kit"
            price={359.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/411Sng168JL._AC_UX679_.jpg"
          />
          <Product
            id="49538094"
            title="
            Click image to open expanded view
            Bomaker HD 1080P Projector, 200 ANSI Lumen, Native 800p WiFi Mini Projector Outdoor Ultra Portable, 300'' Display Supported Projector Compatible with iPhone,TV Stick,PS4,DVD,Android,Windows"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71MZ97kEBTL._AC_SX569_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="ASUS ZenBook Pro Duo UX581 15.6” 4K UHD NanoEdge Bezel Touch, Intel Core i7-9750H, 16GB RAM, 1TB PCIe SSD, GeForce RTX 2060, Innovative Screenpad Plus, Windows 10 Pro, Celestial Blue, UX581GV-XB74T"
            price={2550.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81deSneMCOL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Asus ZenBook Pro Duo UX581 15.6” 4K UHD NanoEdge Bezel Touch, Intel Core i9-9980HK, 32GB RAM, 1TB PCIe SSD, GeForce RTX 2060, Innovative Screenpad Plus, Windows 10 Pro - UX581GV-XB94T, Celestial Blue"
            price={2269.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91ytMW7sXXL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

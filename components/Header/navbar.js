"use client";

import "./style.scss";
import Image from "next/image";
import Link from "next/link";

import Search from "./images/search.png";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-black">TESTINGcars</span>
          <span className="logo-green">&</span>
          <span className="logo-black">bids</span>
        </div>

        <nav className="nav-menu">
          <Link href="/auctions">Auctions</Link>
          <Link href="/sell" className="sell-btn">Sell a Car</Link>
          <Link href="/community">Community</Link>
          <Link href="/what">What’s Cars & Bids?</Link>
          <Link href="/leaderboard">Leaderboard</Link>
        </nav>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <Image
            src={Search}
            alt="Search"
            width={20}
            height={20}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="Search for cars (ex. BMW, Audi, Ford)"
          />
        </div>

        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
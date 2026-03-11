"use client";

import "./style.scss";
import Image from "next/image";
import Search from "./images/search.png";

const MobileHeader = () => {
  return (
    <header className="main-header mobile-nav">
      <div className="header-left">
        <div className="logo">
          <span className="logo-black">cars</span>
          <span className="logo-green">&</span>
          <span className="logo-black">bids</span>
        </div>

        <nav className="ryt-bar">
          <button className="signup-btn-mob">Sign Up</button>

          <button className="icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button className="icon">
            <i className="fa-solid fa-user-group"></i>
          </button>

          <button className="icon">
            <i className="fa-solid fa-car-side"></i>
          </button>
        </nav>
      </div>

      <div className="header-right">
        <div className="auction-bar">
          <div className="auction-highlight">
            <div className="time-left">
              <span className="icon">
                <i className="fa-regular fa-clock"></i>
              </span>

              <span className="time">11:26:10</span>
            </div>

            <div className="high-bid">
              <span>Bid:</span> <span className="bid-amount">$9,800</span>
            </div>
          </div>

          <button className="place-bid btn">Bid</button>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
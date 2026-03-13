"use client";

import Image from "next/image";
import "./style.scss";

import Img1 from "./images/truck.png";
import Img2 from "./images/dollar.png";
import Avatar from "./images/avatar.png";

export default function AuctionMainInfo() {
  return (
    <div className="auction-main-wrapper">

      {/* TOP BANNERS */}
      <div className="banner-row">

        <div className="banner-item shipping">
          <Image src={Img1} alt="shipping" width={40} height={40} />

          <span>
            <h3>Cars & Bids Shipping</h3>
            <a href="#">Click to get a quick and easy quote!</a>
          </span>
        </div>

        <div className="banner-item financing">
          <Image src={Img2} alt="financing" width={40} height={40} />

          <span>
            <h3>Financing Options</h3>
            <p>
              <i>As low as <strong>$80 per month*</strong></i>
              <a href="#"> See Rates</a>
            </p>
          </span>
        </div>

      </div>

      {/* TITLE */}
      <h1 className="auction-title">2000 BMW 740i • No reserve</h1>

      {/* BID BOX */}
      <div className="bid-box">

        <div className="left">
          <p className="label">
            Current Bid
            <span className="user">
              <Image src={Avatar} alt="user" width={20} height={20} />
              afarmer
            </span>
          </p>

          <p className="price">$9,800</p>
        </div>

        <div className="right">
          <table>

            <tbody>

              <tr>
                <th>Seller</th>
                <td>
                  <span className="username">
                    <Image src={Avatar} alt="seller" width={20} height={20} />
                    BMW7
                  </span>

                  <a href="#" className="contact">
                    Contact
                  </a>
                </td>
              </tr>

              <tr>
                <th>Ending</th>
                <td>
                  <i className="fa-regular fa-calendar"></i> Sat, Nov 29 12:04 AM
                </td>
              </tr>

              <tr>
                <th>Bids</th>
                <td>
                  <i className="fa-solid fa-hashtag"></i> 15
                </td>
              </tr>

              <tr>
                <th>Views</th>
                <td>
                  <i className="fa-regular fa-eye"></i> 11,014
                </td>
              </tr>

              <tr>
                <th>Watching</th>
                <td>
                  <i className="fa-regular fa-star"></i> 708
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="grey-bar">

          <button className="place-bid-btn">
            Place Bid
          </button>

          <div className="small-links">
            <a href="#">
              <i className="fa-regular fa-circle-question"></i> How buying works
            </a>

            <a href="#">
              <i className="fa-regular fa-star"></i> Watch this auction
            </a>

            <a href="#">
              <i className="fa-regular fa-bell"></i> Notify me of 7 Series
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
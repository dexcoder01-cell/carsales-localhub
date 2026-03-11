"use client";

import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import AppStore from "./images/app_store.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="top-section">
        <div className="why">
          <h4>Why Cars & Bids?</h4>
          <ul>
            <li><strong>29K+</strong><span>Auctions completed</span></li>
            <li><strong>$645M+</strong><span>Value of cars sold</span></li>
            <li><strong>82%+</strong><span>Sell-through rate</span></li>
            <li><strong>900K+</strong><span>Registered members</span></li>
          </ul>
        </div>

        <div className="testimonial">
          <h4>Our customers love us!</h4>

          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <strong> Cole S</strong> Oct 2024
          </span>

          <p>
            The selling process was super easy for me, before during and after the
            sale. I definitely recommend using cars and bids!
          </p>
        </div>

        <div className="email-subscribe">
          <h4>Get the Daily Email</h4>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="container-footer">
        <div className="bottom-section">
          <div className="footer-logo">
            cars<span className="and">&</span>bids
          </div>

          <div className="footer-columns">
            <h5>How It Works</h5>
            <Link href="#">SafePay</Link>
            <Link href="#">Buying a Car</Link>
            <Link href="#">Selling a Car</Link>
            <Link href="#">Finalizing the Sale</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Financing</Link>
            <Link href="#">FAQs</Link>
          </div>

          <div className="footer-columns">
            <h5>Sellers</h5>
            <Link href="#">Submit Your Car</Link>
            <Link href="#">Dashboard</Link>
            <Link href="#">Certified Sellers</Link>
            <Link href="#">Photo Guide</Link>
            <Link href="#">Book a Photo Shoot</Link>
            <Link href="#">Inspections</Link>
          </div>

          <div className="footer-columns">
            <h5>Helpful Links</h5>
            <Link href="#">Browse</Link>
            <Link href="#">Community</Link>
            <Link href="#">Events</Link>
            <Link href="#">This Car Pod!</Link>
            <Link href="#">Shop C&B Merch</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Support</Link>
          </div>

          <div className="footer-social">
            <div className="social-icons">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>

            <p>© Copyright 2025 Cars and Bids LLC</p>

            <p>
              <Link href="#">Terms of Use</Link>{" "}
              <Link href="#">Privacy Policy</Link>
            </p>

            <p>
              <Link href="#">
                Do Not Sell or Share My Personal Information
              </Link>
            </p>

            <Image src={AppStore} alt="App Store" width={150} height={45} />
          </div>

          <div className="ls-fineprint">
            <p>
              LightStream disclosure: *Financing offers use LightStream's longest
              term available, with the lowest APR for a $22,750 used auto purchased
              from an individual...
            </p>

            <p>
              Payment example: Monthly payments for a $22,750 loan at 6.49% APR
              with a term of 3 years would result in 36 monthly payments of $698.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
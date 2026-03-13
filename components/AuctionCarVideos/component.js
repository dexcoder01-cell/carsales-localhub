"use client";

import Image from "next/image";
import "./style.scss";

const videos = [
  { id: 1, src: "/videos/car.mp4" },
  { id: 2, src: "/videos/car.mp4" },
  { id: 3, src: "/videos/car.mp4" },
  { id: 4, src: "/videos/car.mp4" },
  { id: 5, src: "/videos/car.mp4" },
  { id: 6, src: "/videos/car.mp4" },
];

export default function AuctionCarVideos() {
  return (
    <>
      <div className="videos-wrapper">
        <h2 className="section-title">Video</h2>
        <div className="videos-grid">
          {videos.map((vid) => (
            <div className="video-container" key={vid.id}>
              <video
                src={vid.src}
                controls
                preload="metadata"
                className="video-player"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="info-box">
        <p>
          All Cars & Bids auction listings are written based on information
          provided by the seller during the submission process, and have been
          reviewed by the seller for accuracy to the best of their abilities.
          However, it is ultimately the <strong>bidder's responsibility</strong>{" "}
          to perform all due diligence <strong>prior to placing a bid on any
          auction</strong>, including but not limited to factual content, flaws,
          legality of registering in any given state, emissions/safety
          compliance, and import eligibility. Please{" "}
          <a href="#">contact the seller</a> with any specific questions or
          requests.
        </p>
      </div>

      <div className="safepay-box">
        <div className="safepay-header">
          <svg
            role="img"
            className="safepay-logo spSVG"
            width="119"
            height="25"
            viewBox="0 0 119 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>

        <p className="safepay-text">
          This car is eligible for Cars &amp; Bids SafePay, powered by KeySavvy.
          SafePay is the easiest, safest, and most efficient way to complete
          your purchase – 100% online! <a href="#"> Learn more</a>
        </p>
      </div>
    </>
  );
}
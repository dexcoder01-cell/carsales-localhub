"use client";

import { useState } from "react";
import Image from "next/image";
import "./style.scss";

import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";
import Img5 from "./images/5.jpg";
import Img6 from "./images/5.jpg";
import Img7 from "./images/5.jpg";
import Img8 from "./images/5.jpg";
import Img9 from "./images/5.jpg";

import Star from "./images/star.png";
import Share from "./images/share.png";
import Right from "./images/right.png";
import carfax from "./images/carfax.svg";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    { src: Img1, category: "Exterior" },
    { src: Img2, category: "Exterior" },
    { src: Img3, category: "Interior" },
    { src: Img4, category: "Mechanical" },
    { src: Img5, category: "Docs" },
    { src: Img6, category: "Other" },
    { src: Img7, category: "Exterior" },
    { src: Img8, category: "Exterior" },
    { src: Img9, category: "Exterior" },
  ];

  const labels = {
    1: { name: "Exterior", count: 34 },
    5: { name: "Interior", count: 31 },
  };

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openAllPhotos = () => setShowAllPhotos(true);
  const closeAllPhotos = () => setShowAllPhotos(false);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="main-top">
      <div className="car-bio">
        <div className="details">
          <h2>2002 BMW M3 Convertible</h2>

          <div className="sub-details">
            <p className="tags">
              <span className="tag blue">NO RESERVE</span>
              <span className="tag grey">INSPECTED</span>
            </p>

            <p>
              S54 6-Cylinder, Imola Red Interior, Rod Bearings Replaced
            </p>
          </div>
        </div>

        <div className="btns">
          <button className="secondary-btn">
            <Image src={Star} alt="star" /> Watch
          </button>

          <button className="secondary-btn">
            <Image src={Share} alt="share" /> Share
          </button>
        </div>
      </div>

      <div className="gallery-wrapper">
        <div className="main-image" onClick={() => openLightbox(0)}>
          <Image src={images[0].src} alt="Main" />
        </div>

        <div className="thumbnail-grid">
          {images.slice(1, 8).map((img, i) => {
            const actualIndex = i + 1;
            const label = labels[actualIndex];

            return (
              <div
                key={i}
                className="thumb"
                onClick={() => openLightbox(actualIndex)}
              >
                <Image src={img.src} alt={`Thumbnail ${i}`} />

                {label && (
                  <div className="fixed-label">
                    {label.name} ({label.count})
                  </div>
                )}
              </div>
            );
          })}

          <div className="thumb" onClick={openAllPhotos}>
            <Image src={images[images.length - 1].src} alt="All Photos" />

            <div className="overlay">
              <span>All Photos ({images.length})</span>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumb">
        <ul>
          <li>
            <a href="#">Auctions</a>
          </li>

          <Image src={Right} alt="arrow" />

          <li>
            <a href="#">Automatic (6-Speed)</a>
          </li>

          <Image src={Right} alt="arrow" />

          <li>
            <a href="#">BMW</a>
          </li>

          <Image src={Right} alt="arrow" />

          <li>
            <a href="#">E46 M3</a>
          </li>

          <Image src={Right} alt="arrow" />

          <li>
            <a href="#">2002</a>
          </li>
        </ul>
      </div>

      <div className="carfax-header">
        <Image src={carfax} alt="Carfax" />
        <span className="ending">Ended November 7th at 12:21 AM</span>
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>

          <span className="prev" onClick={prevImage}>
            &#10094;
          </span>

          <Image
            src={images[currentIndex].src}
            alt="enlarged"
            className="lightbox-img"
          />

          <span className="next" onClick={nextImage}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
}
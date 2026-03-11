"use client";

import { useState } from "react";
import "./style.scss";
import Image from "next/image";

import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";

const Gallery = () => {
  const images = [Img1, Img2, Img3, Img4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [activeSort, setActiveSort] = useState("Ending soon");

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedYear, setSelectedYear] = useState("Years");
  const [selectedTrans, setSelectedTrans] = useState("Transmission");
  const [selectedBody, setSelectedBody] = useState("Body Style");

  const yearList = ["2024", "2023", "2022", "2020", "2015", "2010", "2000-1990"];
  const transmissionList = ["Automatic", "Manual", "Semi-Automatic"];
  const bodyStyleList = ["Coupe", "Sedan", "Convertible", "SUV", "Truck"];

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="home-slider">

      {/* ----------- SLIDER ----------- */}
      <div className="honda-layout-gallery">
        <div className="slider-box">
          <Image
            src={images[currentIndex]}
            alt="Car"
            className="main-slider-img"
            onClick={() => setIsOpen(true)}
          />

          <button className="nav prev" onClick={prev}>❮</button>
          <button className="nav next" onClick={next}>❯</button>

          <div className="counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        <div className="thumbs-box">
          {images.map((src, i) => (
            <div
              key={i}
              className={`thumb ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            >
              <Image src={src} alt="thumb" />
            </div>
          ))}
        </div>
      </div>

      {/* ----------- LIGHTBOX ----------- */}
      {isOpen && (
        <div className="lightbox" onClick={() => setIsOpen(false)}>
          <span className="close">×</span>

          <Image
            src={images[currentIndex]}
            alt="lightbox"
            className="lightbox-img"
          />

          <button className="nav prev" onClick={prev}>❮</button>
          <button className="nav next" onClick={next}>❯</button>
        </div>
      )}

      {/* ----------- FILTER BAR ----------- */}
      <div className="filters-section">
        <div className="left-filters">

          <h1>
            Auctions <i className="fa-solid fa-angle-down"></i>
          </h1>

          {/* YEARS */}
          <div className="dropdown-box" onClick={() => toggleDropdown("years")}>
            <div className="filter-item">
              {selectedYear} <i className="fa-solid fa-angle-down"></i>
            </div>

            {openDropdown === "years" && (
              <div className="dropdown-menu">
                {yearList.map((y) => (
                  <div
                    key={y}
                    className="dropdown-option"
                    onClick={() => {
                      setSelectedYear(y);
                      setOpenDropdown(null);
                    }}
                  >
                    {y}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* TRANSMISSION */}
          <div className="dropdown-box" onClick={() => toggleDropdown("trans")}>
            <div className="filter-item">
              {selectedTrans} <i className="fa-solid fa-angle-down"></i>
            </div>

            {openDropdown === "trans" && (
              <div className="dropdown-menu">
                {transmissionList.map((t) => (
                  <div
                    key={t}
                    className="dropdown-option"
                    onClick={() => {
                      setSelectedTrans(t);
                      setOpenDropdown(null);
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* BODY STYLE */}
          <div className="dropdown-box" onClick={() => toggleDropdown("body")}>
            <div className="filter-item">
              {selectedBody} <i className="fa-solid fa-angle-down"></i>
            </div>

            {openDropdown === "body" && (
              <div className="dropdown-menu">
                {bodyStyleList.map((b) => (
                  <div
                    key={b}
                    className="dropdown-option"
                    onClick={() => {
                      setSelectedBody(b);
                      setOpenDropdown(null);
                    }}
                  >
                    {b}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SORTING */}
        <div className="right-tabs">
          {[
            "Ending soon",
            "Newly listed",
            "No reserve",
            "Lowest mileage",
            "Closest to me",
          ].map((t) => (
            <span
              key={t}
              className={`tab ${activeSort === t ? "active" : ""}`}
              onClick={() => setActiveSort(t)}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
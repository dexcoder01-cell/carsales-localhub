"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./style.scss";

const Gallery = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSort, setActiveSort] = useState("Ending soon");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedYear, setSelectedYear] = useState("Years");
  const [selectedTrans, setSelectedTrans] = useState("Transmission");
  const [selectedBody, setSelectedBody] = useState("Body Style");
  const router = useRouter();

  const yearList = ["2024", "2023", "2022", "2020", "2015", "2010", "2000-1990"];
  const transmissionList = ["Automatic", "Manual", "Semi-Automatic"];
  const bodyStyleList = ["Coupe", "Sedan", "Convertible", "SUV", "Truck"];

  useEffect(() => {
    fetchLatestCar();
  }, []);

  const fetchLatestCar = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/singleCar");
      const allCars = response.data;
      const latestCar = allCars[allCars.length - 1];
      setCar(latestCar);
    } catch (error) {
      console.error("Error fetching latest car:", error);
    } finally {
      setLoading(false);
    }
  };

  const getCarImages = () => {
    if (!car) return [];
    
    let imagesArray = car.images;
    if (typeof imagesArray === 'string') {
      try {
        imagesArray = JSON.parse(imagesArray);
      } catch {
        imagesArray = [];
      }
    }
    
    if (!Array.isArray(imagesArray)) {
      imagesArray = [];
    }
    
    return imagesArray.map(img => `/uploads/${img}`);
  };

  const images = getCarImages();
  const mainImage = images[0] || null;
  const thumbnailImages = images.slice(1, 5);

  const handleImageClick = () => {
    if (car && car._id) {
      router.push(`/car/${car._id}`);
    }
  };

  const toggleDropdown = (name) =>
    setOpenDropdown(openDropdown === name ? null : name);

  const formatTimeLeft = () => {
    if (car?.timeLeft) return car.timeLeft;
    if (car?.auctionEndDate) {
      const end = new Date(car.auctionEndDate);
      const now = new Date();
      const diff = end - now;
      
      if (diff <= 0) return "Ended";
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (3600000)) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return "00:00:00";
  };

  if (loading) {
    return (
      <div className="home-slider">
        <div className="featured-gallery">
          <div className="loading-placeholder">Loading latest car...</div>
        </div>
      </div>
    );
  }

  if (!car || images.length === 0) {
    return (
      <div className="home-slider">
        <div className="featured-gallery">
          <div className="no-car-placeholder">No cars available</div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-slider desktop">

      {/* ----------- FEATURED GALLERY SECTION ----------- */}
      <div className="featured-gallery" onClick={handleImageClick} style={{ cursor: "pointer" }}>
        {/* Main Image with Details Overlay */}
        <div className="main-image-container">
          <img
            src={mainImage}
            alt={car.name || "Car"}
            className="main-featured-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
            }}
          />
          
          {/* Car Details Overlay - Top Right */}
          <div className="car-details-overlay">
            {car.featured && (
              <div className="featured-badge">FEATURED</div>
            )}
            <h2 className="car-title">{car.name || `${car.make} ${car.model}`}</h2>
            <p className="car-specs">
              {car.engine || ""} {car.engine && car.horsepower && "•"} {car.horsepower || ""}
            </p>
          </div>
        </div>

        {/* Thumbnail Grid - 4 Images */}
        {thumbnailImages.length > 0 && (
          <div className="thumbnail-grid">
            {thumbnailImages.map((img, index) => (
              <div key={index} className="thumbnail-item">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
                  }}
                />
              </div>
            ))}
            {/* If less than 4 images, add placeholder divs */}
            {Array.from({ length: 4 - thumbnailImages.length }).map((_, index) => (
              <div key={`placeholder-${index}`} className="thumbnail-item placeholder">
                <div className="placeholder-image">No Image</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ----------- FILTER BAR (UNTOUCHED) ----------- */}
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
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { use } from "react";
import Image from "next/image"; // Import Next.js Image component

import VehicleDetails from "../../../components/VehicleDetails/new_component";
import Header from "../../../components/Header/navbar";
import Footer from "../../../components/Footer/component";
import HeaderMobile from "../../../components/Header/mobileNavbar";
import AuctionCars from "../../../components/AuctionCars/component";

// Import images correctly for Next.js
import Star from "../images/star.png";
import Share from "../images/share.png";
import Right from "../images/right.png";
import carfax from "../images/carfax.svg";

import "./style.scss";

export default function CarDetail({ params }) {
  const { id } = use(params);

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCar = async () => {
      try {
        console.log("Fetching car with ID:", id);
        const res = await axios.get(`http://localhost:5000/api/singleCar/${id}`);
        console.log("Response:", res.data);

        const data = res.data;

        if (Array.isArray(data)) {
          setCar(data[0]);
        } else {
          setCar(data);
        }

      } catch (err) {
        console.error("Error fetching car details:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };
  const closeLightbox = () => setIsOpen(false);
  const nextImage = (e) => {
    e.stopPropagation();
    if (car?.images?.length) setCurrentIndex((prev) => (prev + 1) % car.images.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    if (car?.images?.length) setCurrentIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };
  const openAllPhotos = () => setShowAllPhotos(true);
  const closeAllPhotos = () => setShowAllPhotos(false);

  const getImageCountByCategory = (category) => {
    if (!car?.imageCategories) return 0;
    return car.imageCategories.filter(img => img.category === category).length;
  };

  const filteredImages =
    selectedCategory === "All"
      ? car?.images || []
      : car?.imageCategories?.filter(img => img.category === selectedCategory).map(img => img.filename) || [];

  const categories = ["All", "Exterior", "Interior", "Mechanical", "Docs", "Other"];
  const labels = {
    1: { name: "Exterior", count: getImageCountByCategory("Exterior") },
    5: { name: "Interior", count: getImageCountByCategory("Interior") },
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };
  const formatTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  if (loading) return <div>Loading car details...</div>;
  if (!car) return <div>Car not found</div>;

  return (
    <>
      <HeaderMobile />
      <Header />

      <div className="page-container single-template single-page">
        <div className="main-top">
          <div className="car-bio">
            <div className="details">
              <h2>{car.name}</h2>
              <div className="sub-details">
                <p className="tags">
                  <span className="tag blue">{car.reserveStatus || "NO RESERVE"}</span>
                  <span className="tag grey">{car.inspectionStatus || "INSPECTED"}</span>
                </p>
                {car.shortDescription ? (
                  <p className="short-description-top">{car.shortDescription}</p>
                ) : (
                  car.description && <p>{car.description.substring(0, 100)}...</p>
                )}
              </div>
            </div>
            <div className="btns">
              <button className="secondary-btn">
                {/* ✅ Use Star.src for the src attribute */}
                <img src={Star.src} alt="Star" /> Watch
              </button>
              <button className="secondary-btn">
                {/* ✅ Use Share.src for the src attribute */}
                <img src={Share.src} alt="Share" /> Share
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div className="gallery-wrapper">
            {car.images && car.images.length > 0 && (
              <div className="main-image" onClick={() => openLightbox(0)}>
                <img
                  src={`http://localhost:5000/uploads/${car.images[0]}`}
                  alt="Main"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found")}
                />
              </div>
            )}

            <div className="thumbnail-grid">
              {car.images?.slice(1, 8).map((image, i) => {
                const actualIndex = i + 1;
                const label = labels[actualIndex];
                return (
                  <div key={i} className="thumb thumb-img" onClick={() => openLightbox(actualIndex)}>
                    <img
                      src={`http://localhost:5000/uploads/${image}`}
                      alt={`Thumbnail ${i + 1}`}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/200x150?text=Image+Not+Found")}
                    />
                    {label && label.count > 0 && <div className="fixed-label">{label.name} ({label.count})</div>}
                  </div>
                );
              })}

              <div className="thumb" onClick={openAllPhotos}>
                <img
                  src={`http://localhost:5000/uploads/${car.images[car.images.length - 1]}`}
                  alt="All Photos"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/200x150?text=View+All")}
                />
                <div className="overlay">
                  <span>All Photos ({car.images?.length || 0})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <ul>
              <li><a href="/cars">Auctions</a></li>
              {/* ✅ Use Right.src for the src attribute */}
              <img src={Right.src} alt="Right" />
              <li><a href="#">{car.transmission || "Transmission"}</a></li>
              <img src={Right.src} alt="Right" />
              <li><a href="#">{car.make || "Make"}</a></li>
              <img src={Right.src} alt="Right" />
              <li><a href="#">{car.model || "Model"}</a></li>
              <img src={Right.src} alt="Right" />
              <li><a href="#">{car.year || "Year"}</a></li>
            </ul>
          </div>

          {/* Auction Details */}
          <div className="auction-bar">
            <div className="auction-highlight">
              <div className="time-left">Time Left: {car.timeLeft || "11:26:10"}</div>
              <div className="high-bid">High Bid: ${car.highBid || car.price || "9,800"}</div>
              <div className="bids">Bids: {car.bidCount || 14}</div>
              <div className="comments">Comments: {car.commentCount || 20}</div>
            </div>
            <button className="place-bid btn">Place Bid</button>
          </div>

          <div className="carfax-header">
            {/* ✅ Use carfax.src for the src attribute */}
            <img src={carfax.src} alt="Carfax" />
            <span className="ending">
              {car.auctionStatus === "Ended" ? "Ended" : "Ends"} {formatDate(car.auctionEndDate || car.createdAt)} at {formatTime(car.auctionEndDate || car.createdAt)}
            </span>
          </div>

          {/* Lightbox */}
          {isOpen && (
            <div className="lightbox" onClick={closeLightbox}>
              <span className="close">&times;</span>
              <span className="prev" onClick={prevImage}>&#10094;</span>
              <img
                src={`http://localhost:5000/uploads/${car.images[currentIndex]}`}
                alt="enlarged"
                className="lightbox-img"
                onError={(e) => (e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found")}
              />
              <span className="next" onClick={nextImage}>&#10095;</span>
            </div>
          )}

          {/* All Photos Modal */}
          {showAllPhotos && (
            <div className="all-photos-overlay">
              <div className="all-photos-header">
                <div className="tabs">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className={selectedCategory === cat ? "active" : ""}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat === "All" ? `All Photos (${car.images.length})` : `${cat} (${getImageCountByCategory(cat)})`}
                    </span>
                  ))}
                </div>
                <div className="controls">
                  <button onClick={closeAllPhotos}>×</button>
                </div>
              </div>

              <div className="all-photos-grid">
                {filteredImages.map((img, idx) => {
                  const imageSrc = typeof img === "object" ? img.filename : img;
                  return (
                    <div key={idx} className="photo-item" onClick={() => { openLightbox(car.images.indexOf(imageSrc)); closeAllPhotos(); }}>
                      <img
                        src={`http://localhost:5000/uploads/${imageSrc}`}
                        alt={`Photo ${idx}`}
                        onError={(e) => (e.target.src = "https://via.placeholder.com/250x200?text=Image+Not+Found")}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="auction-details">
          <VehicleDetails car={car} />
          <AuctionCars />
        </div>
      </div>

      <Footer />
    </>
  );
}
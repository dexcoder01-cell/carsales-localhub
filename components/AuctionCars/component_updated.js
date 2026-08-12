"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./style.scss";
import AuctionNewCars from "../AuctionNewCars/component";

export default function AuctionCars() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const res = await axios.get("/api/singleCar");
      setVehicles(res.data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (id) => {
    router.push(`/car/${id}`);
  };

  // Helper function to format mileage
  const formatMileage = (mileage) => {
    if (!mileage) return null;
    return `${mileage.toLocaleString()} miles`;
  };

  // Helper function to get specs string
  const getSpecsString = (car) => {
    const specs = [];
    if (car.mileage) specs.push(formatMileage(car.mileage));
    if (car.transmission) specs.push(car.transmission);
    if (car.engine) specs.push(car.engine);
    if (car.drivetrain) specs.push(car.drivetrain);
    return specs.join(" , ");
  };

  // Helper function to format time left
  const formatTimeLeft = (car) => {
    if (car.timeLeft) return car.timeLeft;
    
    // If you have auction end date, calculate time left
    if (car.auctionEndDate) {
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
    return <div className="vehicle-listings-wrapper">Loading...</div>;
  }

  return (
    <div className="vehicle-listings-wrapper">
      <h2 className="section-title">Auctions ending soon</h2>

      <div className="vehicle-grid">
        {vehicles.map((car) => (
          <div
            className="vehicle-card"
            key={car._id}
            onClick={() => handleCardClick(car._id)}
            style={{ cursor: "pointer" }}
          >
            <div className="main-vehicle-card">
              {/* Image - Using regular img tag */}
              <div className="vehicle-img">
                {car.images?.length > 0 ? (
                  <img
                    src={`/uploads/${car.images[0]}`}
                    alt={car.name || "Car image"}
                    className="car-image"
                    style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x250?text=No+Image";
                    }}
                  />
                ) : (
                  <div className="no-image-placeholder">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Time + Bid */}
              <div className="time-bid-row">
                <p className="time">
                  <i className="fa-regular fa-clock"></i> {formatTimeLeft(car)}
                </p>

                <p>
                  <span className="bid">Bid </span>
                  <span>
                    ₹{(car.highBid || car.price || 0).toLocaleString()}
                  </span>
                </p>
              </div>
            </div>

            {/* Title */}
            <h3 className="vehicle-title">
              {car.name || `${car.make || ""} ${car.model || ""}`.trim() || "Untitled Car"}
            </h3>

            {/* Tags */}
            <p className="tags">
              {car.reserveStatus === "NO RESERVE" && (
                <span className="tag blue">NO RESERVE</span>
              )}
              {car.inspectionStatus === "INSPECTED" && (
                <span className="tag grey">INSPECTED</span>
              )}
              {car.auctionStatus === "Active" && (
                <span className="tag green">ACTIVE</span>
              )}
            </p>

            {/* Specs */}
            <p className="vehicle-specs">
              {getSpecsString(car) || "No specs available"}
            </p>

            {/* Location */}
            {car.location && (
              <p className="location">
                <i className="fa-regular fa-location-dot"></i> {car.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
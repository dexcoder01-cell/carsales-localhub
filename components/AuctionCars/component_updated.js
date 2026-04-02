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
      const res = await axios.get("http://localhost:5000/api/singleCar");
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
          >
            <div className="main-vehicle-card">

              {/* Image */}
              <div className="vehicle-img">
                {car.images?.length > 0 && (
                  <img
                    src={`http://localhost:5000/uploads/${car.images[0]}`}
                    alt={car.name}
                    className="car-image"
                  />
                )}

                {car.featured && (
                  <span className="featured-badge">FEATURED</span>
                )}
              </div>

              {/* Time + Bid */}
              <div className="time-bid-row">
                <p className="time">
                  <i className="fa-regular fa-clock"></i>{" "}
                  {car.time || "00:00:00"}
                </p>

                <p>
                  <span className="bid">Bid </span>
                  <span>
                    ₹{car.price ? car.price.toLocaleString() : "0"}
                  </span>
                </p>
              </div>

            </div>

            {/* Title */}
            <h3 className="vehicle-title">
              {car.name || "Untitled Car"}
            </h3>

            {/* Tags */}
            <p className="tags">
              {car.noReserve && (
                <span className="tag blue">NO RESERVE</span>
              )}
              {car.inspected && (
                <span className="tag grey">INSPECTED</span>
              )}
            </p>

            {/* Specs */}
            <p className="vehicle-specs">
              {car.mileage && <>{car.mileage}, </>}
              {car.model || ""}
            </p>

            {/* Location */}
            {car.location && (
              <p className="location">{car.location}</p>
            )}
          </div>
        ))}
      </div>

      {/* KEEP THIS AS IT IS */}
      <AuctionNewCars />
    </div>
  );
}
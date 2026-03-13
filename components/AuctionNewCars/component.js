"use client";

import Image from "next/image";
import "../AuctionCars/style.scss";

// Assets
import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";
import Img5 from "./images/5.jpg";
import Img6 from "./images/6.jpeg";

const vehicles = [
  {
    id: 1,
    title: "2011 Porsche 911 Carrera GTS Coupe",
    location: "Alpharetta, GA 30009",
    mileage: "~32,800 Miles",
    details: "7-Speed PDK, 408-hp Flat-6, Aerokit",
    featured: true,
    img: Img1,
    features: ["Clean title", "Serviced recently", "Garage kept"],
  },
  {
    id: 2,
    title: "2021 BMW M2 Competition",
    location: "San Jose, CA 95125",
    details: "6-Speed Manual, 405-hp Turbo 6-Cylinder, Executive Package",
    featured: true,
    noReserve: true,
    inspected: true,
    img: Img2,
    features: ["Clean title", "Serviced recently", "Garage kept"],
  },
  {
    id: 3,
    title: "2007 Chevrolet Corvette Z06 Coupe",
    mileage: "1 Owner, 6-Speed Manual",
    details: "7.0-Liter V8 Power",
    featured: true,
    img: Img3,
    features: ["Clean title", "Serviced recently", "Garage kept"],
  },
  {
    id: 4,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    img: Img4,
    featured: true,
    features: ["Clean title", "Serviced recently", "Garage kept"],
  },
  {
    id: 5,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    img: Img5,
    featured: true,
    features: ["Clean title", "Serviced recently", "Garage kept"],
  },
  {
    id: 6,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    img: Img6,
    featured: true,
    features: ["Clean title", "Serviced recently", "Garage kept"],
  },
];

export default function AuctionCars() {
  return (
    <div className="vehicle-new-listings">
      <h2 className="section-title">New Listings</h2>

      <div className="vehicle-grid">
        {vehicles.map((car) => (
          <div className="vehicle-card" key={car.id}>
            <div className="main-vehicle-card">

              {/* Image */}
              <div className="vehicle-img">
                <Image
                  src={car.img}
                  alt={car.title}
                  width={400}
                  height={250}
                  className="car-image"
                />

                {car.featured && (
                  <span className="featured-badge">New</span>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="vehicle-title">{car.title}</h3>

            {/* Tags */}
            <p className="tags">
              {car.noReserve && <span className="tag blue">NO RESERVE</span>}
              {car.inspected && <span className="tag grey">INSPECTED</span>}
            </p>

            {/* Specs */}
            <p className="vehicle-specs">
              {car.mileage && <>{car.mileage}, </>}
              {car.details}
            </p>

            {/* Features */}
            {car.features && (
              <ul className="vehicle-features">
                {car.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {/* Location */}
            {car.location && (
              <p className="location">{car.location}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
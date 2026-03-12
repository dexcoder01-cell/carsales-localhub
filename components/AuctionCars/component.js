"use client";

import Image from "next/image";
import "./style.scss";
// import AuctionNewCars from "../AuctionNewCars/component";

// Assets
import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";
import Img5 from "./images/5.jpg";
import Img6 from "./images/6.jpeg";
import Img7 from "./images/7.jpeg";
import Img8 from "./images/8.jpeg";
import Img9 from "./images/9.jpeg";
import Img10 from "./images/10.jpeg";
import Img11 from "./images/11.jpeg";

const vehicles = [
  {
    id: 1,
    title: "2011 Porsche 911 Carrera GTS Coupe",
    location: "Alpharetta, GA 30009",
    mileage: "~32,800 Miles",
    details: "7-Speed PDK, 408-hp Flat-6, Aerokit",
    bid: "$88,500",
    time: "13:11:21",
    featured: true,
    img: Img1,
  },
  {
    id: 2,
    title: "2021 BMW M2 Competition",
    location: "San Jose, CA 95125",
    details: "6-Speed Manual, 405-hp Turbo 6-Cylinder, Executive Package",
    bid: "$40,000",
    time: "13:16:21",
    noReserve: true,
    inspected: true,
    img: Img2,
  },
  {
    id: 3,
    title: "2007 Chevrolet Corvette Z06 Coupe",
    mileage: "1 Owner, 6-Speed Manual",
    details: "7.0-Liter V8 Power",
    bid: "$29,350",
    time: "13:21:21",
    img: Img3,
  },
  {
    id: 4,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img4,
  },
  {
    id: 5,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img5,
  },
  {
    id: 6,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img6,
  },
  {
    id: 7,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img7,
  },
  {
    id: 8,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img8,
  },
  {
    id: 9,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img9,
  },
  {
    id: 10,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img10,
  },
  {
    id: 11,
    title: "2000 Toyota Land Cruiser ZX",
    mileage: "Japanese-Market SUV, Diesel 6-Cylinder, 4WD, U.S. Title",
    bid: "$14,900",
    time: "13:26:21",
    img: Img11,
  },
];

export default function AuctionCars() {
  return (
    <div className="vehicle-listings-wrapper">
      <h2 className="section-title">Auctions ending soon</h2>

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
                  <span className="featured-badge">FEATURED</span>
                )}
              </div>

              {/* Time + Bid */}
              <div className="time-bid-row">
                <p className="time">
                  <i className="fa-regular fa-clock"></i> {car.time}
                </p>

                <p>
                  <span className="bid">Bid </span>
                  <span>{car.bid}</span>
                </p>
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

            {/* Location */}
            {car.location && (
              <p className="location">{car.location}</p>
            )}
          </div>
        ))}
      </div>

      {/* <AuctionNewCars /> */}
    </div>
  );
}
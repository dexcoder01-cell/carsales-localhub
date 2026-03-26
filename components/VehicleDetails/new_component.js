"use client";

import React from "react";
import "./style.scss";
import Avatar from "./images/dougs.png";
import AuctionCarVideos from "../AuctionCarVideos/component";
import SellerQA from "../SellerQA/component";
import AuctionMainInfo from "../AuctionMainInfo/component";
import AuctionCommentsAndBids from "../AuctionCommentsAndBids/component";

const VehicleDetails = ({ car }) => {
  if (!car) {
    return <div className="vehicle-details-wrapper">Car not found</div>;
  }

  return (
    <div className="vehicle-details-wrapper">
      {/* SPECIFICATIONS TABLE - Desktop */}
      <table className="specs-table">
        <tbody>
          <tr>
            <td className="label">Make</td>
            <td>{car.make || "N/A"}</td>
            <td className="label">Engine</td>
            <td>{car.engine || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Model</td>
            <td>{car.model || "N/A"} <i className="fa-regular fa-bell"></i></td>
            <td className="label">Drivetrain</td>
            <td>{car.drivetrain || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Mileage</td>
            <td>{car.mileage ? car.mileage.toLocaleString() : "N/A"}</td>
            <td className="label">Transmission</td>
            <td>{car.transmission || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">VIN</td>
            <td>{car.vin || "N/A"}</td>
            <td className="label">Body Style</td>
            <td>{car.bodyStyle || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Title Status</td>
            <td>{car.titleStatus || "N/A"}</td>
            <td className="label">Exterior Color</td>
            <td>{car.exteriorColor || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Location</td>
            <td>{car.location || "N/A"}</td>
            <td className="label">Interior Color</td>
            <td>{car.interiorColor || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Seller</td>
            <td><i className="fa-regular fa-user"></i> {car.seller || "N/A"}</td>
            <td className="label">Seller Type</td>
            <td>{car.sellerType || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      {/* SPECIFICATIONS TABLE - Mobile */}
      <table className="specs-table mobile">
        <tbody>
          <tr>
            <td className="label">Make</td>
            <td>{car.make || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Model</td>
            <td>{car.model || "N/A"} <i className="fa-regular fa-bell"></i></td>
          </tr>

          <tr>
            <td className="label">Mileage</td>
            <td>{car.mileage ? car.mileage.toLocaleString() : "N/A"}</td>
          </tr>

          <tr>
            <td className="label">VIN</td>
            <td>{car.vin || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Engine</td>
            <td>{car.engine || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Drivetrain</td>
            <td>{car.drivetrain || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Transmission</td>
            <td>{car.transmission || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Body Style</td>
            <td>{car.bodyStyle || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Exterior Color</td>
            <td>{car.exteriorColor || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Interior Color</td>
            <td>{car.interiorColor || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Title Status</td>
            <td>{car.titleStatus || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Location</td>
            <td>{car.location || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Seller</td>
            <td><i className="fa-regular fa-user"></i> {car.seller || "N/A"}</td>
          </tr>

          <tr>
            <td className="label">Seller Type</td>
            <td>{car.sellerType || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      {/* DOUG'S TAKE */}
      <div className="doug">
        <img className="avatar" src={Avatar} alt="avatar" />
        <h3>Doug's Take</h3>
        <p>
          {car.dougsTake || 
            "The E46 M3 is a favorite among BMW enthusiasts thanks to its timeless styling, analog driving experience, and the wonderful power delivery from its S54 6-cylinder engine. This particular M3 Convertible features a gorgeous Imola Red leather interior, and it boasts some nice factory equipment – including a limited-slip differential, heated front seats, and a Harman Kardon sound system. It also benefits from a rod bearing replacement, and it comes with a Lemon Squad inspection for some extra peace of mind. Plus, this M3 is offered with the thrill of no reserve!"}
        </p>
      </div>

      {/* Other sections */}
      <AuctionCarVideos />
      <SellerQA />
      <AuctionMainInfo />
      <AuctionCommentsAndBids />
    </div>
  );
};

export default VehicleDetails;
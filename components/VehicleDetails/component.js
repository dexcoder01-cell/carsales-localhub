"use client";

import Image from "next/image";
import "./style.scss";
import Avatar from "./images/dougs.png";
import AuctionCarVideos from "../AuctionCarVideos/component";
import SellerQA from "../SellerQA/component";
import AuctionMainInfo from "../AuctionMainInfo/component";
import AuctionCommentsAndBids from "../AuctionCommentsAndBids/component";

export default function VehicleDetails() {
  return (
    <div className="vehicle-details-wrapper">
      {/* Desktop Table */}
      <table className="specs-table">
        <tbody>
          <tr>
            <td className="label">Make</td>
            <td>BMW</td>
            <td className="label">Engine</td>
            <td>3.2L I6</td>
          </tr>
          <tr>
            <td className="label">Model</td>
            <td>E46 M3 <i className="fa-regular fa-bell"></i></td>
            <td className="label">Drivetrain</td>
            <td>Rear-wheel drive</td>
          </tr>
          <tr>
            <td className="label">Mileage</td>
            <td>104,100</td>
            <td className="label">Transmission</td>
            <td>Automatic (6-Speed)</td>
          </tr>
          <tr>
            <td className="label">VIN</td>
            <td>WBSBR93452EX24038</td>
            <td className="label">Body Style</td>
            <td>Convertible</td>
          </tr>
          <tr>
            <td className="label">Title Status</td>
            <td>Clean (TX)</td>
            <td className="label">Exterior Color</td>
            <td>Steel Gray Metallic</td>
          </tr>
          <tr>
            <td className="label">Location</td>
            <td>Sugar Land, TX 77479</td>
            <td className="label">Interior Color</td>
            <td>Imola Red</td>
          </tr>
          <tr>
            <td className="label">Seller</td>
            <td><i className="fa-regular fa-user"></i> Racer77</td>
            <td className="label">Seller Type</td>
            <td>Private Party</td>
          </tr>
        </tbody>
      </table>

      {/* Mobile Table */}
      <table className="specs-table mobile">
        <tbody>
          <tr>
            <td className="label">Make</td>
            <td>BMW</td>
          </tr>
          <tr>
            <td className="label">Model</td>
            <td>E46 M3 <i className="fa-regular fa-bell"></i></td>
          </tr>
          <tr>
            <td className="label">Mileage</td>
            <td>104,100</td>
          </tr>
          <tr>
            <td className="label">VIN</td>
            <td>WBSBR93452EX24038</td>
          </tr>
          <tr>
            <td className="label">Engine</td>
            <td>3.2L I6</td>
          </tr>
          <tr>
            <td className="label">Drivetrain</td>
            <td>Rear-wheel drive</td>
          </tr>
          <tr>
            <td className="label">Transmission</td>
            <td>Automatic (6-Speed)</td>
          </tr>
          <tr>
            <td className="label">Body Style</td>
            <td>Convertible</td>
          </tr>
          <tr>
            <td className="label">Exterior Color</td>
            <td>Steel Gray Metallic</td>
          </tr>
          <tr>
            <td className="label">Interior Color</td>
            <td>Imola Red</td>
          </tr>
          <tr>
            <td className="label">Title Status</td>
            <td>Clean (TX)</td>
          </tr>
          <tr>
            <td className="label">Location</td>
            <td>Sugar Land, TX 77479</td>
          </tr>
          <tr>
            <td className="label">Seller</td>
            <td><i className="fa-regular fa-user"></i> Racer77</td>
          </tr>
          <tr>
            <td className="label">Seller Type</td>
            <td>Private Party</td>
          </tr>
        </tbody>
      </table>

      {/* Doug's Take */}
      <div className="doug">
        <Image className="avatar" src={Avatar} alt="avatar" />
        <h3>Doug’s Take</h3>
        <p>
          The E46 M3 is a favorite among BMW enthusiasts thanks to its timeless styling, analog driving experience, and the wonderful power delivery from its S54 6-cylinder engine. This particular M3 Convertible features a gorgeous Imola Red leather interior, and it boasts some nice factory equipment – including a limited-slip differential, heated front seats, and a Harman Kardon sound system. It also benefits from a rod bearing replacement, and it comes with a <a href="#">Lemon Squad</a> inspection for some extra peace of mind. Plus, this M3 is offered with the thrill of no reserve!
        </p>
      </div>

      {/* Sections */}
      <div className="section">
        <h2>Highlights</h2>
        <p>THIS... is a 2002 BMW M3 Convertible, finished in Steel Grey Metallic with a black soft top and an Imola Red interior.</p>
        <ul>
          <li>The attached <a href="#">Carfax</a> vehicle history report shows no mileage discrepancies in this M3's past.</li>
          <li>According to the build sheet provided in the gallery, notable factory equipment includes 18-inch wheels, a power-operated soft top, Nappa leather upholstery, power-adjustable heated front seats, and a Harman Kardon sound system. Notable modifications reported by the seller are limited to aftermarket kidney grilles, vinyl wrap on the interior trim, and a Pioneer head unit.</li>
          <li>Service documentation in the photo gallery indicates that this M3 had the rod bearings replaced in May 2023.</li>
          <li>The third-generation M3 made its debut for the 2000 model year as the quickest and most powerful evolution of the E46 3 Series. Offered as a coupe and as a convertible, it received a high-revving straight-6 engine, suspension improvements, and a muscular-looking exterior design. Production ended in 2006.</li>
          <li>Power comes from a 3.2-liter straight-6, rated at 333 horsepower and 262 lb-ft of torque. Output is sent to the rear wheels via a 6-speed SMG automated manual transmission.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Equipment</h2>
        <p>A build sheet is provided in the photo gallery, and a partial list of notable equipment reported by the seller includes:</p>
        <ul>
          <li>18-inch wheels</li>
          <li>Power-operated soft top</li>
          <li>Nappa leather upholstery</li>
          <li>Power-adjustable heated front seats</li>
          <li>Harman Kardon sound system</li>
          <li>Automatic climate control</li>
        </ul>
      </div>

      <div className="section">
        <h2>Modifications</h2>
        <p>Notable modifications reported by the seller include:</p>
        <ul>
          <li>ACL rod bearings</li>
          <li>Black-painted factory wheels</li>
          <li>Aftermarket fog lights</li>
          <li>Aftermarket kidney and fender grilles</li>
          <li>Tinted front turn indicators</li>
          <li>Black rear M3 badge</li>
          <li>Aftermarket leather trim on the steering wheel</li>
          <li>Vinyl wrap on interior trim</li>
          <li>Pioneer head unit</li>
          <li>Aftermarket shift knob</li>
        </ul>
      </div>

      <div className="section">
        <h2>Known Flaws</h2>
        <p>The attached <a href="#">Carfax</a> history report indicates that this M3 was involved in a side impact collision with another vehicle in June 2012 that resulted in "minor damage” to the front, left rear, and rear. The report adds that the airbags did not deploy.</p>
        <p>A <a href="#">Lemon Squad</a> pre-purchase inspection is included with this listing. The following flaws are additionally pictured in the gallery:</p>
        <ul>
          <li>Chips, scuffs, and scratches around the exterior</li>
          <li>Tires in need of replacement</li>
          <li>Wear on the front seats; cracks on the driver’s seat; split seam on the front passenger seat</li>
          <li>Wear and some scuffs on interior touch points</li>
          <li>The seller states that the key fobs are not operational.</li>
          <a href="#">View inspection report</a>
        </ul>
      </div>

      <div className="section">
        <h2>Recent Service History</h2>
        <p>Service documentation in the photo gallery indicates that the following maintenance has been performed:</p>
        <ul>
          <li>April 2025 (101,182 miles): Engine oil and filter changed, fluids checked</li>
          <li>November 2024 (97,777 miles): Fuel injection system cleaned/serviced</li>
          <li>September 2024 (97,246 miles): Engine oil and filter changed, oil pan and oil pan gasket replaced</li>
          <li>April 2024 (95,788 miles): Fuel pump replaced, relay replaced</li>
          <li>November 2023 (93,909 miles): Water pump replaced, thermostat replaced, serpentine belt replaced, radiator fan replaced, drive belt(s) replaced, coolant temperature sensor replaced, coolant flushed</li>
          <li>October 2023 (93,755 miles): Fuel injection rail seals replaced, fuel injection system flushed/serviced</li>
          <li>December 2022 (90,029 miles): Alternator replaced</li>
        </ul>
        <p>Additional service history is detailed in the attached <a href="#">Carfax</a> report.</p>
      </div>

      <div className="section">
        <h2>Other Items Included in Sale</h2>
        <ul>
          <li>2 keys</li>
          <li>Owner's manuals</li>
          <li>Factory head unit</li>
          <li>Spare center console with armrest</li>
          <li>ECS Tuning wheel spacers</li>
        </ul>
      </div>

      <div className="section">
        <h2>Ownership History</h2>
        <p>The seller purchased this M3 on Cars & Bids in October 2021 and has added approximately 17,600 miles since. The previous auction is viewable <a href="#">here.</a></p>
      </div>

      <AuctionCarVideos />
      <SellerQA />
      <AuctionMainInfo />
      <AuctionCommentsAndBids />
    </div>
  );
}
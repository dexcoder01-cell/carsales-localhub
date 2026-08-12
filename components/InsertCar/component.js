"use client";

import { useState } from "react";
import axios from "axios";
import "./style.scss";

export default function InsertCar() {
  const [form, setForm] = useState({ 
    name: "", 
    make: "", 
    model: "", 
    year: "", 
    price: "",
    auctionStatus: "Active",
    reserveStatus: "NO RESERVE",
    inspectionStatus: "INSPECTED",
    highBid: "",
    bidCount: "0",
    commentCount: "0",
    timeLeft: "11:26:10",
    transmission: "",
    engine: "",
    interiorColor: "",
    exteriorColor: "",
    mileage: "",
    vin: "",
    location: "",
    titleStatus: "",
    bodyStyle: "",
    drivetrain: "",
    seller: "",
    sellerType: "",
    shortDescription: "",
    dougsTake: "",
    description: ""
  });
  
  const [images, setImages] = useState([]);
  const [imageCategories, setImageCategories] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImages = e => {
    const files = [...e.target.files];
    setImages(files);
    
    const categories = files.map(() => "Exterior");
    setImageCategories(categories);
  };

  const handleCategoryChange = (index, category) => {
    const newCategories = [...imageCategories];
    newCategories[index] = category;
    setImageCategories(newCategories);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    
    const numberFields = ['year', 'price', 'mileage', 'highBid', 'bidCount', 'commentCount'];
    const formCopy = { ...form };
    
    numberFields.forEach(field => {
      if (formCopy[field] === '') {
        formCopy[field] = null;
      }
    });
    
    try {
      const formData = new FormData();
      
      Object.keys(formCopy).forEach(key => {
        if (formCopy[key] !== null && formCopy[key] !== '') {
          formData.append(key, formCopy[key]);
        }
      });
      
      images.forEach((image, index) => {
        formData.append("images", image);
        formData.append(`imageCategory_${index}`, imageCategories[index]);
      });

      const res = await axios.post("/api/singleCar", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Car added successfully!");
      
      setForm({ 
        name: "", make: "", model: "", year: "", price: "",
        auctionStatus: "Active", reserveStatus: "NO RESERVE", inspectionStatus: "INSPECTED",
        highBid: "", bidCount: "0", commentCount: "0", timeLeft: "11:26:10",
        transmission: "", engine: "", interiorColor: "", exteriorColor: "",
        mileage: "", vin: "", location: "",
        titleStatus: "", bodyStyle: "", drivetrain: "", seller: "", sellerType: "",
        shortDescription: "", dougsTake: "",
        description: ""
      });
      
      setImages([]);
      setImageCategories([]);
      document.getElementById("fileInput").value = "";
      
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add car: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h1>Add New Car</h1>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* Basic Information */}
          <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
            <h3>Basic Information</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <input name="name" placeholder="Car Name *" value={form.name} onChange={handleChange} required style={{ padding: "10px" }} />
              <input name="make" placeholder="Make" value={form.make} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="model" placeholder="Model" value={form.model} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="year" type="number" placeholder="Year" value={form.year} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} style={{ padding: "10px" }} />
            </div>
          </div>
          
          {/* Auction Details */}
          <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
            <h3>Auction Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <select name="auctionStatus" value={form.auctionStatus} onChange={handleChange} style={{ padding: "10px" }}>
                <option value="Active">Active</option>
                <option value="Ended">Ended</option>
                <option value="Upcoming">Upcoming</option>
              </select>
              <select name="reserveStatus" value={form.reserveStatus} onChange={handleChange} style={{ padding: "10px" }}>
                <option value="NO RESERVE">NO RESERVE</option>
                <option value="RESERVE MET">RESERVE MET</option>
                <option value="RESERVE NOT MET">RESERVE NOT MET</option>
              </select>
              <select name="inspectionStatus" value={form.inspectionStatus} onChange={handleChange} style={{ padding: "10px" }}>
                <option value="INSPECTED">INSPECTED</option>
                <option value="NOT INSPECTED">NOT INSPECTED</option>
              </select>
              <input name="timeLeft" placeholder="Time Left" value={form.timeLeft} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="highBid" type="number" placeholder="High Bid" value={form.highBid} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="bidCount" type="number" placeholder="Bid Count" value={form.bidCount} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="commentCount" type="number" placeholder="Comment Count" value={form.commentCount} onChange={handleChange} style={{ padding: "10px" }} />
            </div>
          </div>
          
          {/* Car Details */}
          <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
            <h3>Car Details</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <input name="transmission" placeholder="Transmission" value={form.transmission} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="engine" placeholder="Engine" value={form.engine} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="drivetrain" placeholder="Drivetrain" value={form.drivetrain} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="bodyStyle" placeholder="Body Style" value={form.bodyStyle} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="interiorColor" placeholder="Interior Color" value={form.interiorColor} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="exteriorColor" placeholder="Exterior Color" value={form.exteriorColor} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="mileage" type="number" placeholder="Mileage" value={form.mileage} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="vin" placeholder="VIN" value={form.vin} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="titleStatus" placeholder="Title Status" value={form.titleStatus} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="location" placeholder="Location" value={form.location} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="seller" placeholder="Seller" value={form.seller} onChange={handleChange} style={{ padding: "10px" }} />
              <input name="sellerType" placeholder="Seller Type" value={form.sellerType} onChange={handleChange} style={{ padding: "10px" }} />
            </div>
          </div>
          
          {/* Description */}
          <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
            <h3>Descriptions</h3>
            
            <label>Doug's Take</label>
            <textarea name="dougsTake" value={form.dougsTake} onChange={handleChange} rows="4" style={{ width: "100%", padding: "10px" }} />

            <label>Full Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} rows="6" style={{ width: "100%", padding: "10px" }} />
          </div>
          
          {/* Images */}
          <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
            <h3>Images</h3>
            <input id="fileInput" type="file" multiple onChange={handleImages} />

            {images.map((image, index) => (
              <div key={index}>
                {image.name}
                <select 
                  value={imageCategories[index]}
                  onChange={(e) => handleCategoryChange(index, e.target.value)}
                >
                  <option value="Exterior">Exterior</option>
                  <option value="Interior">Interior</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Docs">Docs</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            ))}
          </div>
          
          <button type="submit">Add Car</button>
        </form>
        
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
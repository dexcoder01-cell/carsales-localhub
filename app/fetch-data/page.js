"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function CarsPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {details
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("/api/singleCar");
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (carId) => {
    router.push(`/car/${carId}`);
  };

  const handleAddCarClick = () => {
    router.push("/insert-car");
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Loading cars...
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1>All Cars</h1>
        <button onClick={handleAddCarClick}>
          + Add New Car
        </button>
      </div>

      {/* Empty State */}
      {cars.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <p>No cars found. Add your first car!</p>
          <button onClick={handleAddCarClick}>Add Car</button>
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {cars.map((car) => (
            <div
              key={car._id}
              onClick={() => handleCardClick(car._id)}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                width: "300px",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              {car.images?.length > 0 && (
                <img
                  src={`http://localhost:5000/uploads/${car.images[0]}`}
                  alt={car.name}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
              )}

              <h3>{car.name}</h3>

              <p>Make: {car.make || "N/A"}</p>
              <p>Model: {car.model || "N/A"}</p>
              <p>Year: {car.year || "N/A"}</p>

              {car.price && (
                <p style={{ color: "blue" }}>
                  ₹{car.price.toLocaleString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
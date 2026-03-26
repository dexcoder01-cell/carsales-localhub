"use client";

// src/components/Dashboard.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/Auth/AuthContext";
import Sidebar from "@/components/Sidebar/component";
import CarForm from "@/components/InsertCar/component";
import TopBar from "@/components/TopBar/component";
// import Navbar from "./Navbar";
// import CarForm from "../pages/InsertCar/page";
// import "../style/Dashboard.css";
import "./style.scss";


export default function Dashboard() {
  // const { isAuthenticated } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated, router]);

  // if (!isAuthenticated) return null;

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <div style={{ padding: "20px" }}>
          <CarForm />
        </div>
      </div>
    </div>
  );
}
import React from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
// import { useAuth } from "../auth/AuthContext";

const Sidebar = () => {
  // const navigate = useNavigate();
  // const { logout } = useAuth();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/login");
  // };

  return (
    <div className="sidebar">
      <h2>Admin Menu</h2>
      <ul>
        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/add-car")}>Add Car</li>
        <li onClick={() => navigate("/listings")}>View Listings</li>
        <li onClick={() => navigate("/view-all-cars")}>View all car</li>
        {/* <li onClick={handleLogout} className="logout-btn">Logout</li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
  
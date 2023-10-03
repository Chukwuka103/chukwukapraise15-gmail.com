import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>Help</h2>
        <p>Terms & Conditions</p>
        <p>Security</p>
        <p>Locate MTN Store</p>
        <p>Log Complaints</p>
      </div>
      <div className="footer-section">
        <h2 style={{ color: "transparent" }}> Help </h2>
        <p>Terms & Conditions</p>
        <p>Security</p>
        <p>Locate MTN Store</p>
        <p>Log Complaints</p>
      </div>

      <div className="footer-section   c">
        <h2>Connect With Us</h2>
        <div className="social-icons">
          <div
   className="icons"
          ></div>
          <div
   className="icons"
          ></div>
          <div
   className="icons"
          ></div>
          <div
   className="icons"
          ></div>
          <div
   className="icons"
          ></div>
          <div
   className="icons"
          ></div>
        </div>
        <p style={{ color: "#666" }}>
          ©2019 MTN Nigeria Pvt Ltd, All rights reserved
        </p>
        <div className="location">
          <div className="location-icon"></div>
          <p>Nigeria</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;

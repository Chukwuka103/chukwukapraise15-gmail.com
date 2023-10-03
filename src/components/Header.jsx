import { useEffect, useState } from "react";
import "./Header.css";
function Header({show}) {
    
useEffect(() => {
      const [isSliderOpen, setIsSliderOpen] = useState(true);
      if (show) {

    } else{
        setIsSliderOpen(!isSliderOpen);
    }
},[])

  return (
    <>
      <div className="Header">
        <img src="public/mtnIcon.png" alt="" />
        <div className="icon">
          <i class="icofont-navigation-menu"></i>
        </div>
        <div className={`Media-Header ${isSliderOpen ? "active" : ""}`}>
          <ul>
            <li>My profile</li>
            <li>Add account</li>
            <li>Manage PIN</li>
            <li>My Plan</li>
            <li>Home</li>
            <li>Recharge</li>
            <li>Buy Bundle</li>
            <li>History</li>
            <li>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: " 0px 20px",
                }}
              >
                Useful Link <div>+</div>
              </div>
              <div className="hidden-Nav">
                <ul>
                  <li>My profile</li>
                  <li>Add account</li>
                  <li>Manage PIN</li>
                  <li>My Plan</li>
                  <li>Home</li>
                  <li>Recharge</li>
                  <li>Buy Bundle</li>
                  <li>History</li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="foot">
            <button>
              Logout <div>+</div>
            </button>
            <div className="social-icons">
              <div className="icons"></div>
              <div className="icons"></div>
              <div className="icons"></div>
              <div className="icons"></div>
              <div className="icons"></div>
              <div className="icons"></div>
            </div>
            <p
              style={{
                color: "#666",
                width: "80%",
                margin: "0 auto",
                fontSize: "80%",
                lineHeight: "50px",
              }}
            >
              ©2019 MTN Nigeria Pvt Ltd, All rights reserved
            </p>{" "}
            <p
              style={{
                color: "#666",
                width: "80%",
                margin: "0 auto",
                fontSize: "80%",
                lineHeight: "50px",
              }}
            >
              ©2019 MTN Nigeria Pvt Ltd, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;

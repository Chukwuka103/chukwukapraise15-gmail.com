import "./Sign-in.css";
import Inputs from "./Reusables/Inputs";
import Button from "./Reusables/Button";
import {useState} from "react"
function Signin() {
  const slide = (e) =>{

    if(e.target.innerHTML == "+"){
      e.target.parentElement.style.animation = "1s slide1 linear forwards"
      e.target.innerHTML = "-"
    }else if(e.target.innerHTML == "-"){
      e.target.parentElement.style.animation = "1s slide2 linear forwards"
      e.target.innerHTML = "+"
    }

  }
    const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };
  return (
    <>
      <div className="cont">
        <div className="welcome">
          <p className="h">Sign in</p>
          <p>
            <strong>Y'ellow!</strong>Welcome to the single sign-on digital world
          </p>
        </div>
        <div className="switch">
          <div className={`select ${!isSliderOpen ? "active" : ""}`} onClick={toggleSlider}>MTN Number</div>
          <div className={`select ${isSliderOpen ? "active" : ""}`} onClick={toggleSlider}>User ID</div>
        </div>
        <div className="hold">
          <Inputs name="icofont-mobile-phone" />
          <Button />
        </div>
        <div className="slider">
          <div >
            <div onClick={slide}>+</div>
            <h1>What services do mtn provide?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos esse quos. Doloremque molestias velit obcaecati animi culpa ipsa consequatur! Dolor nam impedit voluptate maxime! Repellat dignissimos voluptatibus quos reprehenderit, deserunt necessitatibus consectetur ratione vero? Natus inventore, provident animi quaerat placeat perferendis totam dolorum sunt! Tempore dolorum non maiores quidem!</p>
          </div>
          <div>
            <div  onClick={slide}>+</div>
            <h1>What services do mtn provide?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos esse quos. Doloremque molestias velit obcaecati animi culpa ipsa consequatur! Dolor nam impedit voluptate maxime! Repellat dignissimos voluptatibus quos reprehenderit, deserunt necessitatibus consectetur ratione vero? Natus inventore, provident animi quaerat placeat perferendis totam dolorum sunt! Tempore dolorum non maiores quidem!</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;

// import React, { useState } from "react";
// import "./Sign-in.css";
// import Inputs from "./Reusables/Inputs";
// import Button from "./Reusables/Button";

// function Signin() {
//   const [isSliderOpen, setIsSliderOpen] = useState(false);

//   const toggleSlider = () => {
//     setIsSliderOpen(!isSliderOpen);
//   };

//   return (
//     <div className="container">
//       <div className="welcome">
//         <h1>Sign in</h1>
//         <p>
//           <strong>Y'ellow!</strong> Welcome to the single sign-on digital world
//         </p>
//       </div>
//       <div className="switch-container">
//         <div className={`switch ${isSliderOpen ? "active" : ""}`} onClick={toggleSlider}>
//           MTN Number
//         </div>
//         <div className={`switch ${!isSliderOpen ? "active" : ""}`} onClick={toggleSlider}>
//           User ID
//         </div>
//       </div>
//       <div className="input-container">
//         <Inputs />
//         <Button />
//       </div>
//       <div className={`slider ${isSliderOpen ? "open" : ""}`}>
//         <div onClick={toggleSlider} className="slider-toggle">
//           {isSliderOpen ? "-" : "+"}
//         </div>
//         <h2>What services do MTN provide?</h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec dui vel orci
//           pulvinar efficitur. Quisque tincidunt venenatis tortor, quis commodo diam auctor
//           non.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signin;

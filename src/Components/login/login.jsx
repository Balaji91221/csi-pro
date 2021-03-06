import React from "react";
import "./login.css";
function Login() {
  return (
    <>
      <div className="circle1"></div>
      <div className="circle2"></div>

      <div className="page">
        {/* <center> */}
        <div className="heading">Enter Your College Email ID</div>
        {/* </center> */}
        <label className="field field_v3">
          <input className="field__input" placeholder="Email" />
          <span className="field__label-wrap">
            <span className="field__label">Your Email Here</span>
          </span>
        </label>
        <div className="wrapper">
          <a className="button" href="#">
            Next
          </a>
        </div>
      </div>

      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default Login;

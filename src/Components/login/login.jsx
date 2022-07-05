import React from 'react'
import './login.css'
function Login(){
  return
  <><div class="custom-loader"></div><div class="circle1"></div><div class="circle2"></div><center><div class="heading">Enter Your College Email ID</div></center><div class="page">
    <label class="field field_v3">
      <input class="field__input" placeholder="Email"/>
        <span class="field__label-wrap">
          <span class="field__label">Your Email Here</span>
        </span>
      </label>
  </div><div class="wrapper">
      <a class="button" href="#">Next</a>
    </div><svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg></>
    
    }
    
    export  {Login};
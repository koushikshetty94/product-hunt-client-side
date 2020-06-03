import React from "react"
import "../styles/header.css"


function Header() {
  return <div className="hero">
    <div className="wrapper">
      <div className="head">
        <span>
          <svg width="42" height="42" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg>
        </span>
        <span className="input_Box">
          <i class="fas fa-search"></i>
          <span className="input_Font">Discover your next favorite thing...</span>
        </span>
        <div>
          <span className="hero_Heading">Deals</span>
          <span className="hero_Heading">Jobs</span>
          <span className="hero_Heading">Makers</span>
          <span className="hero_Heading">Radio</span>
          <span className="hero_Heading">Ship</span>
          <span className="hero_Heading">...</span>
        </div>
      </div>

      <div>
        <span className="login">LOG IN</span>
        <span className="login signup">SIGN UP</span>

      </div>
    </div>
  </div>
}

export default Header
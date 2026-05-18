import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import schemetitle from "../assets/images/schemetitle.png";
import tnwees from "../assets/images/tnwees.png";
import kkt from "../assets/images/kkt.png";
import needs from "../assets/images/needs.png";
import uyegp from "../assets/images/uyegp.png";
import aabcs from "../assets/images/aabcs.png";

function HomePage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.12.46/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

useEffect(() => {
  const imgs = document.querySelectorAll(".slider img");
  let current = 0;
  const interval = setInterval(() => {
    imgs[current].classList.remove("active");
    current++;
    if(current >= imgs.length){
      current = 0;
    }
    imgs[current].classList.add("active");
  }, 3000);
  return () => clearInterval(interval);
}, []);

  const navigate = useNavigate();

  return (
    <form action="/">
    <div id="home" className="home">
      

      <header className="header">
        <img className="logo-img" src={schemetitle} alt="logo" />
        <h1 className="logo-text"><span className="msmename">MSME-</span>SCHEME GENERATOR</h1>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="search-input"
            type="search"
            placeholder="Enter Scheme name to search..."
          />
          <button className="search-btn" type="button">
            Search
          </button>
        </form>

        <nav className="nav">
          <a className="nav-link" href="#home">home</a>
          <a className="nav-link" href="#schemes">schemes</a>
          <a className="nav-link" href="#footer">contact</a>
        </nav>

        <button  className="signin-btn "
          type="button"
          onClick={() => navigate("/signup")}
          >
            Sign in ➜
        </button>

      </header>

      <div className="slider">
        <img src={schemetitle} alt="" className="active" />
        <img src={tnwees} alt="" />
        <img src={kkt} alt="" />
        <img src={needs} alt="" />
        <img src={uyegp} alt="" />
       <img src={aabcs} alt="" />
      </div>

      <h2 className="scheme-list">
        #GOVERNMENT MSME-SCHEMES FOR YOU!
      </h2>

      <button className="cta-btn">Find Your Schemes ➜</button>

      <div className="scheme-stats">
        <button className="stat-btn">
          <h5>
            Top schemes
            </h5>
            <p>1.Tamil Nadu Women Entrepreneurs Empowerment Scheme</p>
            <p>2.Kalaignar Kaivinai Thittam </p>
            <p>3.Unemployed Youth Employment Generation Programme </p>
            <p>4.New Entrepreneur -cum- Enterprise Development Scheme </p>
            <p>5.Annal Ambedkar Business Champions Scheme </p>
          </button>

        <button className="stat-btn-2">
          <h5>
            Dashboard
          </h5>
          </button>
          
      </div>

      <div className="how-it-works">
        <p className="section-subtitle">How it works</p>
        <h2 className="section-title">Easy steps to apply for Government  MSME-Schemes</h2>

        <div className="steps">
          <button className="step-card">
            <h2 className="step-title">Enter Details</h2>
            <p className="step-desc">Start by entering your details</p>
          </button>

          <button className="step-card">
            <h2 className="step-title">Search</h2>
            <p className="step-desc">Find relevant schemes</p>
          </button>

          <button className="step-card">
            <h2 className="step-title">Select & Apply</h2>
            <p className="step-desc">Apply for best scheme</p>
          </button>
        </div>
      </div>

      <span className="scroll-images"></span>

      <div className="about">
        <h2 className="section-title">About</h2>
        <p className="section-text">Lorem ipsum...</p>
      </div>

      <div id="schemes" className="schemes">
        <h2 className="section-title">Schemes By Category</h2>

        <div className="category-list">
          <button className="category-btn">a</button>
          <button className="category-btn">b</button>
          <button className="category-btn">c</button>
        </div>

        <button className="toggle-btn">view more or less</button>

        <h2 className="section-title">Central / State Schemes</h2>

        <div className="scheme-type">
          <button className="type-btn">x</button>
          <button className="type-btn">y</button>
        </div>
      </div>
<div className="footer" id="footer">
  <div className="footer-container">

    <div className="footer-brand">
      <h2 className="footer-title">Connect With Us</h2>
      <p className="footer-tagline">We're here to help you anytime</p>
    </div>

    <div className="footer-contact">
      <div className="contact-item">
        <span className="contact-label">Phone:</span>
        <p className="contact-text">+123456789</p>
      </div>

      <div className="contact-item">
        <span className="contact-label">Email:</span>
        <p className="contact-text">abc@gmail.com</p>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 All rights reserved</p>
  </div>
</div>
    </div>
    </form>
  );
}

export default HomePage;
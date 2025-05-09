import React from "react";
import "./webpage.css";

import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img11 from "../assets/img11.webp";

import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";
import img10 from "../assets/img10.webp";

import tshirt1 from "../assets/tshirt1.webp";
import tshirt2 from "../assets/tshirt2.webp";
import tshirt3 from "../assets/tshirt3.webp";
import tshirt4 from "../assets/tshirt4.webp";
import tshirt5 from "../assets/tshirt5.webp";
import tshirt6 from "../assets/tshirt6.webp";
import tshirt7 from "../assets/tshirt7.webp";
import vests from "../assets/vests.webp";
import cargos from "../assets/cargos.webp";
import fullsleeve from "../assets/fullsleeve.webp";
import pants from "../assets/pants.webp";
import sneakers from "../assets/sneakers.webp";

import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.webp";
import w3 from "../assets/w3.webp";
import w4 from "../assets/w4.webp";
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.webp";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.webp";
import w9 from "../assets/w9.webp";

import j1 from "../assets/j1.webp";
import j2 from "../assets/j2.webp";
import j3 from "../assets/j3.webp";
import j4 from "../assets/j4.webp";
import j5 from "../assets/j5.webp";

import f1 from "../assets/f1.webp";
import f2 from "../assets/f2.webp";
import f3 from "../assets/f3.webp";
import f4 from "../assets/f4.webp";
import f5 from "../assets/f5.webp";
import f6 from "../assets/f6.webp";
import f7 from "../assets/f7.webp";

import h1 from "../assets/h1.webp";
import h2 from "../assets/h2.webp";
import h3 from "../assets/h3.webp";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.webp";
import h6 from "../assets/h6.webp";

import google from "../assets/google.jpeg";
import appstore from "../assets/appstore.png";
import payment from "../assets/payment.jpeg";
function Navbar() {
  return (
    
    <div className="navbar">
    <title>Bewakoof.com</title>
      <div className="top">
        <div className="leftpart">
          <a href="#">Offers</a>
          <a href="#">Fanbook</a>
          <a href="#">Download App</a>
          <a href="#">Find a store near me</a>
        </div>
        <div className="rightpart">
          <a href="#">Contact Us</a>
          <a href="#">Track Order</a>
        </div>
      </div>

      <div className="mainpart">
        <div className="logo-and-links">
          <div className="logo">Bewakoof</div>
          <nav className="navbar-links">
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">MOBILE COVERS</a>
          </nav>
        </div>

        <div className="right-actions">
          <div className="search-box">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search by products" />
          </div>
          <a href="#" className="login-link">
            LOGIN
          </a>
          <FaHeart className="icon" />
          <FaShoppingBag className="icon" />
        </div>
      </div>
      <div className="categorybar">
        <a href="#">MEN</a>
        <a href="#">WOMEN</a>
        <a href="#">LIVE NOW</a>
        <a href="#">SHOP NOW</a>
        <a href="#">PLUS SIZE</a>
        <a href="#">ACCESSORIES</a>
        <a href="#">OFFICIAL MERCH</a>
        <a href="#">SNEAKERS</a>
        <a href="#">BEWAKOOF AIR</a>
      </div>
      <div className="images">
        <img src={img1} alt="img1" className="hero-image" />
        <img src={img2} alt="img2" className="hero-image" />
        <img src={img3} alt="img3" className="hero-image" />
        <img src={img4} alt="img4" className="hero-image" />
        <img src={img5} alt="img5" className="hero-image" />
        <img src={img11} alt="img5" className="hero-image" />
      </div>
      <h3
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Buy 3 Classic Fit T-shirts at Rs.999
      </h3>

      <div className="images">
        <img src={img6} alt="img1" className="hero-image" />
        <img src={img7} alt="img2" className="hero-image" />
        <img src={img8} alt="img3" className="hero-image" />
        <img src={img9} alt="img4" className="hero-image" />
        <img src={img10} alt="img5" className="hero-image" />
      </div>
      <a href="#" className="explore-link">
        Explore All
      </a>
      <div className="category2">
        <h2 className="category-heading">Shop by Category - Men</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src={tshirt1} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={tshirt2} alt="Joggers" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={tshirt3} alt="Shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={tshirt4} alt="Jeans" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={tshirt5} alt="Pyjamas" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={tshirt6} alt="Shorts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={tshirt7} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={vests} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={cargos} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={fullsleeve} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={pants} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
          <div className="category-card">
            <img src={sneakers} alt="Oversized T-shirts" />
            <div className="cname"></div>
          </div>
        </div>
      </div>

      <h2
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Shop by Category- Women
      </h2>
      <div className="women-section">
        <div className="women-scrollbar">
          <div className="women-category-card">
            <img src={w1} alt="Oversized T-shirts" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w2} alt="Joggers" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w3} alt="Cargos" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w4} alt="Classic Fit T-shirts" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w5} alt="Dresses" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w6} alt="Shirts" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w7} alt="Shirts" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w8} alt="Shirts" />
            <div className="women-category-name"></div>
          </div>
          <div className="women-category-card">
            <img src={w9} alt="Shirts" />
            <div className="women-category-name"></div>
          </div>
        </div>
      </div>

      <h2
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        The Jeans Edit
      </h2>
      <div className="product-section">
        <div className="product-grid">
          <div className="product-card">
            <img
              src={j1}
              alt="Men's Indigo Blue Jeans"
              className="product-image"
            />
            <div className="rating-badge">⭐ 4.5</div>
            <div className="favorite-icon">♡</div>

            <div className="product-info">
              <h4 className="product-brand">Bewakoof®</h4>
              <p className="product-title">
                Men's Indigo Blue Mid-Rise Stretchable Jeans
              </p>
              <div className="price-details">
                <span className="new-price">₹999</span>
                <span className="old-price">₹2799</span>
                <span className="discount">64% OFF</span>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img
              src={j2}
              alt="Men's Indigo Blue Jeans"
              className="product-image"
            />
            <div className="rating-badge">⭐ 4.5</div>
            <div className="favorite-icon">♡</div>

            <div className="product-info">
              <h4 className="product-brand">Bewakoof®</h4>
              <p className="product-title">
                women's dark blue Straight Fit Acid Wash Car..
              </p>
              <div className="price-details">
                <span className="new-price">₹999</span>
                <span className="old-price">₹2799</span>
                <span className="discount">64% OFF</span>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img
              src={j3}
              alt="Men's Indigo Blue Jeans"
              className="product-image"
            />
            <div className="rating-badge">⭐ 4.5</div>
            <div className="favorite-icon">♡</div>

            <div className="product-info">
              <h4 className="product-brand">Bewakoof®</h4>
              <p className="product-title">Men's Navy blue Oversized shorts</p>
              <div className="price-details">
                <span className="new-price">₹999</span>
                <span className="old-price">₹2799</span>
                <span className="discount">64% OFF</span>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img
              src={j4}
              alt="Men's Indigo Blue Jeans"
              className="product-image"
            />
            <div className="rating-badge">⭐ 4.5</div>
            <div className="favorite-icon">♡</div>

            <div className="product-info">
              <h4 className="product-brand">Bewakoof®</h4>
              <p className="product-title">
                Women's Orange This Is My Happy FAce F..
              </p>
              <div className="price-details">
                <span className="new-price">₹999</span>
                <span className="old-price">₹2799</span>
                <span className="discount">64% OFF</span>
              </div>
            </div>
          </div>
          <div className="product-card">
            <img
              src={j5}
              alt="Men's Indigo Blue Jeans"
              className="product-image"
            />
            <div className="rating-badge">⭐ 4.5</div>
            <div className="favorite-icon">♡</div>

            <div className="product-info">
              <h4 className="product-brand">Bewakoof®</h4>
              <p className="product-title">
                Women's Slushy Green Boyfriend T-shirt
              </p>
              <div className="price-details">
                <span className="new-price">₹499</span>
                <span className="old-price">₹2799</span>
                <span className="discount">61% OFF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="explore-all">
          <a href="#">Explore All</a>
        </div>
      </div>
      <h3
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        Shop by Fandom
      </h3>
      <div className="fandom-section">
        <div className="fandom-grid">
          <div className="fandom-card">
            <img src={f1} alt="Marvel Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
          <div className="fandom-card">
            <img src={f2} alt="DC Comics Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
          <div className="fandom-card">
            <img src={f3} alt="Disney Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
          <div className="fandom-card">
            <img src={f4} alt="Anime Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
          <div className="fandom-card">
            <img src={f5} alt="Anime Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
          <div className="fandom-card">
            <img src={f6} alt="Anime Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
          <div className="fandom-card">
            <img src={f7} alt="Anime Collection" className="fandom-image" />
            <div className="fandom-name"></div>
          </div>
        </div>
      </div>
      <a href="#" className="explore-link">
        Explore All
      </a>
      <h3
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        TOO HOT TO BE MISSED
      </h3>
      <div className="hot-section">
        <div className="hot-row">
          <div className="hot-card">
            <img src={h1} alt="Tom and Jerry" className="hot-image" />
          </div>
          <div className="hot-card">
            <img
              src={h2}
              alt="Captain America Sneakers"
              className="hot-image"
            />
          </div>
          <div className="hot-card">
            <img src={h3} alt="Summer Dresses" className="hot-image" />
          </div>
          <div className="hot-card">
            <img src={h4} alt="Bags Collection" className="hot-image" />
          </div>
          <div className="hot-card">
            <img src={h5} alt="Bags Collection" className="hot-image" />
          </div>
          <div className="hot-card">
            <img src={h6} alt="Bags Collection" className="hot-image" />
          </div>
        </div>
      </div>
      <a href="#" className="explore-link">
        Explore All
      </a>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4 className="footer-title">CUSTOMER SERVICE</h4>
            <ul className="footer-list">
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Return Order</li>
              <li>Cancel Order</li>
              <li>15 Days Return Policy*</li>
              <li>Cash On Delivery*</li>
            </ul>
          </div>
          <br></br>
          <div className="footer-section">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>We are Hiring</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">CONNECT WITH US</h4>
            <ul className="footer-list">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Pinterest</li>
              <li>Snapchat</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">KEEP UP TO DATE</h4>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="Enter Email Id"
                className="subscribe-input"
              />
              <button className="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="download-app">
            <p>DOWNLOAD THE APP</p>
            <div className="app-icons">
              <img src={google} alt="Google Play" />
              <img src={appstore} alt="App Store" />
            </div>
          </div>

          <div className="secure-payment">
            <p>100% SECURE PAYMENT</p>
            <div className="payment-icons">
              <img src={payment} alt="Payment Methods" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Navbar;

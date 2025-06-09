import React from 'react';
import './App.css';

import heroImage from './hero.png';
import heroimage2 from'./hero2.png';
import women from './women.png';
import women2 from './women2.png';
import latestcoll from './latestcoll.png';
import heart from './heart.png';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="https://images.bewakoof.com/web/BewakoofBirthday-264x36-Desktop-2.svg" alt="Bewkoof Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <div className="nav-left">
            <a href="#Men">MEN</a>
            <a href="#women">WOMEN</a>
            <a href="#mobile-covers">MOBILE COVERS</a>

          </div>
          <div className="nav-right">
            <input type="text" placeholder="Search By Product " className="search-box"></input>
            <a href="#LOGIN">LOGIN</a>
           <a href="#"><img src={heart} alt="Wishlist" style={{ width: '16px', height: '16px', marginRight: '5px' }} /> Wishlist</a>
          </div>
        </nav>
      </header>
      <section id="sale" className="category-section">
        <img src='https://images.bewakoof.com/uploads/grid/app/1x1-RM-1--1--1746247520.jpg'/>
        <img src='https://images.bewakoof.com/uploads/grid/app/Trending-now-Bestseller-IK-RM-1x1-Common-HC-BANNER--1--1746188248.gif'/>
        <img src='https://images.bewakoof.com/uploads/grid/app/Buy-3-CFT-Common-1x1-HC-Banner-1746027697.jpg'/>
      </section>
      {/* Hero Section */}
      <section className="hero">
        <img
          className="hero-banner"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1135d052-0e8d-4cb7-a48e-102e638805aa.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        />
      </section>
      {/* New Arrivals Section */}
      <section id="new-arrivals" className="category-section">
        <h2>New Arrivals</h2>
        <div className="product-list new-arrivals-list">
          <div className="product-card">
            <div className="image-container">
              <span className="fit-label">OVERSIZED FIT</span>
              <img
                src="https://images.bewakoof.com/t1080/men-s-green-dimag-mat-kha-graphic-printed-oversized-t-shirt-662628-1745215797-1.jpg"
                alt="Men's Green Dimag Mat Kha Graphic Printed Oversized T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h5>Men Dimag Mat Kha Graphic Printed Oversized T-shirt</h5>
            <p>₹699 <del>₹1799</del> <span className="discount">61% OFF</span></p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <span className="fit-label">OVERSIZED FIT</span>
              <img
                src="https://images.bewakoof.com/t320/women-s-blue-solemnly-no-good-graphic-printed-oversized-t-shirt-646767-1745494608-1.jpg"
                alt="Women's Blue Solemnly No Good Graphic Printed Oversized T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h3>Women's Blue Solemnly No Good Graphic Printed Oversized T-shirt</h3>
            <p>₹699 <del>₹1799</del> <span className="discount">61% OFF</span></p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <span className="fit-label buy-3-for-999">BUY 3 FOR 999</span>
              <img
                src="https://images.bewakoof.com/t1080/men-s-navy-blue-swachh-space-graphic-printed-t-shirt-666805-1745485896-1.jpg"
                alt="Men's Navy Blue Swachh Space Graphic Printed T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h3>Men's Navy Blue Swachh Space Graphic Printed T-shirt</h3>
            <p>₹499 <del>₹1499</del> <span className="discount">66% OFF</span></p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <span className="fit-label">OVERSIZED FIT</span>
              <img
                src="https://images.bewakoof.com/t1080/men-s-orange-sippin-sun-graphic-printed-oversized-t-shirt-666848-1742497212-1.jpg"
                alt="Men's Orange Sippin Sun Graphic Printed Oversized T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h3>Men's Orange Sippin Sun Graphic Printed Oversized T-shirt</h3>
            <p>₹599 <del>₹1799</del> <span className="discount">66% OFF</span></p>
          </div>
          <div className="product-card">
            <div className="image-container">
              <span className="fit-label buy-2-for-999">BUY 2 FOR 999</span>
              <img
                src="https://images.bewakoof.com/t320/women-s-aventurine-green-lemonade-graphic-printed-oversized-t-shirt-666409-1744018977-1.jpg"
                alt="Women's Blue Solemnly No Good Graphic Printed Oversized T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h3>Women's Blue Solemnly No Good Graphic Printed Oversized T-shirt</h3>
            <p>₹599 <del>₹1399</del> <span className="discount">57% OFF</span></p>
          </div>
        </div>
      </section>

      {/* Men Category Section */}
      <h2> SHOP BY CATEGORY-MEN </h2>
      <section id="men" className="category-section">
        <img src={heroImage} alt="Men Category Hero" className="hero-banner" />
        <img src={heroimage2} alt="Men Category Hero" className="hero-banner" />
      </section>
      {/* Women Category Section */}
      <h2>Shop by Category- Women</h2>
      <section id="women" className="category-section">
      <img src={women} alt="women Category Hero" className="women-banner" />
        <img src={women2} alt="Women Category Hero" className="hero-banner" />
      </section>

      {/* Buy 3 Classic Fit T-shirts at Rs.999 */}
      <section id="mobile-covers" className="category-section">
        <h2>Buy 3 Classic Fit T-shirts at Rs.999</h2>
        <div className="product-list">
          <div className="product-card">
            <div className="image-container">
              <span className="fit-label">OVERSIZED FIT</span>
              <img
                src="https://images.bewakoof.com/t320/men-s-green-t-shirt-608241-1737551783-1.jpg"
                alt="Men's Green Dimag Mat Kha Graphic Printed Oversized T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h5>Men Green  Oversized T-shirt</h5>
            <p>₹399 <del>₹799</del> <span className="discount">60% OFF</span></p>
          </div>
    
          <div className="product-card">
          <div className="image-container">
          <span className="fit-label buy-3-for-999">BUY 3 FOR 999</span>
              <img
                src="https://images.bewakoof.com/t320/women-s-red-sarcastic-one-dl-boyfriend-graphic-printed-t-shirt-386575-1715257454-1.jpg"
                alt="Women's Red Sarcastic One (DL) Boyfriend Graphic Printed T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h5>Women's Red Sarcastic One (DL) Boyfriend Graphic Printed T-shirt</h5>
            <p>₹399 <del>₹799</del> <span className="discount">60% OFF</span></p>
          </div>
          <div className="product-card">
          <div className="image-container">
          <span className="fit-label buy-3-for-999">BUY 3 FOR 999</span>
              <img
                src="https://images.bewakoof.com/t1080/men-s-green-move-on-graphic-printed-t-shirt-587160-1739771163-1.jpg"
                alt="Men's Green Move On Graphic Printed T-shirtt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h5>Men's Green Move On Graphic Printed T-shirt</h5>
            <p>₹499 <del>₹1099</del> <span className="discount">59% OFF</span></p>
          </div>
          <div className="product-card">
          <div className="image-container">
          <span className="fit-label buy-3-for-999">BUY 3 FOR 999</span>
              <img
                src="https://images.bewakoof.com/t320/women-s-black-swag-rani-graphic-printed-oversized-acid-wash-t-shirt-663621-1740056635-1.jpg"
                alt="Women's Black Swag Rani Graphic Printed Oversized Acid Wash T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h5>Women's Black Swag Rani Graphic Printed Oversized Acid Wash T-shirt</h5>
            <p>₹699 <del>₹1399</del> <span className="discount">59% OFF</span></p>
          </div>
        <div className="product-card">
          <div className="image-container">
          <span className="fit-label buy-3-for-999">BUY 3 FOR 999</span>
              <img
                src="https://images.bewakoof.com/t1080/women-s-pink-bubble-panda-graphic-printed-boyfriend-t-shirt-581504-1744883188-1.jpg"
                alt="Women's Pink Bubble Panda Graphic Printed Boyfriend T-shirt"
              />
            </div>
            <h3 style={{ fontSize: '20px', textAlign: 'left', paddingLeft: '5px' }}>Bewakoof®</h3>
            <h5>Women's Pink Bubble Panda Graphic Printed Boyfriend T-shirt</h5>
            <p>₹399 <del>999</del> <span className="discount">60% OFF</span></p>
          </div>
        </div>
      </section>

      {/* Latest Collections */}
        <h2>Latest Collections</h2>
        <section id="Latest Collections" className="category-section">
      <img src={latestcoll} alt="Latest Collections" className="women-banner" />
      </section>

      {/* Shop by Fandom */}
      <h2>Shop by Fandom</h2>
      <section id="sale" className="category-section">
        <img src='https://images.bewakoof.com/uploads/grid/app/SC-marvel-men-1738586657.jpg'/>
        <img src='https://images.bewakoof.com/uploads/grid/app/SC-squid-games-men-1738586857.jpg'/>
        <img src='https://images.bewakoof.com/uploads/grid/app/SC-disney-women--1--1738592408.jpg'/>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
          <div className="footer-section">
            <img
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg"
              alt="Bewakoof Tribe Trademark Logo"
              className="footer-logo"
            />
          </div>
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#track">Track Order</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us </h4>
            <ul className="social-links">
              <li><a href="https://www.facebook.com/bewakoof" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/bewakoof" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/bewakoof" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.youtube.com/bewakoof" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Keep Up To Date</h4>
          </div>
          <div className="footer-section">
            <h4>Download The App</h4>
            <img src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_android_v1.png&w=256&q=75"/>
            <img src='https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_ios_v1.png&w=256&q=75'/>
          </div>
          <div className="footer-section">
            <h4>100% Secure Payment</h4>
          </div>
        </div>
        <p className="footer-copy">&copy; 2024 Bewkoof. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

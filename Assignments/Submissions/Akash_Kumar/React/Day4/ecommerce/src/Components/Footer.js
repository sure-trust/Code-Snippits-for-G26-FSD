import React from 'react'

export default function Footer() {
  return (
    <div>
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
  )
}

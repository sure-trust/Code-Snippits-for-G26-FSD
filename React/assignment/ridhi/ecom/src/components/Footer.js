import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer-logo"
        src="https://images.bewakoof.com/web/ic-desktop-bwkf-tribe-trademark-logo.svg"
        alt="alteration"
      />
      <div className="footer-columns">
        <div className="footer-column">
          <h3 className="footer-heading">CUSTOMER SERVICE</h3>
          <p className="footer-item">Contact Us</p>
          <p className="footer-item">Track Order</p>
          <p className="footer-item">Return Order</p>
          <p className="footer-item">Cancel Order</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">COMPANY</h3>
          <p className="footer-item">About Us</p>
          <p className="footer-item">Terms & Conditions</p>
          <p className="footer-item">Privacy Policy</p>
          <p className="footer-item">We are Hiring</p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">CONNECT WITH US</h3>
          <ul>
            
          <li>
          <a 
            href="https://www.facebook.com/bewakoofcom"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link">
          
            <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png"alt="Facebook"className="footer-social-icon"/></a>
            </li>
          
          <li>
          <a 
          href="https://www.instagram.com/bewakoof/"
          target="_blank"
          rel="noreferrer"
          className="footer-social-link">
          
            <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png"alt="Instagram"className="footer-social-icon"/>
            </a>
            </li>
          <li>
          <a href="https://twitter.com/bewakoof"target="_blank" rel="noreferrer"
              className="footer-social-link">
            
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="footer-social-icon"/>
              </a>
              </li>
            <li>
            <a
              href="https://www.snapchat.com/add/bewakoof"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link">
          
              <img
                src="https://cdn-icons-png.flaticon.com/512/3670/3670274.png"
                alt="Snapchat"
                className="footer-social-icon"/>
              </a>
              </li>
              </ul>
              
        </div>
      </div>
      <div className="footer-line"></div>
      </div>
   

  );
};

export default Footer;

import React from 'react'
import '../App.css';

export default function Navbar() {
  return (
    <div>
        {/* Top most navbar */}
      <div id='nav1'>
        <div id='left_nav1'>
            <div>Offers</div>
            <div>Fanbook</div>
            <div>Download App</div>
            <div>Find a store near me</div>            
        </div>
        <div id='right_nav1'>
            <div>Contact Us</div>
            <div>Track Order</div>
        </div>
      </div>

      {/* Second Navbar */}
      <div id='nav2'>
        <div id='left_nav2'>
            <div id='logo'></div>
            <div>Men</div>
            <div>Women</div>
            <div>Mobile Covers</div>
        </div>
        <div id='right_nav2'>
            <div id='searchbar'></div>
            <div>login</div>
            <div>like</div>
            <div>cart</div>
        </div>
      </div>
      <div id='nav3'>
        <div id='men_women'>
            <div id='men'>MEN</div>
            <div id='women'>WOMEN</div>
        </div>
        <div>LIVE NOW</div>
        <div>SHOP NOW</div>
        <div>PLUS SIZE</div>
        <div>ACCESSORIES</div>
        <div>OFFICIAL MERCH</div>
        <div>SNEAKERS</div>
        <div>BEWAKOOF AIR</div>
        <div>HEAVY DUTY</div>
        <div>CUSTOMIZATION</div>
        <div>WINTER WEAR</div>

      </div>
    </div>
  )
}

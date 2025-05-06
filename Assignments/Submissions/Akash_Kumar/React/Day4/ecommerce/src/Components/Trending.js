import React from 'react'
import '../App.css';

export default function Trending() {
  return (
    <div id='trending'>
      <div id='trending_text'>Trending Category</div>
      <div id='trending_cards_container'>
        <div id='shirt_pic'>
            {/* <div id='shirt_name'>Oversized T-shirts</div> */}
        </div>

        <div id='shirt_pic'></div>
        <div id='shirt_pic'></div>
        <div id='shirt_pic'></div>
        <div id='shirt_pic'></div>
      </div>
    </div>
  )
}

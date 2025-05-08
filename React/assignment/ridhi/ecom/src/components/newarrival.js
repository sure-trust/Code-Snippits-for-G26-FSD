
import React, { useRef } from 'react'
import './newarrival.css'

import img1 from '../images/newarrimg1.webp'
import img2 from '../images/newarrimg2.webp'
import img3 from '../images/newarrimg3.webp'
import img4 from '../images/oversizedtshirt1.png'
import img5 from '../images/oversizedtshirt2.png'
import img6 from '../images/oversizedtshirt3.png'
import img7 from '../images/oversizedtshirt.png'
import img8 from '../images/coordset.jpg'
import img9 from '../images/latestcoll.png'
import img10 from '../images/Dresses.webp'
import img11 from '../images/cargos.webp'
import img12 from '../images/trending.png'

const popularItems = [
  { img: img1, category: 'Tshirt', info: 'women' },
  { img: img2, category: 'oversized' },
  { img: img3, category: 'Crop tshirt' }
]

const trendingItems = [
  { img: img4, price: 150, originalPrice: 400 },
  { img: img5, price: 200, originalPrice: 250 },
  { img: img6, price: 300, originalPrice: 350 },
  { img: img7, price: 550, originalPrice: 800 },
  { img: img8, price: 450, originalPrice: 600 },
  { img: img9, price: 250, originalPrice: 400 },
  { img: img10, price: 350, originalPrice: 500 },
  { img: img11, price: 550, originalPrice: 900 }
]

function NewArrival () {
  const scrollRef = useRef(null)

  function scroll (direction) {
    if (scrollRef.current) {
      const scrollAmount = 150
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className='category-section'>

      <div className='section popular'>
        <h2>New Arrival</h2>
        <div className='scroll-controls'>

          <button className='scroll-btn' onClick={() => scroll('left')}>
            <i className='fa-solid fa-circle-chevron-left' />
          </button>

          <div className='card-row scrollable' ref={scrollRef}>
            {popularItems.map(function (item, index) {
              return (
                <div className='card' key={index}>
                {}
                <img src={item.img} alt={item.category} />
                  <p>{item.category}</p>
                </div>
              )
            })}
          </div>

          <button className='scroll-btn' onClick={() => scroll('right')}>
            <i className='fa-solid fa-circle-chevron-right' />
          </button>

        </div>
      </div>

      <div className='section product-mrp'>
        <h2>TRENDING</h2>
        <div className='full-image-container'>
          <img src={img12} alt='' className='full-width-img' />
        </div>
      </div>

      <div className='section trending'>
        <h2>Buy 3 Classical fit </h2>
        <div className='card-row'>

          {trendingItems.map(function (item, index) {
            const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)
            return (
              <div className='card' key={index}>
                <img src={item.img} alt="" />
                <div className='price-block'>
                  <span className='price'>₹{item.price}</span>
                  <span className='cut'>₹{item.originalPrice}</span>
                  <span className='off'>({discount}% OFF)</span>
                </div>
              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default NewArrival

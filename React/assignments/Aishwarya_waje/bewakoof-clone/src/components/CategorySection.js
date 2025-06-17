import React, { useRef, useEffect } from 'react';
import './CategorySection.css';
import data from '../Data.json';

const CategorySection = () => {
  const newArrivals = data.newArrivals;
  const trending = data.trending;
  const fandoms = data.fandoms;
  const scrollAmount = 320;

  const newArrivalsRef = useRef(null);
  const fandomsRef = useRef(null);

  const scroll = (direction, ref) => {
    if (ref.current) {
      const { scrollLeft } = ref.current;
      const scrollBy = direction === 'left' ? -scrollAmount : scrollAmount;
      ref.current.scrollTo({
        left: scrollLeft + scrollBy,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (fandomsRef.current) {
        const container = fandomsRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="category-wrapper">
        <h2>NEW ARRIVALS</h2>
        <div className="scroll-buttons">
          <button className="scroll-btn left" onClick={() => scroll('left', newArrivalsRef)}>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
          <div className="category-section" ref={newArrivalsRef}>
            {newArrivals.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="tag">{item.tag}</div>
                <img src={item.image} alt={item.title} className="product-image" />
                <div className="rating">⭐ {item.rating}</div>
                <div className="title">{item.title}</div>
                <div className="price-section">
                  <span className="price">₹{item.price}</span>
                  <span className="original-price">₹{item.originalPrice}</span>
                  <span className="discount">{item.discount}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scroll('right', newArrivalsRef)}>
            <i className="fa-solid fa-circle-chevron-right"></i>
          </button>
        </div>
        <a href="http://localhost:3000/men">Explore All</a>
      </div>

      <div>
        <h2>Trending Categories</h2>
        <div className="trending-wrapper">
          <div className="trending-categories">
            {trending.map((category, index) => (
              <div className="category-card" key={index}>
                <img src={category.image} alt={category.title} />
                <div className="category-label">{category.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fandom-wrapper">
        <h2>Shop by Fandom</h2>
        <div className="fandom-grid" ref={fandomsRef}>
          {fandoms.map((fan, index) => (
            <div className="fandom-card" key={index}>
              <img className="fandom-image" src={fan.image} alt={fan.title} />
              <div className="fandom-logo">
                <img src={fan.logo} alt={fan.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySection;

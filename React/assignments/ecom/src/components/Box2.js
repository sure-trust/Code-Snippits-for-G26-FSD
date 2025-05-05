import React from 'react';
import './Box2.css';

const NewArrivals = () => {
  const products = [
    {
      img: 'https://images.bewakoof.com/t320/men-s-charcoal-grey-oversized-acid-wash-joggers-646418-1743067194-1.jpg',
      brand: 'Bewakoof®',
      title: "Men's Gardenia Level It Up Stay Iconic Typography Oversized T-shirt",
      price: '₹599'
    },
    {
      img: 'https://images.bewakoof.com/t320/men-s-charcoal-grey-oversized-joggers-646462-1735884704-1.jpg',
      brand: 'Bewakoof®',
      title: "Men's Gardenia Level It Up Stay Iconic Typography Oversized T-shirt",
      price: '₹449'
    },
    {
      img: 'https://images.bewakoof.com/t320/men-s-purple-oversized-joggers-604221-1735206819-1.jpg',
      brand: 'Bewakoof®',
      title: "Men's Gardenia Level It Up Stay Iconic Typography Oversized T-shirt",
      price: '₹789'
    },
    {
      img: 'https://images.bewakoof.com/t320/men-s-beige-oversized-joggers-646448-1736509072-1.jpg',
      brand: 'Bewakoof®',
      title: "Men's Blue Naruto Graphic Printed Oversized T-shirt",
      price: '₹449'
    },
    {
      img: 'https://images.bewakoof.com/t320/men-s-navy-blue-oversized-joggers-646447-1735812966-1.jpg',
      title: "Men's Gardenia Level It Up Stay Iconic Typography Oversized T-shirt",
      price: '₹849'
    }
  ];

  return (
    <section className="new-arrivals-section">
      <h2 className="section-title">B'day Steal: Joggers under Rs.999</h2>

      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img 
              src={product.img} 
              alt={product.title} 
              className="product-image" 
            />
            <h3 className="brand-name">{product.brand}</h3>
            <p className="product-title">{product.title}</p>
            <h4 className="product-price">{product.price}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

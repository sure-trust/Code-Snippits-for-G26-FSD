import React, { createContext, useEffect, useState } from 'react';

export const ProductDomain = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(
      'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
    )
      .then(res => res.json())
      .then(data => {
        console.log('Data fetched successfully');
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Failed to fetch products:', error));
  }, []);

  useEffect(() => {
    const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <ProductDomain.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductDomain.Provider>
  );
};

export default ProductProvider;

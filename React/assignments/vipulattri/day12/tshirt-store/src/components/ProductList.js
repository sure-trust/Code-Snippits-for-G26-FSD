import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const SearchContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  margin: 0;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-weight: bold;
  color: #007bff;
`;

const AddToCartButton = styled.button`
  padding: 8px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 5px;
  font-size: 0.9rem;
`;

function ProductList() {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    type: '',
    priceRange: ''
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(product => {
      const searchMatch = query === '' || 
        product.name.toLowerCase().includes(query) ||
        product.color.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query);
      
      const genderMatch = filters.gender === '' || product.gender === filters.gender;
      const colorMatch = filters.color === '' || product.color === filters.color;
      const typeMatch = filters.type === '' || product.type === filters.type;
      const priceMatch = filters.priceRange === '' || 
        (filters.priceRange === '0-250' && product.price <= 250) ||
        (filters.priceRange === '251-450' && product.price > 250 && product.price <= 450) ||
        (filters.priceRange === '451+' && product.price > 450);

      return searchMatch && genderMatch && colorMatch && typeMatch && priceMatch;
    });

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    
    // Apply filters immediately
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(product => {
      const searchMatch = query === '' || 
        product.name.toLowerCase().includes(query) ||
        product.color.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query);
      
      const genderMatch = filterType === 'gender' ? 
        (value === '' || product.gender === value) : 
        (filters.gender === '' || product.gender === filters.gender);
      
      const colorMatch = filterType === 'color' ? 
        (value === '' || product.color === value) : 
        (filters.color === '' || product.color === filters.color);
      
      const typeMatch = filterType === 'type' ? 
        (value === '' || product.type === value) : 
        (filters.type === '' || product.type === filters.type);
      
      const priceMatch = filterType === 'priceRange' ? 
        (value === '' || 
          (value === '0-250' && product.price <= 250) ||
          (value === '251-450' && product.price > 250 && product.price <= 450) ||
          (value === '451+' && product.price > 450)
        ) : 
        (filters.priceRange === '' || 
          (filters.priceRange === '0-250' && product.price <= 250) ||
          (filters.priceRange === '251-450' && product.price > 250 && product.price <= 450) ||
          (filters.priceRange === '451+' && product.price > 450)
        );

      return searchMatch && genderMatch && colorMatch && typeMatch && priceMatch;
    });

    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity >= product.quantity) {
        alert('Sorry, this item is out of stock!');
        return;
      }
      setCart(prev => prev.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const uniqueColors = [...new Set(products.map(p => p.color))];
  const uniqueTypes = [...new Set(products.map(p => p.type))];

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for t-shirts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <SearchButton className="search-button-container" onClick={handleSearch}>
          Search
        </SearchButton>
      </SearchContainer>

      <FilterContainer>
        <FilterGroup>
          <FilterLabel>Gender</FilterLabel>
          <select
            value={filters.gender}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
          >
            <option value="">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Color</FilterLabel>
          <select
            value={filters.color}
            onChange={(e) => handleFilterChange('color', e.target.value)}
          >
            <option value="">All</option>
            {uniqueColors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Type</FilterLabel>
          <select
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="">All</option>
            {uniqueTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Price Range</FilterLabel>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          >
            <option value="">All</option>
            <option value="0-250">₹0 - ₹250</option>
            <option value="251-450">₹251 - ₹450</option>
            <option value="451+">₹451+</option>
          </select>
        </FilterGroup>
      </FilterContainer>

      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductImage src={product.imageURL} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <p>Type: {product.type}</p>
            <p>Color: {product.color}</p>
            <p>Gender: {product.gender}</p>
            <ProductPrice>₹{product.price}</ProductPrice>
            <AddToCartButton
              onClick={() => addToCart(product)}
              disabled={product.quantity === 0}
            >
              Add to Cart
            </AddToCartButton>
            {product.quantity === 0 && (
              <ErrorMessage>Out of Stock</ErrorMessage>
            )}
          </ProductCard>
        ))}
      </ProductGrid>
    </div>
  );
}

export default ProductList; 
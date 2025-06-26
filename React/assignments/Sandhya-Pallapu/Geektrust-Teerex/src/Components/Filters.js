import React from "react";

function Filters({ handleFilterChange }) {
  return (
    <div className="filter-sidebar">
      
      <h3>Colour</h3>
      <ul  type="none">
        <li><input type="checkbox" onChange={() => handleFilterChange("color", "Red")} /> Red</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("color", "Blue")} /> Blue</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("color", "Green")} /> Green</li>
      </ul>

      <h3>Gender</h3>
      <ul type="none">
        <li><input type="checkbox" onChange={() => handleFilterChange("gender", "Men")} /> Men</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("gender", "Women")} /> Women</li>
      </ul>

      <h3>Price</h3>
      <ul type="none">
        <li><input type="checkbox" onChange={() => handleFilterChange("price", "0-250")} /> 0-₹250</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("price", "251-450")} /> ₹251-₹450</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("price", "451+")} /> ₹450+</li>
      </ul>

      <h3>Type</h3>
      <ul type="none">
        <li><input type="checkbox" onChange={() => handleFilterChange("type", "Polo")} /> Polo</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("type", "Hoodie")} /> Hoodie</li>
        <li><input type="checkbox" onChange={() => handleFilterChange("type", "Basic")} /> Basic</li>
      </ul>
    </div>
  );
}

export default Filters;

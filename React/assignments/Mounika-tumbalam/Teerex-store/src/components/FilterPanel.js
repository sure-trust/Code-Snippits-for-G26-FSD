const FilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFilters((prev) => {
        const updated = { ...prev };
        if (checked) {
          updated[name].push(value);
        } else {
          updated[name] = updated[name].filter((item) => item !== value);
        }
        return updated;
      });
    }
  };

  const panelStyle = {
    
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "250px",
    backgroundColor: "#f9f9f9",
    marginBottom: "20px"
  };

  const sectionTitle = {
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "16px"
  };

  const checkboxStyle = {
    marginRight: "8px"
  };

  const sectionStyle = {
    marginBottom: "16px"
  };

  return (
    <div style={panelStyle}>
      <div style={sectionStyle}>
        <div style={sectionTitle}>Color</div>
        {["Red", "Blue", "Green"].map((color) => (
          <div key={color}>
            <input
              type="checkbox"
              name="color"
              value={color}
              onChange={handleChange}
              style={checkboxStyle}
            />
            {color}
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <div style={sectionTitle}>Gender</div>
        {["Men", "Women"].map((gender) => (
          <div key={gender}>
            <input
              type="checkbox"
              name="gender"
              value={gender}
              onChange={handleChange}
              style={checkboxStyle}
            />
            {gender}
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <div style={sectionTitle}>Price</div>
        <div>
          <input
            type="checkbox"
            name="price"
            value="0-250"
            onChange={handleChange}
            style={checkboxStyle}
          />
          0 - 250
        </div>
        <div>
          <input
            type="checkbox"
            name="price"
            value="251-450"
            onChange={handleChange}
            style={checkboxStyle}
          />
          251 - 450
        </div>
        <div>
          <input
            type="checkbox"
            name="price"
            value="451-above"
            onChange={handleChange}
            style={checkboxStyle}
          />
          451+
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionTitle}>Type</div>
        {["Polo", "Hoodie", "Basic"].map((type) => (
          <div key={type}>
            <input
              type="checkbox"
              name="type"
              value={type}
              onChange={handleChange}
              style={checkboxStyle}
            />
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;

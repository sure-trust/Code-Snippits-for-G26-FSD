import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ cartCount, onSearch, onFilter }) {
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.elements.search.value.trim();
    onSearch(term);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    onFilter(name, type === 'checkbox' ? checked : value);
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#e3eaf4',
      color: '#333',
      padding: '1rem 2rem',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
      flexWrap: 'wrap'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: '#333', textDecoration: 'none' }}>
          TeeRex Store
        </Link>
      </div>

      <form onSubmit={handleSearch} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        margin: '0.5rem 0'
      }}>
        <input
          name="search"
          placeholder="Search for products..."
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '200px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            backgroundColor: '#f2f4f8',
            color: '#333',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </form>

      <div>
        <Link to="/cart" style={{
          backgroundColor: '#e0e7ef',
          color: '#333',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: '500',
          border: '1px solid #ccc'
        }}>
          Cart 🛒 ({cartCount})
        </Link>
      </div>

      {location.pathname === '/' && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginLeft: '2rem',
          flexWrap: 'wrap'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <input type="checkbox" name="filterMen" onChange={handleFilterChange} />
            Men
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <input type="checkbox" name="filterWomen" onChange={handleFilterChange} />
            Women
          </label>
        </div>
      )}
    </nav>
  );
}

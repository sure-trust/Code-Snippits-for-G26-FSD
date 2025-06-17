import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1SAGC9FhMl7gImycygb90vtcmFqvn9ET4A&s"
            alt="BEWAKOOF"
            className="navbar-logo"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/mobile-covers">Mobile Covers</Link>
        </li>
      </ul>
      <div className="nav-icons">
        <input type="text" placeholder="Search..." />
        <span>
          <button
            onClick={() => alert('You have already signed-in')}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-user"></i>
          </button>
        </span>
        <span>
          <button
            onClick={() => alert('oo ooh!! Your cart is empty..')}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </span>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react';
import './Navbar.css';
import Image from '../assets/bewakoof.png'
import { IoBag } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <div className='box2'>
      <div className='subbox'>
      <img style={{height:'30px',width:'170px'}} src={Image} alt='bewakoof'></img>
      <h5 style={{fontSize:'18px' ,fontWeight:'500'}}>MEN</h5>
      <h5 style={{fontSize:'18px' ,fontWeight:'500'}}>WOMEN</h5>
      <h5 style={{fontSize:'18px' ,fontWeight:'500'}}>MOBILE COVERS</h5>
      </div>
     <div className='subbox2'>
        <div className='searchbox'>
      <button className="search__button">
          <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </button>
        <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search by products"
        />
        </div>
   
      </div>
      <h5 style={{fontSize:'18px' ,fontWeight:'500'}}>LOGIN</h5>
      <IoBag />
      <FaHeart />
     
      </div>
   
    </div>
    <hr/>
    </>
  
  );
};

export default Navbar;

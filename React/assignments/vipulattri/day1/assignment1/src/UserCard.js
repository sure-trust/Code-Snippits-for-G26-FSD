import React from "react";
import "./UserCard.css"; // Import CSS file for styling

function UserCard() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/028/794/706/small_2x/cartoon-cute-school-boy-photo.jpg"
          alt="Vipul"
          style={{ width: "100%" }}
        />
        <h1>Vipul Attri</h1>
        <p className="title">B.Tech CSE 3rd Year</p>
        <p>Himachal Pradesh Technical University</p>
        <div className="social-icons">
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
        </div>
        <p>
          <button>Contact Me</button>
        </p>
      </div>
    </div>
  );
}

export default UserCard;

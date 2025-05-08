import React, { useState } from "react";
import axios from "axios";
import "./FacebookRegister.css";

const FacebookRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      surname,
      email,
      password,
      dob,
      gender,
    };

    try {
    
      await axios.post("http://localhost:3000/users", newUser);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Create a new account</h2>

        <div className="register-row">
          <input
            type="text"
            placeholder="First name"
            className="register-input half"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Surname"
            className="register-input half"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Mobile number or email address"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="New password"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="register-label">Date of birth</label>
        <input
          type="date"
          className="register-input"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label className="register-label">Gender</label>
        <div className="register-gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Custom"
              onChange={(e) => setGender(e.target.value)}
            />
            Custom
          </label>
        </div>

        <button type="submit" className="register-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FacebookRegister;

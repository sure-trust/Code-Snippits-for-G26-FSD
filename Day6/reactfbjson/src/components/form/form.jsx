import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    birthmnt: "Jan",
    birthday: "1",
    birthyear: "2000",
    gender: "",
    contact: "",
    passwrd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const Data = {
      fname: formData.fname,
      lname: formData.lname,
      birthday: {
        month: formData.birthmnt,
        day: formData.birthday,
        year: formData.birthyear,
      },
      gender: formData.gender,
      contact: formData.contact,
      passwrd: formData.passwrd,
    };
    fetch("http://localhost:3001/tests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Form submitted: ", data);
      });
  };

  return (
    <div className="form">
      <h1>facebook</h1>
      <h2>Create a new account</h2>
      <p>It's quick and easy.</p>
      <input
        name="fname"
        placeholder="First Name"
        value={formData.fname}
        onChange={handleChange}
      />
      <input
        name="lname"
        placeholder="Last Name"
        value={formData.lname}
        onChange={handleChange}
      />
      <label>Birthday</label>
      <select
        name="birthmnt"
        value={formData.birthmnt}
        onChange={handleChange}
      >
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select name="birthday" value={formData.birthday} onChange={handleChange}>
        {[...Array(31)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <select
        name="birthyear"
        value={formData.birthyear}
        onChange={handleChange}
      >
        {[...Array(100)].map((_, i) => {
          const year = 2025 - i;
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>

      <label>Gender</label>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="custom"
            checked={formData.gender === "custom"}
            onChange={handleChange}
          />
          custom
        </label>
      </div>

      <input
        type="tel"
        name="contact"
        placeholder="Mobile Number"
        value={formData.contact}
        onChange={handleChange}
      />

      <input
        type="password"
        name="passwrd"
        placeholder="New password"
        value={formData.passwrd}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default Form;

import React from "react";
import "./form.css";
import { useState } from "react";

function Form() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [birthmnt, setbirthmnt] = useState("Jan");
  const [birthday, setbirthday] = useState("1");
  const [birthyear, setbirthyear] = useState("2000");
  const [gender, setgender] = useState("");
  const [contact, setcontact] = useState("");
  const [passwrd, setpasswrd] = useState("");

  const handleSubmit = () => {
    const Data = {
        fname,
      lname,
      birthday: {
        month: birthmnt,
        day: birthday,
        year: birthyear,
      },
      gender: gender,
      contact: contact,
      passwrd: passwrd,
    };
    fetch("http://localhost:3001/tests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((res) =>{
            return res.json()
        })
      .then((data) => {
        console.log("Form submitted: ", data);
      })
  };
  return (
    <div className="form">
      <h1>facebook</h1>
      <h2>Create a new account</h2>
      <p>It's quick and easy.</p>
      <input
        placeholder="First Name"
        value={fname}
        onChange={(e) => {
          setfName(e.target.value);
        }}
      />
      <input
        placeholder="last Name"
        value={lname}
        onChange={(e) => {
          setlName(e.target.value);
        }}
      />
      <label>Birthday</label>
      <select value={birthmnt} onChange={(e) => setbirthmnt(e.target.value)}>
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
      <select value={birthday} onChange={(e) => setbirthday(e.target.value)}>
        {[...Array(31)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <select value={birthyear} onChange={(e) => setbirthyear(e.target.value)}>
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
            onChange={(e) => setgender(e.target.value)}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setgender(e.target.value)}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="custom"
            onChange={(e) => setgender(e.target.value)}
          />
          custom
        </label>
      </div>

      <input
        type="tel"
        placeholder="Mobile Number"
        value={contact}
        onChange={(e) => setcontact(e.target.value)}
      />

      <input
        type="password"
        placeholder="New password"
        value={passwrd}
        onChange={(e) => setpasswrd(e.target.value)}
      />
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}
export default Form;

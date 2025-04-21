import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [days, setDays] = useState([]);
  const [years, setYears] = useState([]);

  
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const dayArr = [];
    for (let i = 1; i <= 31; i++) {
      dayArr.push(i);
    }
    setDays(dayArr);

    const currentYear = new Date().getFullYear();
    const yearArr = [];
    for (let i = currentYear; i >= 1905; i--) {
      yearArr.push(i);
    }
    setYears(yearArr);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { firstName, surname, email, password });
    alert("Form submitted successfully!");
  };

  return (
    <div className="facebook-signup">
      <div className="facebook-name">facebook</div>
      <div className="container">
        <h1>Create a new account</h1>
        <p>It's quick and easy.</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="details">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <label>Date of birth</label>
          <div className="dob">
            <select required>
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select required>
              <option value="">Month</option>
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>Apr</option>
              <option>May</option>
              <option>Jun</option>
              <option>Jul</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </select>
            <select required>
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <label style={{ marginBottom: "10px" }}>Gender</label>
          <div className="gender">
            <div className="options">
              <label>
                Female
                <input type="radio" name="gender" value="Female" required />
              </label>
            </div>
            <div className="options">
              <label>
                Male
                <input type="radio" name="gender" value="Male" required />
              </label>
            </div>
            <div className="options">
              <label>
                Custom
                <input type="radio" name="gender" value="Custom" required />
              </label>
            </div>
          </div>
          <input
            type="email"
            placeholder="Mobile number or email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="info">
            People who use our service may have uploaded your contact
            information to Facebook.{" "}
            <a href="https://www.facebook.com/help/637205020878504">
              Learn more
            </a>
            .
          </div>
          <div className="info">
            By clicking Sign Up, you agree to our{" "}
            <a href="https://www.facebook.com/legal/terms/update">Terms</a>,{" "}
            <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
              Cookies Policy
            </a>
            . You may receive SMS notifications from us and can opt out at any
            time.
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;

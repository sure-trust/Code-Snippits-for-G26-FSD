import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h1 className="facebook-title">facebook</h1>
      <div className="signup-box">
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
        <form>
          <div className="name-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Surname" />
          </div>
          
          <div className="dateofbirth">Date of Birth</div>
          <input type="date" />
          <div className="gender">Gender</div>
          <div className="gender-options">
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Custom</label>
          </div>
          <input type="text" placeholder="Mobile number or email address" />
          <input type="password" placeholder="New password" />

          <p className="para">People who use our service may have uploaded your contact information to Facebook.<a href="#">Learn more.</a></p>
          <br/>
          <p className="para1">By clicking Sign Up, you agree to our<a href="#">Terms,Privacy  Policy</a> and <a href="#">Cookies Policy</a>You may receive SMS notifications from us and can opt out at any time.</p>


          <button type="submit" className="signup-btn">Sign Up</button>
          <p className="login-link">
            <a href="#">Already have an account?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

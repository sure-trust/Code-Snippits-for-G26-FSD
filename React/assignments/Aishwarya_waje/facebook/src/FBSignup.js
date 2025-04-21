import { useState } from 'react';
import './FBSignup.css';

function FBSignup() {
  const [userData, updateData] = useState({
    firstName: '',
    surname: '',
    Bdate: '',
    Bmonth: '',
    Byear: '',
    Gender: '',
    email: '',
    password: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    updateData({
      ...userData,
      [name]: value,
    });
    console.log(`${name} changed to: ${value}`);
  };

  const FormSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', userData);
    updateData({
      firstName: '',
      surname: '',
      Bdate: '',
      Bmonth: '',
      Byear: '',
      Gender: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="fb-container">
      <h1 className="fb-heading">facebook</h1>
      <form className="fb-card" onSubmit={FormSubmit}>
        <h2 style={{ textAlign: 'center' }}>Create a new account</h2>
        <p style={{ textAlign: 'center', fontSize: '14px' }}>It's quick and easy.</p>
        <hr />

        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="Fb-input"
          value={userData.firstName}
          onChange={onChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="Fb-input"
          value={userData.surname}
          onChange={onChange}
        />

        <p style={{ fontSize: '14px' }}>Date of birth</p>
        <input
          name="Bdate"
          className="fb-input"
          placeholder="DD"
          value={userData.Bdate}
          onChange={onChange}
        />
        <input
          name="Bmonth"
          className="fb-input"
          placeholder="MM"
          value={userData.Bmonth}
          onChange={onChange}
        />
        <input
          name="Byear"
          className="fb-input"
          placeholder="YYYY"
          value={userData.Byear}
          onChange={onChange}
        />

        <p style={{ fontSize: '14px' }}>Gender</p>
        <label className="fb-label">
          <input
            type="radio"
            name="Gender"
            value="male"
            checked={userData.Gender === 'male'}
            onChange={onChange}
            style={{ marginRight: '8px' }}
          />
          Male
        </label>

        <label className="fb-label">
          <input
            type="radio"
            name="Gender"
            value="female"
            checked={userData.Gender === 'female'}
            onChange={onChange}
            style={{ marginRight: '8px' }}
          />
          Female
        </label>

        <label className="fb-label">
          <input
            type="radio"
            name="Gender"
            value="other"
            checked={userData.Gender === 'other'}
            onChange={onChange}
            style={{ marginRight: '8px' }}
          />
          Other
        </label>

        <input
          type="text"
          name="email"
          placeholder="Mobile number or email address"
          className="fb-details"
          value={userData.email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="New password"
          className="fb-details"
          value={userData.password}
          onChange={onChange}
        />

        <button type="submit" className="fb-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FBSignup;

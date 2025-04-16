import React, { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="form-container">
      <h2>Contact us</h2>
      <form
        id="formclass"
        onSubmit={(e) => {
          e.preventDefault();
          setShowMessage(true);
          e.target.reset();
          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <button type="submit">Submit</button>
      </form>
      {showMessage && (
        <p className="messageclass" id="Message">
          Form submitted successfully!
        </p>
      )}
    </div>
  );
}

export default App;

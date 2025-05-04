import React, { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * chars.length);
      result += chars[randIndex];
    }
    setPassword(result);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Password Generator 🔐</h2>

      <div>
        <label>
          Password Length:
          <input
            type="number"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            style={{ marginLeft: "10px", width: "50px" }}
          />
        </label>
      </div>

      <div>
        <button onClick={generatePassword}>Generate</button>
      </div>

      <h3 style={{ marginTop: "1rem", color: "green" }}>{password}</h3>
    </div>
  );
}

export default App;

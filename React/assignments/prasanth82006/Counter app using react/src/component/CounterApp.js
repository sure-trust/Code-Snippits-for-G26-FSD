import React, { useState } from "react";

const Counterapp = () => {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
      />
      <div>
        <h1 style={{ color: "black", textAlign: "center" }}>Counter App</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            gap: "30px",
          }}
        >
          <span
            className="material-symbols-outlined"
            onClick={Decrement}
            style={{
              cursor: "pointer",
              fontSize: "48px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            remove
          </span>

          <p style={{ fontSize: "32px", margin: "0" }}>{count}</p>

          <span
            className="material-symbols-outlined"
            onClick={Increment}
            style={{
              cursor: "pointer",
              fontSize: "48px",
              border: "1px solid black",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            add
          </span>
        </div>
      </div>
    </>
  );
};

export default Counterapp;

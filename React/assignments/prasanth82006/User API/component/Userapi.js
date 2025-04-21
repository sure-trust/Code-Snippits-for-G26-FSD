import React, { useEffect, useState } from "react";

const Userapi = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);

  const IncreaseFunc = (e) => {
    e.preventDefault();
    setCount(count+1);
  };

  const DecreaseFunc = (e) => {
    e.preventDefault();
    setCount((count > 1) ? count - 1 : 1);
  };

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${count}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      });
  }, [count]);

  return (
    <div className="container">
      <div className="header">
        <h1>Single User API</h1>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          min={1}
        />
      </div>

      <div className="buttons">
        <button onClick={IncreaseFunc}>Increase</button>
        <button onClick={DecreaseFunc}>Decrease</button>
      </div>

      <div className="container2">
        {user ? (
          <>
            <h1>User ID: {user.id}</h1>
            <img src={user.avatar} alt="User Avatar" />
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <p>Email: {user.email}</p>
          </>
        ) : (
          <p>No user found for ID: {count}</p>
        )}
      </div>
    </div>
  );
};

export default Userapi;

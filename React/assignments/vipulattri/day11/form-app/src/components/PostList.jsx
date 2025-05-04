import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the JSON Server
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.firstName} {user.surname}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

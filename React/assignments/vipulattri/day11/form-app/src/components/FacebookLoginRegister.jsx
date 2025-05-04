import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios using npm install axios

const FacebookLoginRegister = () => {
  // Registration States
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  
  // Login States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null); // Store logged-in user

  // Post creation states
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([]);

  // Registration and Login toggling state
  const [isLogin, setIsLogin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is logged in

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    setPosts(response.data);
  };

  const handleSubmitRegistration = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      surname,
      email,
      password,
      dob,
      gender,
    };
    try {
      await axios.post("http://localhost:5000/users", data);
      alert("Registration successful!");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { email: loginEmail, password: loginPassword },
      });
      if (response.data.length > 0) {
        setUser(response.data[0]);
        setIsAuthenticated(true); // Simulate successful login
        alert("Login successful!");
      } else {
        alert("Invalid credentials!");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (newPost.trim() === "") return; // Don't allow empty posts
    const newPostData = {
      user: user.firstName,
      content: newPost,
      comments: [],
    };
    try {
      await axios.post("http://localhost:5000/posts", newPostData);
      setNewPost(""); // Clear the input after submitting
      fetchPosts(); // Re-fetch the posts
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  const handleCommentSubmit = async (postId, comment) => {
    if (comment.trim() === "") return; // Don't allow empty comments
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    );
    try {
      await axios.put(`http://localhost:5000/posts/${postId}`, {
        comments: updatedPosts.find((post) => post.id === postId).comments,
      });
      setPosts(updatedPosts); // Update the state with new comments
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  return (
    <div className="login-register-container">
      {/* Login/Registration toggle */}
      <div className="form-toggle">
        <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>
          Sign Up
        </button>
      </div>

      {/* Login Form */}
      {isLogin ? (
        <form onSubmit={handleSubmitLogin}>
          <h2>Log in to Facebook</h2>
          <input
            type="email"
            placeholder="Email address"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      ) : (
        // Registration Form
        <form onSubmit={handleSubmitRegistration}>
          <h2>Create a new account</h2>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <div>
            <label>Gender</label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
            />
            <label>Male</label>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
            />
            <label>Female</label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}

      {/* Posts Section */}
      {isAuthenticated && (
        <div className="posts-section">
          <h2>Posts</h2>
          <form onSubmit={handlePostSubmit}>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
            />
            <button type="submit">Post</button>
          </form>

          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <h3>{post.user}</h3>
                <p>{post.content}</p>
                <div>
                  <input
                    type="text"
                    placeholder="Add a comment"
                    onBlur={(e) => handleCommentSubmit(post.id, e.target.value)}
                  />
                  {post.comments.map((comment, idx) => (
                    <p key={idx}>{comment}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FacebookLoginRegister;

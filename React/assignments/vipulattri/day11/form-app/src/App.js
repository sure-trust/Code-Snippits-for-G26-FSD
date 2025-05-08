import React from 'react';
import FacebookRegister from './components/FacebookRegister'; // Import the registration form
import PostList from './components/PostList'; // Import the post list to display registered users

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">My Facebook Clone</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4">
        <FacebookRegister /> {/* Registration Form */}
        <PostList /> {/* List of Registered Users */}
      </div>
    </div>
  );
}

export default App;

/**
 * @fileoverview Main App component for file upload functionality
 * @requires react
 * @requires axios
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

/**
 * Base URL for the backend API
 * @constant {string}
 */
const API_URL = 'http://localhost:5001/api';

/**
 * Main App component that handles file upload functionality
 * @component
 * @returns {JSX.Element} Rendered component
 */
function App() {
  /**
   * State for the selected file
   * @type {[File|null, function]} selectedFile - The currently selected file
   */
  const [selectedFile, setSelectedFile] = useState(null);

  /**
   * State for displaying messages
   * @type {[string, function]} message - Success or info message
   */
  const [message, setMessage] = useState('');

  /**
   * State for error handling
   * @type {[string, function]} error - Error message
   */
  const [error, setError] = useState('');

  /**
   * State for loading status
   * @type {[boolean, function]} isLoading - Loading state during file upload
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Effect hook to test backend connection on component mount
   * Fetches greeting message from the backend
   */
  useEffect(() => {
    /**
     * Fetches hello message from backend
     * @async
     * @function fetchHello
     */
    const fetchHello = async () => {
      try {
        const response = await axios.get(`${API_URL}/hello`);
        setMessage(response.data.message);
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error:', err);
      }
    };

    fetchHello();
  }, []);

  /**
   * Handles file selection event
   * @param {React.ChangeEvent<HTMLInputElement>} event - File input change event
   */
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setError('');
      setMessage('');
    }
  };

  /**
   * Handles file upload to the backend
   * @async
   * @function handleUpload
   * @throws {Error} When file upload fails
   */
  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
      setSelectedFile(null);
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error || 'Error uploading file');
      } else {
        setError('Error uploading file');
      }
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>File Upload Demo</h1>
        
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

        <div className="upload-container">
          <input
            type="file"
            onChange={handleFileSelect}
            disabled={isLoading}
            className="file-input"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isLoading}
            className="upload-button"
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </div>

        {selectedFile && (
          <p className="selected-file">
            Selected file: {selectedFile.name}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import profileImage from "./img.jpg";

function App() {
  return (
    <>
      <div className="user-card">
        <img src={profileImage} alt="User Profile" className="profile-image" />
        <h2>P. Prasanth Kumar</h2>
        <p>Full Stack Web Development</p>
        <div className="contact-info">
          <a href="mailto:prasanthkumar905241@gmail.com">
            📧 prasanthkumar905241@gmail.com
          </a>
          <a href="tel:+1234567890">📞 +1 234 567 890</a>
          <p>🏠 Address: Old Judge Bangla Street, Nellore, Andhra Pradesh</p>
        </div>
      </div>
      <Connect />
    </>
  );
}

function Connect() {
  return (
    <div className="connect-container">
      <button className="connect-button">
        <a href="https://linktr.ee/imPrasanthkumar" target="_blank">
          Connect
        </a>
      </button>
    </div>
  );
}

export default App;

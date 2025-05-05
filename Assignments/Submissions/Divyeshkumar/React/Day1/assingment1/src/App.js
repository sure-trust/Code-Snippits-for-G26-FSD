import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile_pic">
        <img src={logo} alt="Profile" style={{ height: '100%', width: '100%', borderRadius: '2%' }} />
      </div>
      
      <div className="important_details">
        <div className="user_name">Divyesh Kumar</div>
        <div className="contact_info">0000000000</div>
      </div>
      
      <div className="about_me"> Pursuing Btech Computer Science and Engineering at Shobhit institute of engineering and Technology</div>
    </div>
  );
}

export default App;

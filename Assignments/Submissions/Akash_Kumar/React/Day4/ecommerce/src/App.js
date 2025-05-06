import './App.css';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import NewArrival from './Components/NewArrival';
import Trending from './Components/Trending';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <NewArrival/>
      <Trending/>
      <NewArrival/>
      <Footer/>
    </div>
  );
}

export default App;

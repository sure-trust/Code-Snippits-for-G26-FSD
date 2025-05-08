import './App.css';
import Head from './components/Head'
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';

import NewArrival from './components/NewArrival';

import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Head/>
      <Navbar/>
      <ImageSlider/>
      
      <NewArrival/>
      <Footer/>
    </div>
  );
}

export default App;
         









import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {Routes,Route} from 'react-router-dom';
import Models from './components/Models/Models';
import Download from './components/Download/Download.js';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/models' element={<Models/>}/>
      <Route path='/download' element={<Download/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

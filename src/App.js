import logo from './logo.svg';
import './App.css';
import Navbar2 from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Routes,Route,useLocation} from 'react-router-dom';
import Models from './components/Models/Models';
import Download from './components/Download/Download.js';
import { useEffect } from 'react';
import Login from './components/Login/Login.js';
import Signup from './components/Login/Signup.js';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div className="App">
     <Navbar2/>
     <ScrollToTop />
     <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/models' element={<Models/>}/>
      <Route path='/download' element={<Download/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

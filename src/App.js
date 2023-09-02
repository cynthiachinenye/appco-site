import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
         <Route path='/' exact Component={Home}/>
         <Route path ='services' exact Component ={Services}/>
          <Route path='about' exact Component= {About}/>
        </Routes>
       </Router>
       
    </div>
  );
}

export default App;

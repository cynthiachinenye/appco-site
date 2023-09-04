import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Footer from './Components/Footer';
import Expentise from './Pages/Expentise';
import Test from './Pages/Test';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
         <Route path='/' exact Component={Home}/>
         <Route path ='services' exact Component ={Services}/>
          <Route path='about' exact Component= {About}/>
          <Route path='expentise' exact Component= {Expentise}/>
          <Route path='test' exact Component = {Test}/>
          <Route path='contact' exact Component = {Contact}/>
        </Routes>
        <Footer/>
       </Router>
       
    </div>
  );
}

export default App;

import './App.css';
import {RouterBrowser as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
         <Route path='/' exact Component={}/>
        </Routes>
       </Router>
       
    </div>
  );
}

export default App;

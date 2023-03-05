import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import PatientAssess from './Pages/PatientAssess';


function App() {
  const [toggle, setToggle] = useState("pizza");
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Patient'element={<PatientAssess />} />

      </Routes>
    </Router>
  );
}

export default App;

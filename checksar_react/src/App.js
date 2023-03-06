import './Styles/App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import PatientAssess from './Pages/PatientAssess';
import Navbar2 from './Components/Navbar2'


function App() {
  const [items, setItems] = useState([]);

  const carryData = (data) =>{
    setItems(data);
  }
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Patient' element={<PatientAssess setter={carryData} data={items}/>} />

      </Routes>
    </Router>
  );
}

export default App;

import './Styles/App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import PatientAssess from './Pages/PatientAssess';
import Navbar2 from './Components/Navbar2'


function App() {
  const [patientItemState, setPatientItemState] = useState([]);
  const [patientItems, setPatientItems] = useState([]);

  const carryPatientData = (data, states) =>{
    setPatientItems(data);
    setPatientItemState(states);
  }

  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Patient' element={<PatientAssess setter={carryPatientData} data={patientItems} states={patientItemState}/>} />

      </Routes>
    </Router>
  );
}

export default App;

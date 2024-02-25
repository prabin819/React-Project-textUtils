import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React from 'react'
import { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const [mode, setMode] = useState('light');
  const toggleDarkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' aboutText='about-tu' darkmode={mode} toggleMode={toggleDarkMode} />
        <Alert alert={alert} />
        {/* <Alert alert={{msg:"this is an alert message",type:"success"}}/> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading='Enter the text to analyze' darkmode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

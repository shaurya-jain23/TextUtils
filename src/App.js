import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// import About from './Components/About';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = '#2c2d33';
      showAlert('Dark mode has been enabled', "success");
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing';
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils app Now!!';
      // },1500)
    }
    else{
      setmode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', "success");
      // document.title = 'TextUtils Home';
    }
  }
    

  return (
    <>
    {/* <div className="App">
    </div> */}
    <Router>
    <Navbar title = 'TextUtils' aboutText= 'About' mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading = 'TextUtils- modify your text here' mode = {mode} />}/>
      <Route exact path="/about" element={<About mode = {mode} style/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import {
  Route,
  Routes
} from "react-router-dom";
import Complaint from './components/Complaint';

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const Toggle = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = '#0c0d21';
      document.body.style.color = "white";
      document.title = 'RoadHealth - Dark Mode';
      showAlert("Dark Mode has been enabled", 'success')
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      document.title = 'RoadHealth - Light Mode';
      showAlert("Light Mode has been enabled", 'success');
    }
  }
  return (<>
     <div>
       <Navbar title="RoadHealth" mode={mode} toggle={Toggle} />
       <Alert alert={alert} />
      <Routes>
        <Route index element={<App />}>
        </Route>
        <Route path="/Login" element={<Login mode={mode} />}>
        </Route>
         <Route path="/Home" element={<Home/>}>
        </Route> 
         <Route path="/Complaint" element={<Complaint/>}>
        </Route>
        <Route path="/Signup" element={<Signup />}>

        </Route>
      </Routes>
    </div>
  </>
  );
}
export default App;

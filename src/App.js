import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {

  const [darkMode, setDarkMode] = useState("light")
  const [alertMessage, setAlertMessage] = useState(null)

  const setAlert = (message, type) => {
    setAlertMessage({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const changeMode = () => {
    if (darkMode === 'light') {
      setDarkMode("dark")
      document.body.style.backgroundColor = "#212529"
      setAlert("Switched to dark mode", "success")
    } else {
      setDarkMode("light")
      document.body.style.backgroundColor = "white"
      setAlert("Switched to light mode", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={changeMode} />
      <Alert alert={alertMessage} />

      <div className="container">

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<TextForm alert={setAlert} heading="Enter the Text to Analyse" mode={darkMode} />} />
        </Routes>

      </div>
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import NabBar from './Components/NabBar';
import Content from './Components/Content';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from "./Components/About";



function App() {
  const [mode, setmode] = useState('light')
  const [textbtn, setTextbtn] = useState('Enable Dark Mode')
  const [aleart, setAleart] = useState(null)

  const showAleart = (message, type) => {
    setAleart({
      message: message,
      type: type

    })

    setTimeout(() => {
      setAleart(null)
    }, 2000);
  }
  const togol = () => {
    if (mode === 'light') {
      setmode('dark')
      setTextbtn('Enable Light Mode')
      document.body.style.backgroundColor = '#181a3c';
      showAleart('Dark mode Enabled', 'success')
    }
    else {
      setmode('light')
      setTextbtn('Enable Dark Mode')
      document.body.style.backgroundColor = 'white';
      showAleart('Light mode Enabled', 'success')
    }
  }

  return (


    <>

      <NabBar logo={"T"} mode={mode} togol={togol} textbtn={textbtn} />
      <Alert aleart={aleart} />
      <Routes>
        <Route path="/" element={<Content mode={mode} showAleart={showAleart} />} />
        <Route path="/About" element={<About  mode={mode}/>} />
      </Routes>

    </>

  );
}

export default App;

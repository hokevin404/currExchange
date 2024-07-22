// Import Components
import Main from './pages/Main';
import NavBar from './components/NavBar/NavBar';

// Import modules
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurConvert from './components/CurConvert/CurConvert';

function App() {
  const [curr, setCurr] = useState({});

  // Async function to retrieve currency data from api
  async function getCurr() {
    axios
      .get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
      .then(res => {
        // console.log(res);
        // console.log(res.data)
        setCurr(res.data)
      })
      .catch(error => {
        console.error(error)
      });
  };

  // useEffect to run api call function at page load up 
  useEffect(() => {
    getCurr();
  }, []);


  return (
    <>
      <div className='appContainer'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/currency" element={<CurConvert curr={curr} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

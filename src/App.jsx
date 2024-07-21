// Import Components
import NavBar from './components/NavBar/NavBar';

// Import modules
import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import CurConvert from './components/CurConvert/CurConvert';

function App() {
  const [curr, setCurr] = useState({});

  async function getCurr() {
    try {
      const res = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
      const data = await res.data;
      // console.log(data);
      setCurr(data);

    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    getCurr();
  }, []);


  return (
    <>
      <NavBar />
      <CurConvert curr={curr}/>
    </>
  )
}

export default App

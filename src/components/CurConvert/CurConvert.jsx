// Import .css
import './curConvert.css';

// Import Components
import Selection from '../../pages/Selection';

// Import modules
import { useState, useEffect } from 'react';
import axios from 'axios';
// import axios from 'axios';

function CurConvert({curr}) {
    const [fromCurr, setFromCurr] = useState('');
    const [toCurr, setToCurr] = useState('');
    const [resData, setResData] = useState('');
    axios.defaults.baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

    function handleClick() {
    }

    useEffect(()=>{
        if(fromCurr && toCurr) {
            try {
                axios
                    .get(`/${fromCurr}.json`)
                    .then(res => {
                        setResData(res.data[fromCurr]);
                        console.log(resData);
                    })
                } catch (error) {
                console.error(error)
            }
        }

    },[fromCurr, toCurr])

    return (
        <div className='currContainer'>
            <Selection curr={curr} menu="fromCurr" setSelect={setFromCurr}/>
            <Selection curr={curr} menu="toCurr" setSelect={setToCurr}/>
            <button type='button' onClick={handleClick}> Convert</button>

            {resData && (
                <div>
                    <h2>{fromCurr.toLocaleUpperCase()}: {resData.fromCurr}  {resData[fromCurr]}</h2>
                    <h2>{toCurr.toLocaleUpperCase()} {resData[toCurr]}</h2>
                </div>
            )}
        </div>
    )
}

export default CurConvert
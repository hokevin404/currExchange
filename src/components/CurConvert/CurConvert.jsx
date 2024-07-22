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
    const [amount, setAmount] = useState('');
    axios.defaults.baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

    function fetchAPI() {
        if (fromCurr && toCurr && amount) {
            axios
                .get(`/${fromCurr}.json`)
                .then(res => {
                    // console.log(res.data)
                    const conversionRate = res.data[fromCurr][toCurr];
                    // console.log(conversionRate)
                    const convertedAmount = amount * conversionRate;
                    // console.log(convertedAmount);
                    setResData({
                        fromCurrency: fromCurr,
                        toCurrency: toCurr,
                        amount: amount,
                        convertedAmount: Number(convertedAmount.toFixed(2))
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    };

    const handleClick = () => {
        if(fromCurr && toCurr && amount)
            fetchAPI();
        else
            alert(`Please select currencies and enter the amount`)
    };

    return (
        <div className='appContainer'>
            <div className='currContainer'>
                <div className='selectContainer'>
                    <Selection curr={curr} menu="fromCurr" setSelect={setFromCurr} />
                    <Selection curr={curr} menu="toCurr" setSelect={setToCurr} />
                </div>
                <div className='inputContainer'>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
                </div>
                
                <button type='button' onClick={handleClick}> Convert </button>

                {resData && (
                    <div>
                        <h2>Conversion Details</h2>
                        <p>From: {resData.fromCurrency.toUpperCase()}</p>
                        <p>To: {resData.toCurrency.toUpperCase()}</p>
                        <p>Amount: {resData.amount}</p>
                        <p>Converted Amount: {resData.convertedAmount}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CurConvert;
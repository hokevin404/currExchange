// Import .css
import './curConvert.css';

// Import Components
import Selection from '../../pages/Selection';

// Import modules
import { useState } from 'react';
import axios from 'axios';
// import axios from 'axios';

function CurConvert({curr}) {
    // State to hold which currency user is converting from
    const [fromCurr, setFromCurr] = useState('');
    // State to hold which currency user is converting to
    const [toCurr, setToCurr] = useState('');
    // State to hold currency data which user is converting from
    const [resData, setResData] = useState('');
    // State to hold currency amount user wants to convert
    const [amount, setAmount] = useState('');
    // Axios base URL
    axios.defaults.baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;

    // API fetch function to retrieve conversion rate and conversion amount based on user currency selection 
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

                    // Set State to hold curreny converting from and to,
                    // the  amount to convert to,
                    // and the converted amount to two decimal points
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

    // Invoke API Fetch Function when user clicks button
    const handleClick = () => {
        // console.log(${fromCurr} ${toCurr} ${amount})
        if(fromCurr && toCurr && amount)
            fetchAPI();
        else
            alert(`Please select currencies and enter the amount`)
    };

    return (
        <div className='appContainer'>
            <div className='currContainer'>
                <div className='selectContainer'>
                    <span>Convert From:</span>
                    <Selection curr={curr} menu="fromCurr" setSelect={setFromCurr} />
                    <span>Convert To:</span>
                    <Selection curr={curr} menu="toCurr" setSelect={setToCurr} />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="amountInput">Enter amount:</label>
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
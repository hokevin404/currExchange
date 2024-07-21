// Import .css
import './curConvert.css';

// Import Components
import Selection from '../../pages/Selection';

// Import modules
import { useState } from 'react';
// import axios from 'axios';

function CurConvert({curr}) {
    const [fromCurr, setFromCurr] = useState('');
    const [toCurr, setToCurr] = useState('');

    // console.log(props)

    return (
        <div className='currContainer'>
            <Selection curr={curr} menu="fromCurr" setSelect={setFromCurr}/>
            <Selection curr={curr} menu="toCurr" setSelect={setToCurr}/>
            <button type='button' onClick={handleClick}> Convert</button>
        </div>
    )
}

export default CurConvert
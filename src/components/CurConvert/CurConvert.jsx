// Import .css
import './curConvert.css';

// Import Components
import Selection from '../../pages/Selection';

// Import modules
import { useState } from 'react';
// import axios from 'axios';

function CurConvert({curr}) {
    // const [curr, setCurr] = useState({});
    // const fromCurr = document.getElementById(`fromCurr`);
    // const toCurr = document.getElementById(`toCurr`);

    // Object.entries(props).forEach((curr) => {
    //     console.log(curr)
    // })

    // console.log(curr)

    // for(const [key, value] of Object.entries(curr)) {
    //     // console.log(`${key} ${value}`)
    //     if(value) {
    //         const option = document.createElement("option");
    //         option.setAttribute("value", key);
    //         const currName = document.createTextNode(value);
    //         option.appendChild(currName);
    //         fromCurr.appendChild(option)
    //     }
    // }



    // console.log(props)

    return (
        <div className='currContainer'>
            <Selection curr={curr} menu="fromCurr" />
            <Selection curr={curr} menu="toCurr" />
            {/* <select id='fromCurr'></select> */}
            {/* <select id='toCurr'></select> */}
            <input ></input>
        </div>
    )
}

export default CurConvert
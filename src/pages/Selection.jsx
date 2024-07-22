import { useState, useEffect } from "react";

// Function to create <select> element 
function Selection({ curr, menu, setSelect }) {
    // State to hold options for select element
    const [options, setOptions] = useState([]);

    // useEffect to update options of select element
    // dependancy array holds "curr" variable so useEffect is invoked when curr updates
    useEffect(() => {
        const newOptions = [];
        for (const [key, value] of Object.entries(curr)) {
            if (value) {
                newOptions.push(<option key={key} value={key}>{value}</option>);
            }
        }
        setOptions(newOptions);
    }, [curr]);

    return (
        <select id={menu} onChange={(e) => setSelect(e.target.value)}>
           {options}
        </select>
    );
}

export default Selection
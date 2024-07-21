import { useState, useEffect } from "react";

function Selection({ curr, menu, setSelect }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        // Update options whenever curr prop changes
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
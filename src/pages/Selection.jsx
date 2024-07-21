
function Selection({curr, menu}) {
    // console.log(menu)
    const selectID = document.getElementById(menu);

    function dropdown() {
        for(const [key, value] of Object.entries(curr)) {
            // console.log(`${key} ${value}`)
            if(value) {
                const option = document.createElement("option");
                option.setAttribute("value", key);
                const currName = document.createTextNode(value);
                option.appendChild(currName);
                selectID.appendChild(option)
            }
        }
    }

  return (
    <select id={menu}>
        {dropdown()}
    </select>
)
}

export default Selection
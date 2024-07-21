import { Link } from "react-router-dom"

function Main() {

  return (
    <div>
        <h1>Welcome to Curvert!</h1>
        <h3>Click start to begin</h3>
        
        <Link to="/currency"> 
            <button type="button">Start</button>
        </Link>
    </div>
  )
}

export default Main
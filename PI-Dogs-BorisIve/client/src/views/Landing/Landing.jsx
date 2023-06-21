import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = ()=>{
    return(
        <div>
            <h1>WELCOME TO MY DOGS PAGE</h1>

            
            <h2>░░░░░░▄█▄█░░░░░▄░░░░░░</h2> 
            <h2>░░░░██████░░░░░░█░░░░░</h2>
            <h2>░░░░░░███████████░░░░░</h2>
            <h2>▒▒▒▒▒▒█▀▀█▀▀██▀██▒▒▒▒▒</h2>
            <h2>▒▒▒▒▒▄█▒▄█▒▒▄█▒▄█▒▒▒▒▒</h2>
            
            <br />
            
            <NavLink to="/home">
                <button>ENTER</button>
            </NavLink>
        </div>
    )
}

export default Landing;
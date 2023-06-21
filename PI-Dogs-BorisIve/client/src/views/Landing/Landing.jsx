import { NavLink } from "react-router-dom";

const Landing = ()=>{
    return(
        <div>
            <h1>WELCOME TO MY DOGS PAGE</h1>
            
            <NavLink to="/home">
                <button>ENTER</button>
            </NavLink>
        </div>
    )
}

export default Landing;
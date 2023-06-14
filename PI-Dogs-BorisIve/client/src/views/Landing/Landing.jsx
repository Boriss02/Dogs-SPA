import { NavLink } from "react-router-dom";

const Landing = ()=>{
    return(
        <div>
            <h1>BIENVENIDO/A A MI PEQUEÑA PÁGINA DE PERROS</h1>
            
            <NavLink to="/home">
                <button>HOME</button>
            </NavLink>
        </div>
    )
}

export default Landing;
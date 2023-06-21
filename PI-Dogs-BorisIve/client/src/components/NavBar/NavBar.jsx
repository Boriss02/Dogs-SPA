import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    return(
        <div>
            <SearchBar/>
            <br />
            <NavLink to="/create">
                <button>CREATE DOG</button>
            </NavLink>
        </div>
    )
};

export default NavBar;
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNames } from "../../redux/actions";

const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handlerChange = (event)=>{
        setName(event.target.value)
    }

    const doSearch = (name)=>{
        dispatch(getNames(name))
    }

    return(
        <div>
            <input type='search' name="search" value={name} onChange={handlerChange} placeholder="Nombre de la raza a buscar" />
            <button onClick={()=>{doSearch(name)}}>BUSCAR</button>
        </div>
    )
}

export default SearchBar;
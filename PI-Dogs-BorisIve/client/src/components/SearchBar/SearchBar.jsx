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
            <input type='search' name="search" value={name} onChange={handlerChange} placeholder="Name to search" />
            <button onClick={()=>{doSearch(name)}}>SEARCH</button>
        </div>
    )
}

export default SearchBar;
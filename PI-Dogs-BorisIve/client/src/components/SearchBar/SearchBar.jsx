import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNames } from "../../redux/actions";
import axios from "axios";
const URL = "http://localhost:3001/";

const SearchBar = ()=>{
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const handlerChange = (event)=>{
        setName(event.target.value)
    }

    const doSearch = (name)=>{
        axios.get(`${URL}dogs?name=${name}`)
        .then(({data})=>dispatch(getNames(data)), setError(null))
        .catch(error=> setError(error.response.data))
    }

    return(
        <div>
            <input type='search' name="search" value={name} onChange={handlerChange} placeholder="Name to search" />
            <button onClick={()=>{doSearch(name)}}>SEARCH</button>
            <br />
            {error && <span>{error}</span>}
        </div>
    )
}

export default SearchBar;
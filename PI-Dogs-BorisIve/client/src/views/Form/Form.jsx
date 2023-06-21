import { useState } from "react";
import validation from "./validation";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Form.css"

const Form = ({allTemps})=>{
    const [form, setForm] = useState({
        name: "",
        height: "",
        weight: "",
        lifespan: "",
    });

    const [error, setError] = useState({});

    const [selected, setSelected] = useState([]);


    const handlerChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

        setError(validation({
            ...form,
            [event.target.name]: event.target.value
        }));
    };

    const handlerOption = (temp) => {
        if(selected.includes(temp)){
          setSelected(selected.filter(item=> item !== temp));
        } else if(selected.length < 10){
          setSelected([...selected, temp]);
        }
    };

    const handlerIndividual = (select)=>{
        if(selected.includes(select)){
            setSelected(selected.filter(item=> item !== select));
        }
    }
    
    const submitHandler = ()=>{
        axios.post("http://localhost:3001/dogs", {
            name: form.name,
            height: form.height,
            weight: form.weight,
            lifespan: form.lifespan,
            temperaments: selected
        })
        .then(response=> window.alert(response.data))
        .catch(error=> window.alert(error.response.data))
    };

    
    return(
        <div className="form-container">
            <NavLink to="/home">
                <button>BACK</button>
            </NavLink>
            <h2>DOG CREATION</h2>
            <h3>Please complete the fields below</h3>

            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder="Enter the name of the race"/>
                {error.name && <span>{error.name}</span>}
                <br/>

                <label htmlFor="height">Height: </label>
                <input type="text" name="height" value={form.height} onChange={handlerChange} placeholder="Example: 23 - 29"/>
                {error.height && <span>{error.height}</span>}
                <br/>

                <label htmlFor="weight">Weight: </label>
                <input type="text" name="weight" value={form.weight} onChange={handlerChange} placeholder="Example: 3 - 6"/>
                {error.weight && <span>{error.weight}</span>}
                <br/>

                <label htmlFor="lifespan">Life Span: </label>
                <input type="text" name="lifespan" value={form.lifespan} onChange={handlerChange} placeholder="Example: 10 - 12"/>
                {error.lifespan && <span>{error.lifespan}</span>}
                <br/>

                <label htmlFor="">Temperament: </label>
                <select multiple >
                    {
                        allTemps.map(temp=>{
                            return(
                                <option key={temp} value={temp} onClick={() => handlerOption(temp)} >
                                    {temp}
                                </option>
                            )
                        })
                    }
                </select>
                {!selected.length && <span>Must select at least one temperament</span>}
                {selected.length === 10 && <span>No more than 10 temperaments</span>}
                <br/>

                {
                    selected.map(select=>{
                        return(
                            <h4 key={select} onClick={()=> handlerIndividual(select)} >{select}</h4>
                        )
                    })
                }
                <br/>

                <button type="submit" disabled={form.name === "" || form.height === "" || form.weight === "" || form.lifespan === "" || !selected.length || error.name || error.height || error.weight || error.lifespan}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;
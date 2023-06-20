import { useState } from "react";
import validation from "./validation";

const Form = ({allTemps})=>{
    const [form, setForm] = useState({
        name: "",
        height: "",
        weight: "",
        lifespan: "",
    });

    const [error, setError] = useState({});


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


    return(
        <div>
            <h2>DOG CREATION</h2>
            <h3>Please complete the fields below</h3>

            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder="Enter the name of the race"/>
                {error.name && <span>{error.name}</span>}
                <br/>

                <label htmlFor="height">Height: </label>
                <input type="text" name="height" value={form.height} onChange={handlerChange} placeholder="Example: 23 - 29"/>
                {error.height && <span>{error.height}</span>}

                <label htmlFor="weight">Weight: </label>
                <input type="text" name="weight" value={form.weight} onChange={handlerChange} placeholder="Example: 3 - 6"/>
                {error.weight && <span>{error.weight}</span>}
                <br/>

                <label htmlFor="lifespan">Life Span: </label>
                <input type="text" name="lifespan" value={form.lifespan} onChange={handlerChange} placeholder="Example: 10 - 12"/>
                {error.lifespan && <span>{error.lifespan}</span>}

                <label htmlFor="">Temperament: </label>
                <br/>

                <button type="submit" disabled={form.name === "" || form.height === "" || form.weight === "" || form.lifespan === "" || error.name || error.height || error.weight || error.lifespan}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;
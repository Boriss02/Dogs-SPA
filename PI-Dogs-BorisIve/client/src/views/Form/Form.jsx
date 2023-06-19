import { useState } from "react";

const Form = ({allTemps})=>{
    const [form, setForm] = useState({
        name: "",
        height: "",
        weight: "",
        lifespan: "",
    });

    const handlerChange = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    return(
        <div>
            <h2>DOG CREATION ^^</h2>
            <h3>Please complete the fields below</h3>

            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder="Enter the name of the race"/>
                <br/>

                <label htmlFor="height">Height: </label>
                <input type="text" name="height" value={form.height} onChange={handlerChange} placeholder="Enter the height in cm"/>

                <label htmlFor="weight">Weight: </label>
                <input type="text" name="weight" value={form.weight} onChange={handlerChange} placeholder="Enter the weight in Kg"/>
                <br/>

                <label htmlFor="lifespan">Life Span: </label>
                <input type="text" name="lifespan" value={form.lifespan} onChange={handlerChange} placeholder="Enter the life span"/>

                <label htmlFor="">Temperament: </label>
                <br/>

                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default Form;
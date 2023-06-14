import { useState } from "react";

const Form = ()=>{
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
            <h2>CREACIÓN DE PERRO ^^</h2>
            <h3>Por favor complete los campos a continuación</h3>

            <form>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={form.name} onChange={handlerChange} placeholder="Ingrese el nombre de la raza"/>
                <br/>

                <label htmlFor="height">Height: </label>
                <input type="text" name="height" value={form.height} onChange={handlerChange} placeholder="Ingrese la altura en cm"/>

                <label htmlFor="weight">Weight: </label>
                <input type="text" name="weight" value={form.weight} onChange={handlerChange} placeholder="Ingrese el peso en Kg"/>
                <br/>

                <label htmlFor="lifespan">Life Span: </label>
                <input type="text" name="lifespan" value={form.lifespan} onChange={handlerChange} placeholder="Ingrese los años de vida"/>

                <label htmlFor="">Temperament: </label>
                <br/>

                <button>ENVIAR</button>
            </form>
        </div>
    )
}

export default Form;
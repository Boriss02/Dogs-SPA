import Card from "../Card/Card";
import { useEffect } from "react";

const AllCards = ({eight, page, nextHandler, prevHandler, allTemps, handlerTemps, handlerPlace, handlerABC, handlerWeight, filteredDogs, setBeta})=>{
    useEffect(()=>{
        setBeta([...filteredDogs])
    }, [filteredDogs]);

    return(
        <div>
            <select >

            </select>
            

            <select onChange={(event)=>{handlerPlace(event)}} >
                <option value="API">API</option>
                <option value="DataBase">DataBase</option>
            </select>
            

            <select onChange={(event)=>{handlerABC(event)}} >
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            

            <select onChange={(event)=>{handlerWeight(event)}} >
                <option value="Heavy-Light">Heavy-Light</option>
                <option value="Light-Heavy">Light-Heavy</option>
            </select>

            {
                eight.map((dog)=>{
                    console.log(dog.id);
                    return(
                        <Card
                            key={dog.id}
                            id={dog.id}
                            image={dog.image}
                            name={dog.name}
                            temperament={dog.temperament}
                            weight={dog.weight}
                        />
                    )
                })
            }

            <button onClick={prevHandler} disabled={page === 1} >PREV</button>
            <h2>{page}</h2>
            <button onClick={nextHandler} disabled={eight.length < 8} >NEXT</button>
        </div>
    )
}

export default AllCards;
import Card from "../Card/Card";
import { useEffect } from "react";
import "./AllCards.css";

const AllCards = ({eight, page, nextHandler, prevHandler, allTemps, handlerTemps, handlerPlace, handlerABC, handlerWeight, filteredDogs, setBeta, setPage})=>{
    useEffect(()=>{
        if(filteredDogs.length){
            setBeta([...filteredDogs]);
            setPage(1);
        }
    }, [filteredDogs, setBeta, setPage]);

    return(
        <div>
            <div>
                <div>
                    <span>Temperament: </span>
                    <select onChange={(event)=>{handlerTemps(event)}} >
                        <option value="Default">-</option>
                        {
                            allTemps.map(temp=>{
                                return(
                                    <option key={temp} value={temp}>
                                        {temp}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                
                <div>
                    <span>Place: </span>
                    <select onChange={(event)=>{handlerPlace(event)}} >
                        <option value="Default">-</option>
                        <option value="API">API</option>
                        <option value="DataBase">DataBase</option>
                    </select>
                </div>
                
                <div>
                    <span>Alphabetical order: </span>
                    <select onChange={(event)=>{handlerABC(event)}} >
                        <option value="Default">-</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
                
                <div>
                    <span>Weight: </span>
                    <select onChange={(event)=>{handlerWeight(event)}} >
                        <option value="Default">-</option>
                        <option value="Light-Heavy">Light-Heavy</option>
                        <option value="Heavy-Light">Heavy-Light</option>
                    </select>
                </div>
            </div>
            
            <br />

            <div className="card-container">
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
            </div>

            <button onClick={prevHandler} disabled={page === 1} >PREV</button>
            <h2>{page}</h2>
            <button onClick={nextHandler} disabled={eight.length < 8} >NEXT</button>
        </div>
    )
}

export default AllCards;
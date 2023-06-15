import Card from "../Card/Card";
import { getDogs } from "../../redux/actions";
import {useDispatch} from "react-redux";
import { useEffect } from "react";

const AllCards = ({allDogs})=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDogs())
    }, [dispatch])
    
    return(
        <div>
            {
                allDogs.map((dog)=>{
                    console.log(dog.name);
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
    )
}

export default AllCards;
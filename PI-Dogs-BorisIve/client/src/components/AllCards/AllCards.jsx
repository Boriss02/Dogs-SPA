import Card from "../Card/Card";
import { getDogs } from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";

const AllCards = ()=>{
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.allDogs)

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
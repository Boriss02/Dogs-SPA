import {Link} from "react-router-dom";

const Card = ({key, id, image, name, temperament, weight})=>{
    return(
        <div>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} />
                <h2>Name: {name}</h2>
                <h2>Temperaments: {temperament}</h2>
                <h2>Weight: {weight} Kg</h2>
            </Link>
        </div>
    )
}

export default Card;
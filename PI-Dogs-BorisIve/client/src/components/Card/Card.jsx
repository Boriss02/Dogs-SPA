import {Link} from "react-router-dom";

const Card = ({key, id, image, name, temperament, weight})=>{
    return(
        <div>
            <Link to={`/detail/${id}`}>
                {image && <img src={image} alt={name} />}
                {name && <h2>Name: {name}</h2>}
            </Link>
                {temperament && <h2>Temperaments: {temperament}</h2>}
                {weight && <h2>Weight: {weight} Kg</h2>}
        </div>
    )
}

export default Card;
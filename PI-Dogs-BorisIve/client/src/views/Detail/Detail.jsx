import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const URL = "http://localhost:3001/";

const Detail = ()=>{
    const {id} = useParams();
    const [detail, setDetail] = useState({})

    useEffect(()=>{
        axios.get(`${URL}dogs/${id}`)
        .then(({data})=>{
            if(data.id){
                setDetail(data)
            }
        })
        .catch(error=> window.alert(error.response.data))
        return setDetail({});
    }, [id])

    return(
        <div>
            {detail.id && <h2>ID: {detail.id}</h2>}
            {detail.image && <img src={detail.image} alt={detail.name} />}
            {detail.name && <h2>NAME: {detail.name}</h2>}
            {detail.height && <h2>HEIGHT: {detail.height} cm</h2>}
            {detail.weight && <h2>WEIGHT: {detail.weight} Kg</h2>}
            {detail.temperament && <h2>TEMPERAMENT: {detail.temperament}</h2>}
            {detail.lifespan && <h2>LIFE SPAN: {detail.lifespan}</h2>}
        </div>
    )
}

export default Detail;
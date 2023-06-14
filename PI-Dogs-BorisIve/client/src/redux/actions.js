import axios from "axios";
import { GET_DOGS } from "./action-types";
const URL = "http://localhost:3001/";

export const getDogs = ()=>{
    return async (dispatch)=>{
        const response = await axios.get(`${URL}dogs`)
        dispatch({type: GET_DOGS, payload: response.data})
    }
};
import axios from "axios";
import { GET_DOGS, GET_NAMES } from "./action-types";
const URL = "http://localhost:3001/";

export const getDogs = ()=>{
    return async (dispatch)=>{
        const response = await axios.get(`${URL}dogs`)
        dispatch({type: GET_DOGS, payload: response.data})
    }
};

export const getNames = (name)=>{
    return async (dispatch)=>{
        const response = await axios.get(`${URL}dogs?name=${name}`)
        dispatch({type: GET_NAMES, payload: response.data})
    }
}
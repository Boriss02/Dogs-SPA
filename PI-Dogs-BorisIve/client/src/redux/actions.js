import axios from "axios";
import { GET_DOGS, GET_NAMES, GET_TEMPS, FILT_TEMPS, FILT_PLACE, FILT_ABC, FILT_WEIGHT } from "./action-types";
const URL = "http://localhost:3001/";

export const getDogs = ()=>{
    return async (dispatch)=>{
        const response = await axios.get(`${URL}dogs`)
        dispatch({type: GET_DOGS, payload: response.data})
    }
};

export const getNames = (data)=>{
    return {type: GET_NAMES, payload: data};
};

export const getTemps = ()=>{
    return async (dispatch)=>{
        const response = await axios.get(`${URL}temperaments`)
        dispatch({type: GET_TEMPS, payload: response.data})
    }
};


// FILTROS ---------------------------------------------------------
export const filtTemps = (temp)=>{
    return {type: FILT_TEMPS, payload: temp}
};

export const filtPlace = (place)=>{
    return {type: FILT_PLACE, payload: place};
};

export const filtABC = (abc)=>{
    return {type: FILT_ABC, payload: abc};
};

export const filtWeight = (weight)=>{
    return {type: FILT_WEIGHT, payload: weight};
};
// -----------------------------------------------------------------
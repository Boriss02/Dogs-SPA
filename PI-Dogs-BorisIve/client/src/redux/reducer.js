import { GET_DOGS, GET_NAMES } from "./action-types";

const initialState = {
    allDogs: [],
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                allDogs: action.payload
            }
        case GET_NAMES:
            return{
                ...state,
                allDogs: action.payload
            }
        default:
            return{...state}
    }
}

export default reducer;
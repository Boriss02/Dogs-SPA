import { GET_DOGS, GET_NAMES, GET_TEMPS, FILT_TEMPS, FILT_PLACE, FILT_ABC, FILT_WEIGHT } from "./action-types";

const initialState = {
    allDogs: [],
    allTemps: [],
    filteredDogs: []
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                allDogs: action.payload
            };
//------------------------------------------------------------------------------------------
        case GET_NAMES:
            return{
                ...state,
                allDogs: action.payload
            };
//------------------------------------------------------------------------------------------
        case GET_TEMPS:
            return{
                ...state,
                allTemps: action.payload.map(temp=> temp.name).sort((a, b)=>{
                    const nameA = a.toUpperCase();
                    const nameB = b.toUpperCase();
    
                    if (nameA < nameB) return -1;
                    
                    if (nameA > nameB) return 1;
    
                    return 0;
                })
            };
//------------------------------------------------------------------------------------------
        case FILT_TEMPS:
            return{
                ...state,
                filteredDogs:
                    action.payload === "Default"
                    ? [...state.allDogs] :
                        state.allDogs?.filter(dog=> dog.temperament?.includes(action.payload))
            };
//------------------------------------------------------------------------------------------
        case FILT_PLACE:
            return{
                ...state,
                filteredDogs:
                    action.payload === "Default"
                    ? [...state.allDogs] :
                        action.payload === "API"
                        ? state.allDogs.filter(dog=> !isNaN(dog.id))
                        : state.allDogs.filter(dog=> isNaN(dog.id))
            };
//------------------------------------------------------------------------------------------
        case FILT_ABC:
            const alphabet = [...state.allDogs]

            const AtoZ = alphabet.sort((a, b)=>{
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();

                if (nameA < nameB) return -1;
                
                if (nameA > nameB) return 1;

                return 0;
            });

            const ZtoA = [...AtoZ].reverse();

            return{
                ...state,
                filteredDogs:
                    action.payload === "Default"
                    ? [...state.allDogs] :
                        action.payload === "A-Z" ? AtoZ : ZtoA,
            };
//------------------------------------------------------------------------------------------
        case FILT_WEIGHT:
            const weight = [...state.allDogs]

            const LtoH = weight.sort((a, b)=>{
                const weightA = a.weight.length > 3
                                    ? (Number(a.weight.split("-")[0]) + Number(a.weight.split("-")[1])) / 2
                                    : Number(a.weight)
                const weightB = b.weight.length > 3
                                    ? (Number(b.weight.split("-")[0]) + Number(b.weight.split("-")[1])) / 2
                                    : Number(b.weight)

                if (weightA < weightB) return -1;
                
                if (weightA > weightB) return 1;

                return 0;
            });

            const HToL = [...LtoH].reverse();

            return{
                ...state,
                filteredDogs:
                    action.payload === "Default"
                    ? [...state.allDogs] :
                        action.payload === "Light-Heavy" ? LtoH : HToL
            };
//------------------------------------------------------------------------------------------
        default:
            return{...state};
    }
}

export default reducer;
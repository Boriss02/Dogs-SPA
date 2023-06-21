import { GET_DOGS, GET_NAMES, GET_TEMPS, FILT_TEMPS, FILT_PLACE, FILT_ABC, FILT_WEIGHT } from "./action-types";

const initialState = {
    allDogs: [],
    allTemps: [],
    filteredDogs: [],
};

const reducer = (state=initialState, action)=>{
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                allDogs: action.payload
            };

        case GET_NAMES:
            return{
                ...state,
                allDogs: action.payload
            };

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

        case FILT_TEMPS:
            return{
                ...state
            };

        case FILT_PLACE:
            return{
                ...state,
                filteredDogs: 
                    action.payload === "API"
                        ? state.allDogs.filter(dog=> !isNaN(dog.id))
                        : state.allDogs.filter(dog=> isNaN(dog.id))
            };

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
                    action.payload === "A-Z" ? AtoZ : ZtoA,
            }

        default:
            return{...state};
    }
}

export default reducer;
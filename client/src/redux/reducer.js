import { UPDATE_RESPONSE, UPDATE_SEARCH } from "./actions";

const initialState = {
    response: [],
    search: ''
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case UPDATE_RESPONSE:
            return{
                ...state,
                response: payload.response,
                search: payload.search
            }
        default:
            return{
                ...state
            }
            break;
    }
}

export default rootReducer;
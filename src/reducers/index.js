import {combineReducers} from 'redux'
import {initialState} from "../store";
import {ADD_COUNTER, MIN_COUNTER, RESET_COUNTER} from "../actionTypes";

export function counterApp(state = initialState, action) {
    // switch (action.type) {     case ADD_COUNTER:         return         state + 1
    //     case MIN_COUNTER:         return state - 1     case RESET_COUNTER:
    //  return state     default:         return state }

    return state;
}

const rootReducer = combineReducers({counterApp})

export default rootReducer;
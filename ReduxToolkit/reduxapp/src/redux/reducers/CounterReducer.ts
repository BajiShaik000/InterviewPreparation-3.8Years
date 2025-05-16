import { CounterState } from "../types";
import { CounterActionTypes, INCREMENT, DECREMENT } from "../actionTypes";

const initialState: CounterState = {
    count: 0
}

const counterReducer = (state:CounterState = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state, count: state.count - 1
            }
        default:
            return state;

    }
}

export default counterReducer;
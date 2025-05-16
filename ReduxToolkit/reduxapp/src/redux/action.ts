import { INCREMENT, DECREMENT, CounterActionTypes } from "./actionTypes";

export const increment = (): CounterActionTypes => ({
    type: INCREMENT
});

export const decrement = (): CounterActionTypes => ({
    type: DECREMENT
})
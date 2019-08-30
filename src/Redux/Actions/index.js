import {UPDATE_VALUE} from "./actionTypes";

export const updateValue = value => {
    return{
        type: UPDATE_VALUE,
        payloa: value
    }
}
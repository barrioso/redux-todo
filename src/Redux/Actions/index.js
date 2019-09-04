import {UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOOGGLE_COMPLETED} from "./actionTypes";

export const updateValue = value => {
    return{
        type: UPDATE_VALUE,
        payload: value
    };
};

export const saveTodo = () => {
    return{
        type: SAVE_TODO,
        payload: null
    };
};

export const deleteTodo = index => {
    return{
        type: DELETE_TODO,
        payload: index
    };
};

export const tooggleCompleted = index => {
    return{
        type: TOOGGLE_COMPLETED,
        payload: index
    };
};

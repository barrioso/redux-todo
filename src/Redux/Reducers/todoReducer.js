import { UPDATE_VALUE } from "../Actions/actionTypes";
import { SAVE_TODO } from "../Actions/actionTypes";

const INITIAL_STATE = {
    value: "",
    todos: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.payload
            };

            case SAVE_TODO:
                return {
                    ...state,
                    value: '',
                    todos: [
                        ...state.todos, 
                    {
                        value: state.value,
                        completed: false
                    }
                ]
                };

        default:
            return state;

    };
};
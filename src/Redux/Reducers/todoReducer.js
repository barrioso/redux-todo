import { UPDATE_VALUE, DELETE_TODO, TOOGGLE_COMPLETED} from "../Actions/actionTypes";
import { SAVE_TODO } from "../Actions/actionTypes";

const INITIAL_STATE = {
    value: "",
    todos: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_VALUE:
            return {
                ...state,
                value: action.payload
            };

        case SAVE_TODO:
            return state.value ?
                {
                    ...state,
                    value: '',
                    todos: [
                        ...state.todos,
                        {
                            value: state.value,
                            completed: false
                        }
                    ]
                }
                : state;

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            };

        case TOOGGLE_COMPLETED:
                return {
                    ...state,
                    todos: state.todos.map((todo, index) => {
                return index === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo;
                })
                };       
        

        default:
    return state;

};
};
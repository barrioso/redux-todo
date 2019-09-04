import React from 'react';
import TextField from "@material-ui/core/TextField";
import * as actions from "./Redux/Actions"
import { connect } from "react-redux"

const TodoForm = ({ value, saveTodo, updateValue }) =>(
    <form
        onSubmit={e => {
        e.preventDefault();
        saveTodo();
        }}
    >
    <TextField
        type="text"
        placeholder="Add todo..."
        margin="normal"
        value={value}
        onChange={updateValue}
        onChange={e => updateValue(e.target.value)}
        />
    </form>
); 

const mapStateToProps = ({ todoReducer }) => {
    const { value } = todoReducer;
    return { value };
}

export default connect (
    mapStateToProps,
    actions)
    (TodoForm);


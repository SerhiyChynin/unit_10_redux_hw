import React from 'react';
import {  useDispatch } from 'react-redux';
import {
    add,
    minus,
    multi,
    division,
    text
} from './app/taskReducerSlice';

export default function In() {
    let task1Input = React.createRef();
    let textInput = React.createRef();
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(add(task1Input.current.value));
    }
    const minusHandler = () => {
        dispatch(minus(task1Input.current.value));
    }
    const multiHandler = () => {
        dispatch(multi(task1Input.current.value));
    }
    const divisionHandler = () => {
        dispatch(division(task1Input.current.value));
    }
    const textHandler = () => {
        console.log(textInput.current.value)
        dispatch(text(textInput.current.value))
    }
    return (
        <div>
            <div>
                <input type="number" ref={task1Input}/>
                <h2>Task 1</h2>
                <button onClick={addHandler}>+</button>
                <button onClick={minusHandler}>-</button>
                <button onClick={multiHandler}>*</button>
                <button onClick={divisionHandler}>/</button>
            </div>    
            <div>
                <input type="text" ref={textInput} />
                <button onClick={textHandler}>Push</button>
            </div>
        </div>
        
    );
}
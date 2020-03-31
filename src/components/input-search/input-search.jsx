import React from 'react';
import './input-search.css';

const  InputSearch = (props) => {

    
    const inputChanges = (ev) => {
        const value = ev.currentTarget.value;
        if(value.length > 3){ 
            props.actionToPerform(value);
        }
    }
    
    return (  
        <div className="input-search">
            <h1>Input Search</h1>
            <input type="text" onChange={inputChanges}></input>
        </div> 
    )
}
export default InputSearch;

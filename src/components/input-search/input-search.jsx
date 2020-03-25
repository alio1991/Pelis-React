import React from 'react';
import './input-search.css';

class  InputSearch extends React.Component {

    render() { 
        return (  
            <div className="input-search">
                <h1>Input Search</h1>
                <input type="text" onChange={this.inputChanges} onKeyUp={this.inputKeyUp}></input>
            </div> 
        );
    }

    inputChanges = (ev) => {
        const value = ev.currentTarget.value;
        if(value.length > 3){ 
            this.props.actionToPerform(value);
        }
    }

    inputKeyUp = (ev) =>{
        const value = ev.currentTarget.value;
        if(ev.keyCode === 13){ 
            this.props.actionToPerform(value);
        }
    }
}
 
export default InputSearch;

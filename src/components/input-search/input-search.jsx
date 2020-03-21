import React from 'react';
import './input-search.css';

class  InputSearch extends React.Component {
    
    state = {
        buttonName: 'send',
        eventName: 'search'
    }

    render() { 
        const {actionToPerform } = this.props;
        
        return (  
            <div className="input-search">
                <h1>Input Search</h1>
                <input type="text" onKeyUp={ev => {if(ev.keyCode === 13){ ev.currentTarget.nextElementSibling.click()}}}></input>
                <button type="button" onClick={actionToPerform}>{ this.props.buttonName }</button>
            </div> 
        );
    }

    isEnter(){
        
    }

}
 
export default InputSearch;

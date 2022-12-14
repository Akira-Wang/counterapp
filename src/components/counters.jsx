import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        
        const { onReset, onDelete, onIncrement } = this.props;

        return (
            <div>
                <button onClick={onReset} className="btn btn-secondary btn-sm" style={{backgroundColor:"#424070", fontWeight:"bold"}}>Reset</button>
                {this.props.counters.map( (counter)=>
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete}
                    onIncrement={onIncrement} 
                    counter = {counter}/>
                )}
            </div>
        );
    }
}
 
export default Counters;
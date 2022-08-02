 import React, { Component } from 'react';
 
 class Counter extends Component {

//style
    styles = {
        fontSize: 15,
        fontWeight: "bold"
    };

//each counter
    render() { 
        return (
        <div>
            <span style={this.styles} className={this.getBadgeClass()}>
                {this.formatCount()}
            </span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm">
                    Increment
            </button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                Delete
            </button>
        </div>
        );
    }
//callback functions
     getBadgeClass() {
         let classes = "badge m-2 badge-";
         classes += this.props.counter.value === 0 ? "warning" : "primary";
         return classes;
     }
    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'ZERO' : value;
    }
 }


 export default Counter;
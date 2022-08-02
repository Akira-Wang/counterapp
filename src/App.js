import React, {Component} from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';



class App extends Component { 

  //state
  state = { 
  counters: [
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:4, value:0},
      {id:5, value:0},
      {id:6, value:0}
  ]
  } 
  //increment function
  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters})
  }
  //reset function
  handleReset = () => {
      let counters = this.state.counters.map(c => {
          c.value=0; 
          return c});
      this.setState ({counters})
  }
  //delete function
  handleDelete = (counterID) => {
      const counters = this.state.counters.filter(c => c.id !== counterID);
      this.setState ({counters})
  }
    
  render() { 
    return (
      <React.Fragment>
        <main className='container' >
          <NavBar totolCounters={this.state.counters.filter(c=> c.value > 0).length}/>
          <Counters 
            onReset={this.handleReset}
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;

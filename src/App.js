import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Navneet', age: 29 },
      { name: 'Manisha', age: 34 },
      { name: 'Yogesh', age: 30 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Manisha', age: 34 },
        { name: 'Yogesh', age: 35 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Navneet', age: 29 },
        { name: event.target.value, age: 34 },
        { name: 'Yogesh', age: 30 }
      ]
    })
  }


  /**
    *  <button onClick={() => this.switchNameHandler('Navneet Sharma')}>Switch Name</button>
    *  This can be inefficient use bind way instead
    *  this.switchNameHandler.bind(this, 'Navneet Sharma')
    */
  render () {
    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Navneet Sharma')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Nikky!')} 
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

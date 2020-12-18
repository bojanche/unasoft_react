import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
state = {
  persons: [
    {id: 'qw1', name: 'Bojanche', age: 41},
    {id: 'we2', name: 'Una', age: 8},
    {id: 'er3', name: 'Bojana', age: 4},
  ],
  show_persons: false

}
  // switchNameHandler = (new_name) => {
  //   // console.log('Pretisnuto!');
  //   // OVO SE NE RADI -> this.state.persons[0].name = 'Bojan_Che';
  //   this.setState({  persons: [
  //     {name: new_name, age: 41},
  //     {name: 'Una', age: 8},
  //     {name: 'Bojana', age: 5},
  //   ]});
  //   console.log('Switched set.')
  // }

  deletePersonHandler = (person_index) => {
 //   const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(person_index, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    const person_index = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[person_index]
    };
    person.name = event.target.value;

    const persons=[...this.state.persons];
    persons[person_index] = person;

    this.setState({  persons: persons});
  };

  togglePersonsHandler = () => {
    const does_show = this.state.show_persons;
    this.setState({show_persons: !does_show})
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.show_persons){
      persons = (
        <div>{this.state.persons.map((person, index) => {
          return <Person click={() => this.deletePersonHandler(index)} id={index} name={person.name} age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        {/* <Person name={this.state.persons[1].name} age="8" changed={this.nameChangedHandler}>My hobbies: Playing</Person>
        <Person name="Bojana" age="4" /> */}
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = { backgroundColor: 'salmon',
      color: 'black'}
    }

    let klase = [];

    if (this.state.persons.length <= 2) {
      klase.push('red');
      console.log(klase);
    }
    if (this.state.persons.length <= 1) {
      klase.push('bold');
      console.log(klase);
    }
    return (

        <div className="App">
          <h1>Haj, moja UnaSoft</h1>
          <p className={klase.join(' ')}>This is working</p>
          <button onClick={this.togglePersonsHandler} style={style}>Promjeni ime</button>
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Janche_bo')} current_name={this.state.persons[0].name} /> */}
          {persons}        

        </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app!!!'));
  }
}

export default App;

// const app = props => {
//   const [persons_state, setPersonsState] = useState({
//       persons: [
//         {name: 'Bojanche', age: 41},
//         {name: 'Una', age: 8},
//         {name: 'Bojana', age: 4},
//       ]
//     });
//   const switchNameHandler = (new_name) => {
//     // console.log('Pretisnuto!');
//     // OVO SE NE RADI -> this.state.persons[0].name = 'Bojan_Che';
//     this.setPersonsState({  persons: [
//       {name: new_name, age: 41},
//       {name: "UnaShef", age: 8},
//       {name: 'Bojana', age: 5},
//     ]});
//     console.log('Switched set.')
//   }

//   return (
//           <div className="App">
//             <h1>Haj, moja UnaSoft</h1>
//             <p>This is working</p>
//             <button onClick={switchNameHandler}>Promjeni ime</button>
//             <Person name={persons_state.persons[0].name} age={persons_state.persons[0].age} click={this.switchNameHandler.bind(this, 'Janche_Bo')}/>
//             <Person name="Una" age="8">My hobbies: Playing</Person>
//             <Person name="Bojana" age="4" />
//           </div>
    
//         );
// }

// export default app;
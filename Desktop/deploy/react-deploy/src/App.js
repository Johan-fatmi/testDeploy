import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

export default class App extends Component {

      state = {
        persons: [
          {id:'p1', name:'fatmi', age: '27'},
          {id:'p2', name:'mouloud', age: '23'},
          {id:'p3', name:'sany', age: '21'}
        ],

      }

  render(){

      return (
        <div >
            <h1>Hi react</h1>
            <Person
            name = {this.state.persons[0].name}
            age = {this.state.persons[0].age}
            />

        </div>
      );
  }



}

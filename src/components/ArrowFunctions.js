import React, { Component } from 'react'

export default class arrowFunctions extends Component {
 render() {

  //* Arrow Functions -

  //! Beware
  // Arrow functions do NOT have their own 'this' value
  // Do not have their own implicit arguments object

  //* Example 1 - declare an anonymous function with no variables
  /*
  let greetings = function () {
   return 'Hello World'
  }
  
  let greetings = () => "Hello World" //There are NO input parameters ()
  
      let message = greetings(){
       console.log(message) // Hello World!
      }
      */

  //* Example 2

  /*
  let greet = function greetings(name) {
   return 'Hello' + name
  }
  
  let greet = name => "Hello" + name;
  
      let message = greet('John');
      console.log(message) // Hello John
      */

  //* this - refers to the global window object.
  // Always refers to the owner of the function we are executing.
  // OR
  // It can refer to an object that a method is an object of.
  // 'this' is always inherited by the enclosing scope.

  //* Example 3

  let message = {
   name: 'John',
   regularFunction: function () {
    console.log(this)
    console.log(this.name)
    console.log('Hello ' + this.name);
   },
   arrowFunction: () => console.log('Hi ' + this.name)
  }
  message.regularFunction();
  message.arrowFunction();



  return (
   <div>

   </div>
  )
 }
}
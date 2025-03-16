/**
 * ICS4U - Mr. Brash 🐿️
 * Abstract Data Types (custom types)
 *
 * A common ADT in programming is a Stack.
 * Read the README.md and STACK.md files carefully.
 * Then create a Stack data type and test it with some functions.
 *
 * Author:
 *
 */

'use strict';

/* Example ADT of a 'person'
   We can also use 'let' instead of 'const' */
const Person = {
  firstName: "John",
  lastName: "Doe",
  age: 0,

  fullName: function() {
    return this.firstName + " " + this.lastName;
  },

  initials: function() {
    return this.firstName[0].toUpperCase() + this.lastName[0].toUpperCase();
  }
};


/*** Read the instructions
     and implement a Stack ADT ***/
const Stack = {

};

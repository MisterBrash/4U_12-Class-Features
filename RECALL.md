# Recall: Classes

###### ICS4U - Mr. Brash 🐿️

- [🔙 to the lesson](./README.md)
- [⏩ Practice (Classwork)](./PRACTICE.md)

Remember the Stack ADT we created?

It  allowed us to place information in one _custom data structure_. **But what if we needed to use more than one stack?** With this type of ADT, we would need to copy and paste all of the Stack code and make a Stack2. That's a waste of code.

> Simple abstract data types _cannot be copied_. They are limited to _one_ implementation per definition.

## Classes
A **[class](https://brilliant.org/wiki/classes-oop/)** is a _blueprint_ for a data structure that _describes_ an _object_.

```JS
class Stack {
  // Other code goes here
}
```

⚠️ As a standard, class names a Capital First Letter: `Stack`. Similar to `String`, `Math`, or `Array`.



## New

A `class` is just a blueprint. It becomes a real `object` by using the keyword `new`.

```JS
const pancakes = new Stack();
let deck_of_cards = new Stack();
```

`new` says we want to make an **_instance_** of a class. This is called _[instantiation](https://www.techtarget.com/whatis/definition/instantiation)_. We have already seen this when we ask JavaScript for a new array:

```JS
let arr = new Array(10); // get a new array of size 10
```

Guess what? **Arrays are objects!**

## Properties

Just like a house or your shirt have properties, we can give our `Stack` _properties_: contents, name, etc. To an object, they are _descriptors_ or values. To humans, they are _properties_.

```JS
class Stack {
  name = "";
  contents = [];
  max_length = 255;
  // Etc...
}
```

⚠️ Notice the lack of `let`, `var`, or `const`. More on this later, but essentially the `let` is implied. 


How do we get access to the "name" property in the above examples? Or how do we change it?

Once an object is instantiated you can `get` or `set` the values of object properties using the dot-notation we've seen with things like `String`, `Math`, and `Arrays`:
```JS
let my_stack = new Stack();
my_stack.name = "Pretty little stack";

console.log(my_stack.name);       // 'Pretty little stack'
console.log(my_stack.max_length); // 255
```

## Example: A Car Class

Here's an example class that represents a simple car
```JS
class Car {
  make = "";
  model = "";
  year = 0;
  colour = "";
  mileage = 0;
  is_locked = false;
}

// Here's an example of instantiating a Car
let my_car = new Car();
my_car.year = 2014;
my_car.colour = "Titanium";
my_car.make = "Mazda";
my_car.model = "Mazda3";
my_car.mileage = 102876;

// You can make more than one!
let my_van = new Car();
my_van.year = 2018
my_van.make = "Chrysler"
my_van.model = "Pacifica"

// etc...
```

- [🔙 to the lesson](./README.md)
- [⏩ Practice (Classwork)](./PRACTICE.md)

🐿️
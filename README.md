# Class Features (Lesson)

###### ICS4U - Mr. Brash 🐿️

## Properties, Methods, and Constructors

- [Recall](./RECALL.md)
- [1. Properties](#1-properties)
- [2. Constructors](#2-constructors)
- [3. Class Methods](#3-class-methods)
- [Jump to the task](#your-task)

## 1. Properties

Objects have _properties_ that contain data about _that instance_ of the object.

```JS
let my_stack = new Stack();
my_stack.name = "Pancakes";  // Set the name property
console.log(my_stack.name);  // Get the name property

let cards = new Array(52);
console.log(cards.length);  // Prints "52"
```

Notice we can set the size of an Array during instantiation❓ `let cards = new Array(52)`

🤔 **Can we do what with _our_ objects?** `let my_stack = new Stack("Pancakes", 7)`

## 2. Constructors

🏗️

To run code _at the moment of instantiation_, we can create a `constructor` method (function) that runs code _the moment an object is created_.

**Example:**
  ```JS
  class Rectangle {
    name = "I'm a rectangle!";
    length;
    width;
  
    constructor(l, w) {
      this.length = l;
      this.width = w;
    }
  }
  ```

This will pass along the arguments to the properties when we make new Rectangles:
```JS
let r1 = new Rectangle(6, 12);
let r2 = new Rectangle(13, 4.5);
```

### ⚠️ "This"

Did you notice the word `this` inside the constructor? Look again. There are two reasons we see that keyword.

1. We want to make sure we are referring to the properties of _that particular instance_ of the object, **not** the class blueprint variables.
2. To differentiate variables if the same name is used. Example:
    ```JS
    class Circle {
      radius;
  
      constructor(radius) {
        this.radius = radius;
      }
    }
    ```
    The keyword `this` helps differentiate the `radius` variables.

---


OKAY! But what happens if we call `new Rectangle()` with no parameters?
  ```JS
  let r = new Rectangle();
  console.log(r.length);  // undefined
  ```
  ☹️

It is best practice to include _default values_ in the parameters:

  ```JS
  constructor(l = 1, w = 1) {
    this.length = l;
    this.width = w;
  }
  ```
Now the `.length` and `.width` will be `1` if no arguments are given.
  ```JS
  let r = new Rectangle();
  console.log(r.length);  // the length is 1   :)
  ```

<br><br>


## 3. Class Methods
Remember using `Math.round()` or `Math.floor()`? Classes can have functions! We call them `methods` to differentiate them from general functions in the program.

Defining object _methods_ is simple:
```JS
class Rectangle {
  length;
  width;
  colour;

  constructor(length = 1, width = 1, colour = "black") {
    this.length = length;
    this.width = width;
    this.colour = colour;
  }

  // Return the area of the rectangle
  area() {
    return this.length * this.width;
  }

  // Return the perimeter of the rectangle
  perimeter() {
    return this.length*2 + this.width*2;
  }
  
  // Change the colour of the rectangle
  set_colour(colour) {
    this.colour = colour;
  }

  // Scale the length and width by "scale_factor"
  scale(scale_factor) {
    this.length *= scale_factor;
    this.width *= scale_factor;
  }  
}
```
There is **no need to use the `function` keyword** and always remember to use `this` when referring to _instance_ variables.

<br><br>

# Your Task

- [Jump back to the lesson](#the-lesson)

**Note:** There is starter code in your [`main.js`](main.js) file.
  
1. Create a class that defines a `Triangle` with `base`, `height`, and a boolean for `right` that _defaults_ to `true`.

![Triangle Class Diagram](assets/Triangle.png)

  - Add a **constructor** so that `base` and `height` can be set, along with `right` (which is an optional third argument).
  - Create a Class method `area()` which calculates and returns the area of the triangle.
  - Create the Class method `hypotenuse()` which calculates and returns the hypotenuse _only_ if it is a right-triangle. Return -1 otherwise.
  - 💪🏻 Want a challenge?
    - Add to the `Triangle` class a variable called `elevation`. This will be the _angle of elevation_ at the `base` of the triangle, **_in degrees_** (left or right doesn't matter).
    - Add the function `perimeter()` which calculates and returns the perimeter of the triangle. Note that the `height` of the triangle is considered an _altitude_ if the triangle is not a right-triangle. That is to say the height is _not_ a side-length in that instance. That's why you need the `elevation`.

  Test your `Triangle` object thoroughly.<br>
  **Here's some test code:**<br>
  ```JS
  let tri1 = new Triangle(8, 6);          // Right triangle
  let tri2 = new Triangle(20, 14, false); // Oblique triangle

  console.log(tri1.hypotenuse(), tri2.hypotenuse());  // Should be "10 -1"
  console.log(tri1.area(), tri2.area());              // Should be "24 140"

  // If you implement the challenge `perimeter()` function:
  console.log(tri1.perimeter());  // Should be 24
  tri2.elevation = 40;            // This would be degrees
  console.log(tri2.perimeter());  // Should be about 248.77
  ```

  <br>

2. Recreate your `Stack` ADT as an _Object_. A lot of the work has been done for you in [main.js](main.js).

![Stack Class Diagram](assets/Stack.png)

  - Include a `constructor`, `contents`, `max_length`, `push()`, `pop()`, `peek()`, and `is_empty()`. Read below for their descriptions.
    - The `constructor` takes an array as a parameter to start the stack with default values. Check that the incoming array will fit on the stack - if not, do not add the values to the stack, leave it empty.
    - The `push()` function adds to the stack and returns the added value or `-1` if the stack is full.
    - The `pop()` function removes and returns the top item on the stack or `-1` if the stack is empty.
    - The `peek()` function returns a copy of the top-most item on the stack or `-1` if the stack is empty.
    - `is_empty()` returns `true` if the stack is empty and `false` otherwise.
    - ⚠️ The design team forgot to add the `is_full()` function to diagram! Please add an `is_full()` function which returns `true` if the stack has reached its limit and `false` otherwise.
      
Once you have a defined `Stack` object, make sure to _test it thoroughly_. Try generating multiple stacks and maybe even place a stack or two onto a third stack like this:
```JS
let stack1 = new Stack([6, 5, 4, 3, 4, 5, 6]);
let stack2 = new Stack(["hello", "goodbye", "up", "down"]);
let stack3 = new Stack();
stack3.max_length = 2;

stack3.push(stack1);
stack3.push(stack2);
console.log(stack3.is_full());
console.log(stack3.is_empty());
console.log(stack3.peek());
```


---


<br><br><br><br><br><br><br><br>


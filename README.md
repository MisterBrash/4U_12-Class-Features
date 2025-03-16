# Class Features (Lesson)

###### ICS4U - Mr. Brash 🐿️

#### Properties, Methods, and Constructors

- [Recall: Classes](./RECALL.md)
- [1. Properties](#1-properties)
- [2. Constructors](#2-constructors)
- [3. Class Methods](#3-class-methods)
- [Practice (Classwork)](./PRACTICE.md)

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

###### [🔝 Back to the top](#class-features-lesson)

## 2. Constructors

🏗️

To run code _at the moment of instantiation_, we can create a `constructor` method (function) that runs _the moment an object is created_.

**Example:**
  ```JS
  class Rectangle {
    name = "I'm a rectangle!";
    length;
    width;
    is_square;
  
    constructor(l, w) {
      this.length = l;
      this.width = w;
      this.is_square = (w == l);
    }
  }
  ```

This will pass along the arguments to the properties when we make new Rectangles:
```JS
let r1 = new Rectangle(6, 12);
let r2 = new Rectangle(13, 13);
```

⚠️ Did you notice the word `this` inside the constructor? There are two reasons we see that keyword.

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

###### [🔝 Back to the top](#class-features-lesson)

## 3. Class Methods

Remember using `Math.round()` or `Math.floor()`? Classes can have functions! We call them `methods` to differentiate them from general functions in the program.

Defining object _methods_ is simple:
```JS
class Rectangle {
  length;
  width;

  constructor(length = 1, width = 1) {
    this.length = length;
    this.width = width;
  }

  // Return the area of the rectangle
  area() {
    return this.length * this.width;
  }

  // Return the perimeter of the rectangle
  perimeter() {
    return 2 * (this.length + this.width);
  }

  // Scale the length and width by "scale_factor"
  scale(scale_factor) {
    this.length *= scale_factor;
    this.width *= scale_factor;
  }  

  // Instead of holding data for is_square, calculate it
  is_square() {
    return this.length == this.width;
  }
}
```

There is **no need to use the `function` keyword** and always remember to use `this` when referring to _instance_ variables.

<br>

- [🔝 Back to the top](#class-features-lesson)
- [⏩ Practice (Classwork)](./PRACTICE.md)

<br>

🐿️
# Abstract Data Types (Lesson)

###### ICS4U - Mr. Brash 🐿️

>_"In the beginning, there was only boolean."_

## The Lesson:

What if we need more than an integer or an array to store *custom* information?

Data that can be stored in a single _byte_ of memory are called [primitives](https://en.wikipedia.org/wiki/Primitive_data_type). Typical primitive data types in a programming language are:

- boolean
- integer (byte, short, int, long, char)
- float (float, double)
- individual characters (char) are actually integers, so _also_ primitive.

JavaScript stores these values as a 32-bit integer to manage larger values and positives vs. negatives.

**Abstract Data Types** require more processing power and memory. _They are a **combination** of the primitive types_.<br>
For example, the [Math object](https://www.w3schools.com/js/js_math.asp) and [Strings](https://www.w3schools.com/js/js_strings.asp) are ADTs.

Over the course of the next few lessons, we are going to learn how to make our own [abstract data types](https://en.wikipedia.org/wiki/Abstract_data_type) in JavaScript and eventually be able to make as many of that type as we want.

## Custom Data Types in JS

There are a couple ways to do this in JavaScript but today we're going to look at something called a [key-value pair](https://www.freecodecamp.org/news/javascript-object-keys-tutorial-how-to-use-a-js-key-value-pair/). This is also known as a _dictionary_.

**Let's say we want an ADT that represents a person, their age, and some famous quotes by that person:**
```JS
let famous_person = {
  name: "Mr. Squirrel",
  age: 0,
  quotes: []
};
```

Notice that `age` was declared but initialized to zero? Let's fix that by changing it in code:
```JS
famous_person.age = 7;
```
Maybe we could add a famous quote:
```JS
famous_person.quotes.push("Only a life lived for others is a life worthwhile.");
```
We can print the entire contents of our custom data structure, get the number of quotes, etc:
```JS
console.log(famous_person);
console.log(famous_person.quotes.length);
```

**But wait - there's more!** What if we wanted to receive a _random_ quote? We can add a custom function **two** different ways.

**1. Inside the original declaration of the ADT:**
```JS
let famous_person = {
  name: "Mr. Squirrel",
  age: 0,
  quotes: [],
  random_quote : function() {
    if (this.quotes.length > 0) {
      console.log(this.quotes[randInt(0, this.quotes.length)]);
    }
  }
};
```

**2. Or After the declaration** (somewhere else in the code)
```JS
famous_person.random_quote = function() {
  if (this.quotes.length > 0) {
    console.log(this.quotes[randInt(0, this.quotes.length)]);
  }
}
```

Calling the function is as simple as:
```JS
famous_person.random_quote();
```

Did you notice the keyword [`this`](https://www.w3schools.com/js/js_this.asp) in the `random_quote()` function above? [It's very important](https://www.w3schools.com/js/js_this.asp). \<-- Read that!


When you think you're ready, take a look at the [classwork practice](PRACTICE.md).
<br>

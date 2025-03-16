/**
 * ICS4U - Mr. Brash 🐿️
 * Class Features
 *
 * Learning about Constructors and Class Methods
 *
 * Author:
 */

'use strict';

// Example class
class Rectangle {
  length = 0;
  width = 0;

  constructor(length = 1, width = 1) {
    if (!isNaN(length) && !isNaN(width)) {
      this.length = length;
      this.width = width;
    }
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
    if (!isNaN(scale_factor) && scale_factor > 0) {
      this.length *= scale_factor;
      this.width *= scale_factor;
      return true;
    }
    return false;
  }  

  // Instead of holding data for is_square, calculate it
  is_square() {
    return this.length == this.width;
  }
}


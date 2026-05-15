/*Create a function that calculates the perimeter of a triangle. Function should return the 
value of perimeter. */

var side1 = 9;
var side2 = 6;
var side3 = 3;

function getTrianglePerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
}

var trianglePerimeter = getTrianglePerimeter(side1, side2, side3);
console.log("Perimeter = " + trianglePerimeter);
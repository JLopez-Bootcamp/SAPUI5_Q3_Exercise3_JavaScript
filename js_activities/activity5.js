/*Using arrays, display the colors in the following way,
"1st choice is Blue." 
"2nd choice is Green." 
"3rd choice is Red." and so on.*/


var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];

for (var i = 0; i < color.length; i++) {
    var index = i + 1;
    if (index > 3) {
        index = 0; //4 and above will get the "th"
    }else {
        //1, 2, 3 will get "st", "nd", "rd" respectively
    }
    var order = o[index]; 

    console.log(i + 1 + order + " choice is " + color[i] + ".");
}
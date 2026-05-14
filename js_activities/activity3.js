//Activity 3
/*Using For Loop, print the pattern below. Given ‘height’ as height of the ‘X’ sign and 
assuming it is not a negative number and ‘height’ is an odd number. 
Sample input: var height = 5; */

var height;
height = 9;

if (height > 0 && height % 2 === 1) {
    for (var i = 0; i < height; i++) {
        var line = "";
        for (var j = 0; j < height; j++) {
            if (j === i || j === height - 1 - i) {
                line += "*";
            } else {
                line += " ";
            }
        }
        console.log(line);
    }
}else {
    console.log("Invalid input. Please enter a positive odd number.");
}
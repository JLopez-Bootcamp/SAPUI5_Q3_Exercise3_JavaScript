//Activity 3
/*Using For Loop, print the pattern below. Given ‘height’ as height of the ‘X’ sign and 
assuming it is not a negative number and ‘height’ is an odd number. 
Sample input: var height = 5; */

var height;
height = 5;

if (height > 0 && height % 2 === 1) {
    for (var column = 0; column < height; column++) {
        var printRow = "";
        for (var row = 0; row < height; row++) {
            if (row === column || row === height - 1 - column) {
                printRow += "*";
            } else {
                printRow += " ";
            }
        }
        console.log(printRow);
    }
}else {
    console.log("Invalid input. Please enter a positive odd number.");
}
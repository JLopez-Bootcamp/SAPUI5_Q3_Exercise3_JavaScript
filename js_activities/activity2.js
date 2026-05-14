//Activity 2
/*Using While Loop, print the pattern below. Given ‘height’ as height of the triangle and 
assuming it is not a negative number. */

var height;
height = 6;

if (height>0){
    var counter = height;
    
    while (counter > 0){
        var star = "";
        var starCounter = counter;
        while (starCounter>0){
            star += "*";
            starCounter --;
        }
        
        var space = "";
        var spaceCounter = height - counter; 
        while (spaceCounter > 0){
            space += " ";
            spaceCounter --;
        }

        console.log(space + star);
        counter --;
    }
}
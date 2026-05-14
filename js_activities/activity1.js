//Activity 1
/*Given a number ‘number’, assuming it’s ranging from 1 – 999, convert it into  
words using If.. else condition or simply if conditions or switch statement. 
A dynamic code is to be generated, and a validation can be implemented to ensure 
that it would only cater the number range above. */

//activity 1
var number;
number = 789;

var tensDigit;
var hundredsDigit;
var tens = "";
var hundreds = "";
var result = "";

//function for printing single-digits
function printSingle(number){
    switch(number){
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "";
    }
}

// function for printing -Teen numbers
function printTeen(number){
    switch(number){
        case 13:
            return "Thirteen";
        case 14:
            return printSingle(4) + "teen";
        case 15:
            return "Fifteen";
        case 16:
            return printSingle(6) + "teen";
        case 17:
            return printSingle(7) + "teen";
        case 18:
            return printSingle(8) + "een";
        case 19:
            return printSingle(9) + "teen";
        default:
            return ""
    }
}

//function for 2-digit numbers
function printTwoDigit(number){
    if (number<10){
        return printSingle(number)
    }else if (number>=10 && number<=99){
        if (number>=10 && number<=12){               // if 10-12
            switch(number){
                case 10:
                    return "Ten";
                case 11:
                    return "Eleven";
                case 12:
                    return "Twelve";
                default:
                    return "";   
            }
        }else if (number>=13 && number<=19){         // if 13 - 19
            tens = printTeen(number);
            return tens;
        }else if (number>=20 && number<=99){
            if (number>=20 && number<30){            // if within 20s
                return "Twenty " + printSingle(number-20);
            }else if(number>=30 && number<40){       // if within 30s
                return "Thirty " + printSingle(number-30);
            }else if(number>=40 && number<50){       // if within 40s
                return "Forty " + printSingle(number-40);
            }else if(number>=50 && number<60){       // if within 50s
                return "Fifty " + printSingle(number-50);
            }else if(number>60 && number<70){        // if within 60s
                return "Sixty " + printSingle(number-60);
            }else if(number>=70 && number<80){       // if within 70s
                return "Seventy " + printSingle(number-70);
            }else if(number>=80 && number<90){       // if within 80s
                return "Eighty " + printSingle(number-80);
            }else if(number>90 && number<=99){       // if within 90s
                return "Ninety " + printSingle(number-90);
            }
        }
    }
}

if (number>=1 && number<=999){
    // split if the value is a 3-digit number
    if (number>=100 && number<=999){
        hundredsDigit = Math.floor( number/100 );
        hundreds = printSingle(hundredsDigit) + " Hundred"

        // get the 2-digit number
        tensDigit = number - (hundredsDigit*100) ;
        tens = printTwoDigit(tensDigit);
    }else if (number<100){
        tens = printTwoDigit(number);
    }

    result = hundreds + " " + tens;
    console.log(result);
} else{
    console.log("Invalid input. Please enter a number between 1 and 999.");
}

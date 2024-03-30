/* write a code which can give grades to students according to their scores:
80-100:A;
70-80:B;
60-69:C;
50-59:D;
0-49:F
*/

let marks = prompt("enter the scores: ");
marks=parseInt(marks);
if (marks >= 0 && marks <= 49) {
    console.log("Grade is F");
} else if (marks >= 50 && marks <= 59) {
    console.log("Grade is D");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade is C");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade is B");
} else if (marks >= 80 && marks <= 100) {
    console.log("Grade is A");
} else {
    console.log("Invalid number!");
}

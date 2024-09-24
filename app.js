//Qns no 1

// let studentName = []
// let studentNames = new Array();
// let fruits = ["Apple", "Banana", "Cherry"];
// let numbers = [1, 2, 3, 4, 5];
// let flags = [true, false, true];
// let mixedArray = ["Hello", 42, true, null];
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


// for(let i=0; i < qualifications.length; i++){
//    let name = (i+1)+")"+qualifications[i]+'<br>'
//   document.write(name)
// }

//qns no 2

// for(let i=0; i < scores.length; i++){
//     let per = (scores[i]/500*100)+'%';
   
//     document.write('Score of '+studentname[i]+' is '+scores[i]+'. Percentage: '+per+'<br>')
// }

// qns no 3

// let colors = ['red', 'green', 'white'];

// for (let i=0; i<colors.length; i++){
//     document.write(colors[i]+"<br>");
// }

// let startColor = prompt('Enter color to add as start');

// document.write('<br>Added Element at the start<br>')
// colors.unshift(startColor)

// for (let i=0; i<colors.length; i++){
//     document.write(colors[i]+"<br>")
// }

// let endColor = prompt('Enter color to add at end');

// colors.push(endColor)

// document.write('<br>Added Element at the end')



// for (let i=0; i<colors.length; i++){
//     document.write(colors[i]+"<br>")
// }



//qns no 4

// let scores = [320, 230, 480, 120];
// document.write("Score of student ")
// for (let i = 0 ; i < scores.length; i++) {
//     document.write(scores[i]+ " ")
// }

// scores = scores.sort()

// document.write(" <br> Orderd Score of student ")
// for (let i = 0 ; i < scores.length; i++) {
//     document.write(scores[i]+ " ")
// }



//qns no 5 

// let cities = ["karachi","lahore","islamabad","peshawar","faislabad","multan"];


// let selectedCities = [];

// for (let i = 0 ; i < 3 ; i++) {
//     selectedCities.push(cities[i])
// }

// document.write("<h1>Selected City List</h1>")

// for( let i = 0 ; i < selectedCities.length ; i++) {
//     document.write(selectedCities[i] + "<br>");
// } 


//qns no 6

// let arr = ["This ", "is ", "my ", "cat"];

// let singleString = arr.join("");

// document.write("<h1>Array:<br>This is my cat</h1>");

// document.write("Array <br>");
// document.write("<p>" + singleString + "</p>");


//qns no 8


// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<h2>Select Phone Manufacturer:</h2>");
// document.write("<select id='phoneManufacturers'>");

// for (let i = 0; i < manufacturers.length; i++) {
//     document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
// }

// document.write("</select>");


//Chapter 17-20     //Chapter 17-20         //Chapter 17-20

//qns no 1

// let emptyArray = [[]]; 
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// document.write("<h2>Empty Multidimensional Array:</h2>");
// document.write("<pre>" + JSON.stringify(emptyArray) + "</pre>");

// document.write("<h2>Matrix:</h2>");
// document.write("<pre>" + JSON.stringify(matrix) + "</pre>");


// // qns no 2

// let aree = [1,2,3,4,5,6,7,8,9,10]

// for(i = 0 ; i <= 10 ; i++) {
//     document.write(aree[i] + "<br>")
// }


// //qns no 3

let userInput = +prompt("Enter a Table Number")
let range = +prompt("Enter a range")

for (let i = 1 ; i < range ; i++) {
    document.write(`${userInput} x ${i} = ${userInput * i} </br>`);
}


















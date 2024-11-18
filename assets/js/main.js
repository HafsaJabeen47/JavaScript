// // for loop
// // Print Numbers from 1 to 10 Write a program that prints numbers from 1 to 10 using a for loop.

// for (let i = 1; i <= 10; i++){
//     document.write(i, "</br> </br>")
// }

// // Write a program that takes a number as input and prints its multiplication table (e.g., for 5 it prints 5x1=5 to 5x10=50).
let userInput = prompt("Enter a number to get its multiplication");
let number = (userInput);

function myTable(number){
    for (let i = 1; i <= 10; i++){
        document.write(`${number} x ${i} = ${number * i} </br>`)
    }
}

if(!isNaN(number)){
    document.write(`table of ${number}:`);
    myTable(number)
}else{
    document.write('plesae enter a valid number')
}




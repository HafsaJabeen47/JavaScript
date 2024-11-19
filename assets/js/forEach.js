// 01: Create an array with some numbers (e.g., let numbers = [10, 20, 30, 40, 50]) and use the forEach loop to print each number to the console.
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.forEach((val)=>{
    document.write(`This is ${val} number. </br> </br>`)
});


// 02: Given an array of numbers (e.g., let numbers = [1, 2, 3, 4, 5]), use forEach to add up all the numbers and find the total sum.
let findSum = [1, 2, 3, 4, 5];
let totalSum = 0;
findSum.forEach((val)=>{
    totalSum += val;
});

document.write(`Total Sum is: ${totalSum} </br> </br>`);


// 03: Given an array of strings (e.g., let fruits = ['apple', 'banana', 'cherry']), use forEach to print each string in uppercase.
let fruits = ['apple', 'banana', 'cherry', 'mango', 'pineapple'];
fruits.forEach((val)=>{
    document.write(`The upperCase is ${val.toUpperCase()} </br> </br>`)
});


// 04: Given an array of numbers (e.g., let numbers = [10, 25, 50, 15, 35]), use forEach to count how many elements in the array are greater than a given value, such as 20.
let number = [10, 25, 50, 15, 35];
let count = 0;
let value = 20;

number.forEach((num)=>{
   if(num > value){
    count++
   }
});

let result = `${count} elements are greater than ${value} </br> </br>`;
document.write(result);


// 05: Given an array of colors (e.g., let colors = ['red', 'green', 'blue']), use forEach to print both the element and its index in the format: Index: Color.
let colors = ['red', 'green', 'blue', 'orange', 'pink'];
colors.forEach((val, idx)=>{
    document.write(`${idx}: ${val.toUpperCase()} </br> </br>`)
});

// 06: Given an array of numbers (e.g., let numbers = [1, 2, 3, 4, 5]), use forEach to create a new array where each element is doubled (e.g., [2, 4, 6, 8, 10]).
let numberz = [1, 2, 3, 4, 5];
let newArray = [];

numberz.forEach((x)=>{
    newArray.push(x * 2);
});

document.write(`New array is: ${newArray} </br></br>`);


// 07: Given an array of numbers (e.g., let numbers = [2, 4, 6, 8]), use forEach to check if all elements in the array are even. Print true if they are all even, otherwise print false.
let numb = [2, 4, 6, 7, 10];
numb.forEach((val, idx)=>{
    if(val % 2 === 0){
        document.write(`Index ${idx}: ${val} is even number </br> </br>`);
    }else{
        document.write(`False index ${idx}: ${val} is an ODD NUMBER </br> </br>`);
    }
});


// 08: Given an array of strings (e.g., let words = ['cat', 'elephant', 'dog', 'giraffe']), use forEach to find the longest string in the array.
let words = ['cat', 'elephant', 'dog', 'lion', 'sparrow'];
let longestWord = '';

words.forEach((val)=>{
    if(val.length > longestWord.length){
        longestWord = val;
    }
});

document.write(`${longestWord} is Longest String </br> </br> </br>`);



// 09: Given an array of strings (e.g., let words = ['hello', 'world', 'javascript']), use forEach to reverse each word and print the results (e.g., ['olleh', 'dlrow', 'tpircsavaj']).
let wordsStr = ['hello', 'world', 'javaScript', 'Pakistan', 'coding'];
wordsStr.forEach((val)=>{
    document.write(val.split('').reverse(), "</br> </br>")
});



// 10: Given an array of names (e.g., let names = ['Alice', 'Bob', 'Charlie']), use forEach to print a greeting message for each name like: Hello, Alice!, Hello, Bob!, etc.
let names = ['Alice', 'jhon', 'mendly', 'vicky'];
names.forEach((val)=>{
    document.write(`Hello, ${val}! </br> </br> `)
});


// 11: Given an array of numbers (e.g., let numbers = [45, 10, 78, 34, 12]), use forEach to find the smallest number in the array.
let findSmall = [45, 10, 78, 34, 12];
let smallNum = findSmall[0];

findSmall.forEach((val)=>{
    if(val < smallNum){
        smallNum = val
    }
});

document.write(`Smallest number is: ${smallNum}`);




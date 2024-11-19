// 01: Math.max() is built-in JavaScript function used to find the largest number it belongs to math object.
let findBigNum = (num1, num2, num3, num4, num5)=>{
    return `Big No. ${Math.max(num1, num2, num3, num4, num5)}`
}

let ans = findBigNum(2, 4, 666, 8, 10);
document.write(ans, "</br> </br>");


// 02: Find Largest number for using forEach loop
let numbers = [3, 56, 23, 78, 5, 89, 12];
let largest = numbers[0];

numbers.forEach((num)=>{
    if(num > largest){
        largest = num;
    }
});

document.write(`the largest number is ${largest}`);
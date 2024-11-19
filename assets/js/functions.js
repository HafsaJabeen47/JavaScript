// name is a parameter also it considered as variable.
function sayHello(name){
    document.write(`Hello ${name}! </br> How are you? </br> </br> </br>`)
}
sayHello("fatima")



// function with return value
function getValue(x, y, z){
    return x + y + z;
}

let total = getValue(10, 20, 30);
document.write(`Total return is: ${total} </br> </br>`);


// parameter with return by me:
function paraReturn(a, b, name){
    return `${a + b} and name is: ${name}`
}

let returnPara = paraReturn(5,10, "Hafsa </br> </br>")
document.write(returnPara);


// Practice Questions:
// Write a function that calculates the square of a number.
function squareFun(a, b){
    return a ** a, b ** b 
}

let funSquare = squareFun(2, 4);
document.write(funSquare, "</br> </br>")

// enter query in gpt to how to get multi square in a function



// Create a function to find a bigger number
let findBigNum = (num1, num2)=>{
    if(num1 > num2){
        return `num1 is bigger ${num1}`
        // document.write(`Num1 is Bigger Number: ${num1}`)
    }else if(num1 < num2){
        return `num2 is bigger ${num2}`
        // document.write(`Num2 is Bigger Number: ${num2}`)
    }else{
        return `both are same`
        // document.write('both are same')
    }
}

let finalBigger = findBigNum(2222, 2222);
document.write(finalBigger)



// 
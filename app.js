function sayHello() {
    console.log("Hello World!")
}

sayHello()

//Function takes paramter userName and rreutns hello username
function sayHelloTo(userName) {
    console.log("Hello " + userName + "!");
}
sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!

//Function returns a + b
//I then console log it, or set a vairable ewqual to the result 
function add(a,b) {
    return a + b
}
function multiply(a,b) {
    return a * b
}
function subtract(a,b) {
    return a - b
}
function divide(a,b) {
    return a / b
}

function calculate(a,b,operator) {
    if (operator == "+") {
        return add(a,b)
    } else if (operator == "*") {
        return multiply(a,b)
    } else if (operator == "-") {
        return subtract(a,b)
    } else if (operator == "/") {
        return divide(a,b)
    }
}

const result1 = calculate(10,2,"/")
console.log("result1 is " + result1)
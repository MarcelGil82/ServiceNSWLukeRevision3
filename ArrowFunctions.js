// Normal function
// function addTwo(num) {
//     return num + 2;
// }
// // Arrow Function
// // Step 1. change to a function expression

// const addTwo = function (num) {
//     return num + 2;
// }

// Step 2. remove function keyword and add arrow '=>' between parameter () and body{}

// const addTwo = (num) => {
//     return num + 2;
// }

// Step 3. If there is only 1 parameter, remove brackets around it (optional)

// const addTwo = num => {
//     return num + 2;
// }

// Step 4. If there is only 1 line, remove the { } declaring the function body and remove return (optional)

// const addTwo = num => num + 2;

// let result = addTwo(10)
// console.log(result)

// Q1.
// const greet = (name) => console.log("Hello", name)

// greet("Marcel")

// Q2.
// const greet = (name) => ("Hello " + name)

// let message = greet("Marcel")
// console.log(message)

// Q3.
// const numbers = (num1, num2) => {
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// numbers(10, 48)

// // Q4.
// const numbers = (num1, num2) => {
//     if (num1 < num2) {
//         return (num1)
//     }
//     else {
//         return (num2)
//     }
// }

// let smallestNumber = numbers(16, 36)
// console.log(smallestNumber)

// Default Parametres

// Q1.
// const greet = (name = "Marcel") =>  console.log("Hello", name)

// greet("John")

// Q2.
// const greet = (name = "Luke") => ("Hello " + name)

// let message = greet()
// console.log(message)

// Q3.
// const numbers = (num1, num2 = 100) => {
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// numbers(10)

// // Q4.
// const numbers = (num1 = 5, num2 = 5) => {
//     if (num1 <= num2) {
//         return (num1)
//     }
//     else if (num1 < num2) {
//         return (num1)
//     }
//     else {
//         return (num2)
//     }
// }
// let smallestNumber = numbers(1, )
// console.log(smallestNumber)

// Without Ternary
// const numbers = (num1, num2) => {
//     if (num1 < num2) {
//         return (num1)
//     }
//         return (num2)
//     }
    
// With Ternary
// const numbers = (num1, num2) => (num1 < num2) ? num1 : num2;

// let smallestNumber = numbers(1, 5)
// console.log(smallestNumber)
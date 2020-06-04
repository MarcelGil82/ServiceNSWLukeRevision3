// function multiply(num1, num2) {
//     return num1 * num2;
// }
// let result = multiply(12, 8)
// console.log(result);    // output 96

// function multiply(num1, num2) {
//     console.log(num1 * num2);
// }
// multiply(12, 8)


// Q1.
// function greet(name) {
//     console.log("Hello", name)
// }
// greet("Marcel")

// Q2.
// function greet(name) {
//     return ("Hello " + name)
// }
// let message = greet("Marcel")
// console.log(message)

// Q3.
// function numbers(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// numbers(100, 48)

// // Q4.
// function numbers(num1, num2) {
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
// function multiply(num1, num2 = 5) {
//     return num1 * num2;
// }
// let result = multiply(12)   // if you add another number i.e (12, 2) it will overide the 5 and output = 24
// console.log(result);        // output 96

// Q1.
// function greet(name = "Marcel") {
//     console.log("Hello", name)
// }
// greet("John")

// Q2.
// function greet(name = "Luke") {
//     return ("Hello " + name)
// }
// let message = greet("jim")
// console.log(message)

// Q3.
// function numbers(num1, num2 = 100) {
//     if (num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// numbers(110)

// // Q4.
// function numbers(num1 = 5, num2 = 5) {
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
// let smallestNumber = numbers(5, 10)
// console.log(smallestNumber)
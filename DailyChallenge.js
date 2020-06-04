// Q1. - Declare an empty array using the new Array syntax
let myArray = new Array()

// // Q2. - Push 3 string values to the array
myArray.push("Jim", "John", "Jan")
// console.log(myArray);

// // Q3. Log all the string values in reverse order (last element logged first, etc.)
let i = myArray;
for (let i = myArray.length-1; i >= 0; i--) {
    let reverseOrder = myArray[i];
    console.log(reverseOrder)
}

// Q4. Create an array of numbers. There should be at least 4 elements in the array
// let numbersArray = [16, 37, 42, 61];
// console.log(numbersArray)

// Q5. Add a new element at the start and end of the array
// numbersArray.unshift(8);
// console.log(numbersArray)

// Q6. Log all the elements with an even index
// let numbersArray = [16, 37, 42, 61];
// numbersArray.unshift(8);
// let i = numbersArray;
// for (let i = 0; i < numbersArray.length; i += 2) {
//     evenIndex = numbersArray[i];
//     console.log(evenIndex)
// }

// Q7. Log all the elements that are divisible by 2 (use a for..of loop)
// let numbersArray = [16, 37, 42, 61];
// numbersArray.unshift(8);
// for (let num of numbersArray) {
//     if (num % 2 == 1) {
//         continue;
//     }
//     console.log(num)
// }

// Q8. Create a new array and fill it with all the elements that are greater than or equal to 10
// let myArray = new Array(10, 11, 12, 13, 14);
// console.log(myArray)

// let number = 2 + 2;

// switch (number) {
//     case 3:
//         console.log("Just Off... try again");   // if answer was 3, it will show this log
//         break;
//     case 4:
//         console.log("2 + 2 is 4! you got it right") // will equal 4, so then it will log this case
//         break;
//     default:
//         console.log("You were way off")     // if it wasn't either 3 or 4, it will show this log
// }

// Harry Potter Book Series
// Q1.

// let harryPotter = 41;

// switch (harryPotter) {
//     case 1:
//         console.log("The Philosopher's Stone");
//         break;
//     case 2:
//         console.log("The Chamber of Secretse");
//         break;
//     case 3:
//         console.log("The Prisoner of Azkaban");
//         break;
//     case 4:
//         console.log("The Goblet of Fire");
//         break;
//     case 5:
//         console.log("The Order of the Phoenix");
//         break;
//     case 6:
//         console.log("The Half-Blood Prince");
//         break;
//     case 7:
//         console.log("The Deathly Hallows");
//         break;
//     default:
//         console.log("There are no other books in the HP series");
//         break
// }

// Q2.
// let harryPotter = 8;
// if (harryPotter == 1) {
//     console.log("The Philosopher's Stone");
// } else if (harryPotter == 1) {
//     console.log("The Chamber of Secretse");
// } else if (harryPotter == 3) {
//     console.log("The Prisoner of Azkaban");
// } else if (harryPotter == 4) {
//     console.log("The Goblet of Fire");
// } else if (harryPotter == 5) {
//     console.log("The Order of the Phoenix")
// } else if (harryPotter == 6) {
//     console.log("The Half-Blood Prince");
// } else if (harryPotter == 7) {
//     console.log("The Deathly Hallows");
// } else {
//     console.log("There are no other books in the HP series");
// }

// Days of the Week
// Q1.

// let dayOfWeek = "Monday";
// let dayOfWeek = "Tuesday";
// let dayOfWeek = "Wednesday";
// let dayOfWeek = "Thursday";
// let dayOfWeek = "Friday";
// let dayOfWeek = "Saturday";
// let dayOfWeek = "Sunday";

// switch (dayOfWeek) {
//     case "Saturday":
//         console.log("Ahh, I can finally relax");
//         break;
//     case "Sunday":
//         console.log("Ah well, the weekend is nearly over");
//         break;
//     case "Thursday":
//     case "Friday":
//         console.log("Yay, it's almost the weekend");
//         break;
//     default:
//         console.log("Time for work then...");
// }

// Q2.
// let dayOfWeek = "Monday";
// let dayOfWeek = "Tuesday";
// let dayOfWeek = "Wednesday";
// let dayOfWeek = "Thursday";
// let dayOfWeek = "Friday";
// let dayOfWeek = "Saturday";
// let dayOfWeek = "Sunday";

if (dayOfWeek == "Saturday") {
    console.log("Ahh, I can finally relax");

} else if (dayOfWeek == "Sunday") {
    console.log("Ah well, the weekend is nearly over");

} else if (dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
    console.log("Yay, it's almost the weekend");

} else {
    console.log("Time for work then...")
}
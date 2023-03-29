const dateEl = document.querySelector('.date');
const monthEl = document.querySelector('.month');
const yearEl = document.querySelector('.year');
const dayEl = document.querySelector('.day');

const today = new Date().getDate();
const year = new Date().getFullYear();

const month = new Date().getMonth();




const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
console.log(monthName[month]);
monthEl.innerText = monthName[month];



// function monthDisplay() {
//     let monthName;
// switch (month) {
//     case 0:
//         monthName = "January";
//         break;
//     case 1:
//         monthName = "February";
//         break;
//     case 2:
//         monthName = "March";
//         break;
//     case 3:
//         monthName = "April";
//         break;
//     case 4:
//         monthName = "May";
//         break;
//     case 5:
//         monthName = "June";
//         break;
//     case 6:
//         monthName = "July";
//         break;
//     case 7:
//         monthName = "August";
//         break;
//     case 8:
//         monthName = "September";
//         break;
//     case 9:
//         monthName = "October";
//         break;
//     case 10:
//         monthName = "November";
//         break;
//     default:
//         monthName = "December";
//         break;
// }
// console.log(monthName);

// monthEl.innerHTML = monthName;
// }

// monthDisplay();



dateEl.innerText = today;
yearEl.innerText = year;

// day name
dayEl.innerText = new Date().toLocaleString("en", {
    weekday:"long"
})


// month name
// monthEl.innerText = new Date().toLocaleString("en", {
//     month: "long"
// })

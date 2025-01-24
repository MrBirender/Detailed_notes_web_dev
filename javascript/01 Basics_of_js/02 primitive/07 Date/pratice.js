// ********************************************************************************************************
/* What is the JavaScript Date object, and how is it used?
Answer: The data object in js is used to represent dates and time. it can be created
using new Date(). it provides methods to setDate, current Date, comparing two dates.

*/
const currentDate = new Date("2025-05-16");
const dataCurrent = Date.now();
// console.log(currentDate.toISOString())
console.log(currentDate.toLocaleDateString());
// console.log(dataCurrent)

/* What is the difference between UTC and local time in JavaScript's Date object?

UTC (Coordinated Universal Time) is the time standard used globally.
The Date object can be used to work with both UTC time and local time.
For example:
getUTCDay() gets the day in UTC.
getDay() gets the day in local time.
toISOString() returns a string in UTC format. */

/* date formatting
JavaScript doesn’t have a built-in method for custom date formatting.
However, you can use toLocaleDateString() or third-party libraries
like date-fns or moment.js. Example with toLocaleDateString:
*/

const formattedDate = currentDate.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(formattedDate); // "January 23, 2025"

/* What are the common methods of the Date object for getting and setting date/time components?

Getting methods:
getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), 
getMilliseconds(), getDay()
getTime() (timestamp)

Setting methods:
setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds() 
*/


/* 
How does JavaScript handle time zones when working with Date objects?

JavaScript’s Date object works in local time by default, but it provides methods for working with UTC. You can use getUTC* and setUTC* methods to interact with UTC time.
JavaScript also provides toLocaleString() for formatting dates in a specific locale or time zone.
*/

// You can compare two Date objects by converting them to timestamps:

const date1 = new Date('2025-01-01');
const date2 = new Date('2025-01-02');
if (date1 < date2) {
  // console.log('date1 is earlier');
}

/* How would you calculate the number of days between two given dates? */
const date3 = new Date('2025-01-01');
const date4 = new Date('2025-01-10');
let timeDiff = Math.abs(date4-date3)
// console.log(timeDiff);

let hours = Math.ceil(timeDiff /(1000*60*60*24))
// console.log(hours)

function daysInMonth(date) {
  const year = date.getFullYear();
  console.log(year)
  const month = date.getMonth();
  console.log(month);
  
  return new Date(year, month + 1, 0).getDate();
  /* gives the last date of the previous month */
}
// console.log(daysInMonth(new Date('2025-01-01'))); // 31
console.log(new Date(2025, 14, 0).getDate())
console.log(new Date().getDate())


// Write a function that adds a specified number of days to a given date.
console.log('below it')
function addDays(date, days) {
 const result  = new Date(date)
 const newdate = result.getDate() + days
 result.setDate(newdate)
 return result.toLocaleDateString()
}
console.log(addDays(new Date('2025-01-01'), 5)); // "2025-01-06"

// How would you find out the difference in months between two dates?
function monthsBetween(date1, date2) {
  const years = Math.abs(date1.getFullYear() - date2.getFullYear())
  const months = Math.abs(date1.getMonth() - date2.getMonth())
  return years * 12 + months
  
  
}
console.log(monthsBetween(new Date('2025-01-01'), new Date('2026-01-01'))); // 12


// How would you validate if a given string is a valid date in JavaScript?
function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
console.log(isValidDate('2025-01-01')); // true
console.log(isValidDate('invalid-date')); // false
// Get the current date and time
const currentDate = new Date();
console.log(currentDate); // Current date and time

// getTime()
const timestamp = currentDate.getTime();
// it gives the timestamp in milliseconds from January 1, 1970, 00:00:00 UTC
console.log(timestamp)

// Get the current year
console.log(currentDate.getFullYear()); // Current year

// Get the current month (0-11)
console.log(currentDate.getMonth()); // Current month (0-11)

// Get the current day of the month (1-31)
console.log(currentDate.getDate()); // Current day of the month

// Get the current day of the week (0-6)
console.log(currentDate.getDay()); // Day of the week (0-6)

// Get the current hour (0-23)
console.log(currentDate.getHours()); // Current hour

// Get the current minutes (0-59)
console.log(currentDate.getMinutes()); // Current minutes

// Get the current seconds (0-59)
console.log(currentDate.getSeconds()); // Current seconds

// Get the current milliseconds (0-999)
console.log(currentDate.getMilliseconds()); // Current milliseconds

// Get the current timestamp in milliseconds
console.log(currentDate.getTime()); // Current timestamp

// Set a new year
currentDate.setFullYear(2025);
console.log(currentDate); // Updated year

// Set a new month (0-11)
currentDate.setMonth(5);
console.log(currentDate); // Updated month (June)

// Set a new day of the month (1-31)
currentDate.setDate(15);
console.log(currentDate); // Updated date

// Set a new hour (0-23)
currentDate.setHours(10);
console.log(currentDate); // Updated hour

// Convert to string (default format)
console.log(currentDate.toString()); // Date string

// Convert to ISO string
console.log(currentDate.toISOString()); // ISO string

// Convert to locale string (with time zone)
console.log(currentDate.toLocaleString()); // Locale string with time zone

// Get the UTC date and time
console.log(currentDate.toUTCString()); // UTC string

// GET CURRENT DATE FORMAT FOR STUDENT ATTENDANCE CHECK PAGE

let currentDate = new Date();
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let fullMonthName = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let month = months[currentDate.getMonth()];
let currentMonthName = fullMonthName[currentDate.getMonth()]
let day = currentDate.getDate();
let year = currentDate.getFullYear();

let formattedDate = `${month} ${day} ${year}`;
let dataDateFormat = `${year}-${currentDate.getMonth()+1}-${day}`


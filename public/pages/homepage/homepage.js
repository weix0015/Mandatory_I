// format date as "Weekday Day. Month Year"
function formatDate(date) {
  const day = date.getDate();
  // februar or march
  const month = (date.getMonth() + 1 === 2) ? "Februar" : "Marts";
  const year = date.getFullYear();

  return `Fredag ${day}. ${month} ${year}`;
}

// dates of fridays within (02/02/2024 - 15/03/2024)
function allFridayDates(startDate, endDate) {
  const fridayDates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    // check for friday (index 5)
    if (currentDate.getDay() === 5) {
      fridayDates.push(new Date(currentDate));
    }
    // increment + 7 for next friday
    currentDate.setDate(currentDate.getDate() + 7);        
  }
  return fridayDates;
}

// start and end dates (02/02/2024 - 15/03/2024)
const startDate = new Date("2024-02-02");
const endDate = new Date("2024-03-15");

// all fridays within (02/02/2024 - 15/03/2024)
const fridayDates = allFridayDates(startDate, endDate);

// Insert into table top row
const datesRow = document.getElementById("dates");
fridayDates.forEach(date => {
  const formattedDate = formatDate(date);
  const dateCell = document.createElement("td");
  dateCell.textContent = formattedDate;
  datesRow.appendChild(dateCell);
});
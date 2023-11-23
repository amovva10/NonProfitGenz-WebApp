// Function to create a calendar for every month
function createCalendar(year, month) {
  // Select the table body element in the HTML with the id "calendar"
  const tableBody = document.querySelector("#calendar tbody");
  // Clear the table body to prepare for new content
  tableBody.innerHTML = '';

  // Create a Date object representing the first day of the specified month
  const currentDate = new Date(year, month, 1);
  // Find the last day of the month
  const lastDay = new Date(year, month + 1, 0).getDate();

  // Calculate the number of rows needed based on the last day of the month
  const numRows = Math.ceil((lastDay + currentDate.getDay()) / 7);

  // Loop through each row
  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    // Create a new row element
    const row = document.createElement("tr");
    
    // Loop through each day of the week
    for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
      // Create a new cell element
      const cell = document.createElement("td");

      // Calculate the day number for the current cell
      const day = (rowIdx * 7) + dayIdx - currentDate.getDay() + 1;

      // Check if the calculated day is within the valid range for the month
      if (day > 0 && day <= lastDay) {
        // Set the cell content to the day number
        cell.textContent = day;

        // Highlight the cell if it represents the current date
        if (currentDate.getMonth() === new Date().getMonth() && day === new Date().getDate()) {
          cell.classList.add("highlight");
        }
      } else {
        // Set background color to white for cells outside the valid range
        cell.style.backgroundColor = 'white';
      }

      // Append the cell to the current row
      row.appendChild(cell);
    }

    // Append the row to the table body
    tableBody.appendChild(row);
  }
}

// Get the current date
const today = new Date();
// Extract the current year and month
const year = today.getFullYear();
const month = today.getMonth();

// Call the createCalendar function with the current year and month
createCalendar(year, month);

$(document).ready(function() {
    $("#dob").flatpickr({
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      maxDate: "today",
      minDate: "1900-01-01",
      defaultDate: "1990-01-01"
    });
  });

  const select = document.getElementById("numbers-select");

// Loop from 1 to 100
for (let i = 2; i <= 100; i++) {
  // Convert the number to a string and add a leading zero if necessary
  const number = i.toString().padStart(2, "0");
  
  // Create a new option element
  const option = document.createElement("option");
  
  // Set the value and text of the option
  option.value = number;
  option.text = number;
  
  // Add the option to the select
  select.add(option);
}
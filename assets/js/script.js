// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //listen for the click on a save button
  $(".saveBtn").on("click", function () {
    // Grab the id of the containing time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");
 
      // Now grab the user input from the textarea within the same time-block
      var userInput = $(this).siblings(".description").val();

      //Now we can take the two objects created and save to local storage
      // Save the userInput in local storage using the timeBlockId as a key
      localStorage.setItem(timeBlockId, userInput);

      //Check to make sure this is working properly.
      console.log(timeBlockId, userInput)
    });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  //HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  
  //How can Day.js be used to get the
  // current hour in 24-hour time?
  




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  
  //HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

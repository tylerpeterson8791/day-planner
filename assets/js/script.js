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
  
    //Declare Current hour
    var currentHour = dayjs().hour();

    //Console log to check, single military time value
    console.log(currentHour)
  
    $(".time-block").each(function () {
      //create variable for the block hour to compare to currentHour.  
      //right now the format is "hour-14" so we need grab just the number value and not the "hour-" part
      //parseInt will make it into a number, select save button hit $(this) and drill down to attr("id")
      //we do this by using .split("-") to chop into an Array at the "-" (the word hour and the number) then we specify [1] since the number we need to compare is the second part
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // Compare block hour with the current hour and update classes accordingly
      // If less than current hour then it's the past
      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      // If equal to current hour it's present
      } else if (blockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      //everything else is the future
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  
  //HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  // TODO: Add code to display the current date in the header of the page.

  // TODO: The Mock-Up shows an "Appointment added to localstorage" message at top of page below break
});

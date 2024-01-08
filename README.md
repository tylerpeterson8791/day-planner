# Day Planner

## Description

We were tasked with creating a day planner with hour blocks where the user can add To-Do items and appointments into a textarea:

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm

WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block
THEN I can enter an event

WHEN I click the save button for that time block
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

## Installation

The user is presented open hour blocks from 9AM to 5PM.  Hours in the past are in gray, the current hour is in red and future blocks are in green.

The layout is simple with an open text area where the user can type freely and a save button for each where they can save what they type for future reference.

The top of the page displays the current date and gives the user a confirmation once segments are saved.

## Usage

We were given starter code for this.  The HTML was almost completely ready as is.  I just coppied the Divs that contatined the hours and made 8 of them to represent every hour from 9AM-5PM.  Each has an ID for the hour, anything after 12 I used military time (i.e. 2PM = 14) to make things easier in the JS.

The first thing I did in the JS was add an event listener for the .savebutton class.  In order to differentiate which one the user is saving I use the ID for each time block.  Then I'm able to tie together the user input from the text area to the timeBlockId, using that as a sort of key.  This part was a pretty big challenge but once I pseudocoded it and broke it into chunks it was doable.

Next I had to figure a way to identify each block, compare it to the current time block that we're in and colorcode the hours to the Gray/Red/Green as previously stated.  I used dayJs().hour() to set a variable for that.  Then I needed to create a comparible value for each block.  This was actually the most difficult part of this project.  The way that the ID's were written in the current code was "Hour-9, Hour-10, ect....).  What I did was split the ID into an array at the hyphen with .split("-").  That essentially gave me two values (Hour and 10), because these are still strings I used parseInt to make sure the hour value was a number and pointed to the 1 position in the array (since 'Hour' was the 0 position).  Anyway, I break this down in my comments from lines 51-54 in the script.js.  

Once I had that I could simply manipulate the classes using an If/Else function comparing the current hour to the block hour.

Now I had to take the saved user input from local storage and make sure it shows up upon loading the page.  Lines 31-42 are where I did this.  Once again I use the timeBlockId as a sort of key to keep each input connected to the correct timeblock.

I popped in the current date into the empty <p> provided in the HTML by creating a variable using dayjs().format('dddd, MMMM D YYYY').

Finally, the mockup had a message of "Saved to Local Storage" that popped up when the user hits save to confirm to them that it has been saved.  I did something similar but set it to dissapear after 5 seconds.  Lines 17-29 detail this.

## Credits

Having Gary explaining things this past week has helped make things click for me.  It still takes me a while to break down where everything needs to go and making sure my "pointing" with jQuery is correct, but I've felt overall good with the material this week.  Shout out to Sam Pai who helped with a tutor session and W3 School for helping me fill in the gaps!
![Screenshot 2024-01-07 193510](https://github.com/tylerpeterson8791/day-planner/assets/75902133/a3405c7e-cc89-40d2-9b7f-add56b6c7a6c)

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




## Credits

Saving the high score in local storage to be pulled as well as the timer logic was the most difficult part of this project.  I'm pretty sure this funtions properly but there's probably a much cleaner way to accomplish this.  In the words of Katy, there were multiple times I got "Lost in the Sauce" (and may still be there somewhat) but I'm proud of the final product.

Shout out to my brother Kai for leaving me the breadcrumbs to follow.  Additional shout out to Pseudocoding and Google.  Staring at a blank document is very daunting.  Once I split it up into bite sized chunks I was able to tackle each section one at a time and it made it feel more doable.

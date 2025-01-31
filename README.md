# Text Based Game - Character Creation

## The Goal

The challenge for this project was to use an API of my choice and utilise a CRUD type of functionality with local storage.

## The Plan

I chose a DND API and decided to try and make a character creation screen which could go with an older text based game project I never completed. 
I looked up the base information from the API and decided to keep it simple by just allowing the user to create a character based off of the main 6 stats.
The user can read up on the (API call) information about their stat-in-question by clicking on the "read more" button.

Once the character is created, the game could "begin" (but not in this project).

Ideally there would be a way to view all created characters so that the user could pick between them, but the MVP is to:

* Get localstorage working for one saved charcater and have that character loading with the saved stat distribution
* Be able to change the stat distribution and/or name
* Delete localstorage character data on the frontend/UI in order to cover the full CRUD functionality

### The process

I started with getting the API call correct, and dynamically mapping over the "name" results to show all the stats, whilst creating an unique ID for them based off the "name".

This caused me troubles with trying to then target the ID and after lots of fiddling I resigned to having static HTML for this data, as I didn't manage to get the data to append at the right time, even though it was visible on the page the ID was unreachable due to some sort of rendering issues.

Next up came calculating stat distribution and showing the user how many points they've used, out of a maximum stat number.
The calculations are in place, the user is unable to select a negative number whilst using the arrows on the number input field, but they can still type -10 and cheat their way to an incorrectly advantageous stat distribution. 

Local storage (all WIP): 
* There needs to be the ability to load any current character data if there is any
* When someone saves a character there should be stat calculating to ensure they've spent the correct amount of points (no more than the maximum, no negative numbers etc)
* When updating the data it replaces the current stored data

Load the web app, then vote 16 times. During the voting process, verify these items:
The two buttons, "Show Results" and "8 More Votes" are not visible during the first 15 votes.
After the 16th vote, the two buttons become visible.

# Tests

### Day 1

- Verify that the 'Show Results', 'Guess 8 more times', and 'New Round' buttons are not visible during voting
- Verify that after 16 clicks the 'Show Results' and 'Guess 8 more times' appear
- Verify that after the 'Show Results' button is clicked the 'New Round' button appears
- Console.log the array containing image objects to verify that the object constructor correctly write all properties to the array
- Use console.log to verify that when an image appears, its 'shown' attribute increases once and that when it is clicked, its 'click' attribute increases once.

### Day 2

- Verify that a manual array input of numbers is plotted correctly in the code.
- Verify that when the 'Guess 8 more times' button appears, the user has the opportunity to vote 8 more times.
- Console.log the image array once the user has voted 8 times to verify that the 8 additional votes were added to initial 16 votes.
- Verify that after the user has voted the additional 8 times, the chart is immediately shown.
- Verify that the 'New Round' button resets the image array

### Day 3

- Verify that the object properties tracking # of times an image has been clicked and shown persists after refreshing the page.
- Verify that the random images themselves persist after the page has been refreshed and/or the browser closed
- Verify that the total number of clicks will refresh after results have been shown but not if the page is refreshed
- Console log the length of the images array to be sure the object constructor is called only once and doesn't continue to push in objects
- Verify that random images will be generated for each image container every time an image is clicked

### Day 4

- Verify that the styling implemented in CSS renders on the page correctly. Look specifically for:
  - Font, font size, and font color
  - Div dimensions, background color, and border-style
  - Margins and padding for all elements
  - Nav bar positioning
  - Image dimensions and proportions
- Verify that the animation implemented in CSS renders on the page correctly. Look specifically for:
  - element movement to desired positions
  - animation timing and interaction
  - animation appearance changes (colors, borders)

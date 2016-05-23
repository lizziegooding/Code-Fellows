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

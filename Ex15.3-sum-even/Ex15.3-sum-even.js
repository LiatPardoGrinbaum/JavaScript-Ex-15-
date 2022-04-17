/* # Note: We ask you not to solve the bug by finding it with your
eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */
/* we want to sum all numbers in even cells in arrays of size 10:
[1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30
Submit the */

function getSumOfEven(arr) {
  return arr[0] + arr[2] + arr[4] + arr[6] + arr[8];
}

getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//explaining my solution:
//I've opened it with dev tool (on the html page- f12 then sources, then find the js file).there was no error sign. I clicked line 13 then refreshed it. I found out under scope->local more details about the array. there is no index 10! and the index starts with zero, which means I need to change the whole return statement to:
//  return arr[0] + arr[2] + arr[4] + arr[6] + arr[8];

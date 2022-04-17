/* # Note: We ask you not to solve the bug by finding it with your
eyes but to use the debugging tools we've learned!
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */

function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2);

//explaining my solution:
//I've opened it with dev tool (on the html page- f12 then sources, then find the js file).I've noticed that the line of calling the function (line 18) marked with error sign- the name of the function when called is not defined.
// I changed the name to the right name than ran it again.

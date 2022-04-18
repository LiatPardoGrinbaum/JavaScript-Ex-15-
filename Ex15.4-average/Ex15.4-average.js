/* What is wrong with this code?
1. First find the line that contains the problem. Write it
down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);

//explaining my solution:
//I've opened it with dev tool (on the html page- f12 then sources, then find the js file).there was no error sign. I clicked line 10 then refreshed it. I found out  that i and sum are undefined. when I click f10 it showed me that sum get the NaN type.
// I think it's because  arr[i] is added to sum, but sum is undefined so it needs to be initialize to something like -> var sum =0; that solved the problem!

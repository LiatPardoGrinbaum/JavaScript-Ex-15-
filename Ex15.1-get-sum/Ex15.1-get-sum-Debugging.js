/* # Note: We ask you not to solve the bug by finding it with your
eyes but to use the debugging tools we've learned!

What is wrong with this code?
1. First find the line that contains the problem. Write it down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */

function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]);

//explaining my solution:
//I have opened it with dev tools on chrome (on the html page- f12 then sources, then find the js file). I clicked on the line with error (line 12). then I refreshed it and noticed that inside "scope" is written that arr1, arr2, and sum are undefined.
//I changed the arguments of the getSum function (when calling it) to valid arrays seperate with comma.
//getSum([1, 2, 3],[5, 66, 23]); instead of getSum([1, 2, 3][(5, 66, 23)]);
//then ran it again and found the bug of sum - sum needs to be declared with let and not with const, so it can be changed- I fixed it and ran the function again. that move with f10 (inside the dev tool) to see the progress of the calculations.

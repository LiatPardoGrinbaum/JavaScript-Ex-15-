/* # Note: We ask you not to solve the bug by
finding it with your eyes but to use the
debugging tools we've learned!
What is wrong with this code?
1. First find the line that contains the problem. Write it
down.
2. Which debug method did you use to find the bug?
3. Explain the bug in your own words.
4. Fix the code and submit it all. */

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");

//I've opened it with dev tool (on the html page- f12 then sources, then find the js file).there was no error sign. I clicked line 12 then refreshed it. then started checking with f10. I found out that counter varaible isn't changing even though the if statement is true. that's because it's not being saved in any varaible. I changed it to counter+=1 (instead of counter +1).

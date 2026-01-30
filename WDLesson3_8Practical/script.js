
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
 function volume(){
  

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
  /* line 11 "getElementById" This function does not exist in JavaScript. * line 13 By in get element by it isnt capital*/
  let r = parseInt(document.getElementById("r").value);
  let height = parseInt(document.getElementById("height").value);

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
  /* line 16 output is spelled with a capital o in the html script this is not supposted to have a .value*/
  let output = document.getElementById("Output");

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
  /* height is referred to as "h" instead of height and "math" should be spelled with a capital M formula is times height not divided by height */

  let v = Math.PI * Math.pow(r,2) * height;

  /* Challenge 8: Are there any errors in displaying the output? */
  /* line 23 not closed with a ` */
  output.innerHTML = `Volume of the cylinder is ${v}`
}

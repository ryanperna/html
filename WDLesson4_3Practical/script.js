/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/
function calcBMI(){
let h = parseFloat(document.getElementById("height").value);
let w = parseFloat(document.getElementById("weight").value);
let c = 703* (w / Math.pow(h, 2));
let message = "";
let op = document.getElementById("output");

if (c > "18.5"){
       message = "Underweight"
}else if (c <= "18.5 && c >= 24.9)
       message = "Healthy weight";
}




op.innerHTML = `your bmi is ${c} ${message}`

}
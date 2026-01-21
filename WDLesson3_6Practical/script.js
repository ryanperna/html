function calculateAverage() {
  const g1 = parseFloat(document.getElementById("grade1").value);
  const g2 = parseFloat(document.getElementById("grade2").value);
  const g3 = parseFloat(document.getElementById("grade3").value);
  const avg = ((g1 + g2 + g3) / 3).toFixed(2);
  document.getElementById("averageResult").innerHTML = "Average:" + avg;
}

function calculateSlope() {
  const x1 = parseFloat(document.getElementById("x1").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);
  const slope = ((y2 - y1) / (x2 - x1)).toFixed(2);
  document.getElementById("slopeResult").innerHTML = "Slope:" + slope;
}

function calculateBMI() {
  const h = parseFloat(document.getElementById("height").value);
  const w = parseFloat(document.getElementById("weight").value);
  const bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerHTML = "BMI:" + bmi;
}

}
// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.


// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

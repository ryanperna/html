function calculateAverage() {
  let g1 = parseFloat(document.getElementById("grade1").value);
  let g2 = parseFloat(document.getElementById("grade2").value);
  let g3 = parseFloat(document.getElementById("grade3").value);

  let avg = (g1 + g2 + g3) / 3;

  document.getElementById("Output").innerHTML = "Average: " + avg;
}

function calculateSlope() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);

  let slope = (y2 - y1) / (x2 - x1);

  document.getElementById("Output2").innerHTML = "Slope: " + slope;
}

function calculateBMI() {
  let h = parseFloat(document.getElementById("height").value);
  let w = parseFloat(document.getElementById("weight").value);

  let bmi = w / (h * h);

  document.getElementById("Output3").innerHTML = "BMI: " + bmi;
}


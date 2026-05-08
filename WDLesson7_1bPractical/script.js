



async function init(){  
  let output = document.getElementById("output");
  let result = document.getElementById("results");
  let link = "data.js"; //let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();

  output = get("output");
  result = get("result");
  let build = "";
  let ct = 0;

  //Challenge 2: Test the function card() developed in Challenge 1 by displaying only the first violation to the webpage.

 
for(let i = 0; i < data.length; i++){
  let f = data[i];
  build += card(f);
  ct++;
}

output.innerHTML = build;
}

// Challenge 4: Create a function to filter the information and display only the cards that satisfy specfic condition(s).
function filterByPlate(plate){
  let result = document.getElementById("results");
  let output = document.getElementById("output");
  let splate = document.getElementById("platenum").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let s = data[i];
    if(s.plate == splate){
      build += card(s);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}

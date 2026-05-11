




async function init(){  
  let output = document.getElementById("output");
  let link = "data.js"; //let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  output = get("output");
  result = get("result");
  let build = "";
  

  //Challenge 2: Test the function card() developed in Challenge 1 by displaying only the first violation to the webpage.

 
for(let i = 0; i < data.length; i++){
  let f = data[i];
  build += card(f);

}

output.innerHTML = build;
}

// Challenge 4: Create a function to filter the information and display only the cards that satisfy specfic condition(s).
function filterByPlate(plate){
  
  let output = document.getElementById("output");
  let splate = document.getElementById("platenum").value;
  let build = "";
  
  

  for(let i = 0; i < data.length; i++){
    let s = data[i];
    if(s.plate == splate){
      build += card(s);
      ;
    }
  }
  output.innerHTML = build;
}

let data, info;

async function init(){   
  let link = "MOTO.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let M = data[i];
    build += `<div class="fitted card">
                 <h3>${M.on_street_name}</h3>
                 <hr>
                 <p>${M.off_street_name}</p>
                 <p>${M.crash_date}</p>
                 <p>${M.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>Vehicle type- ${M.vehicle_type_code1}</p>
                 <hr>
                 <p>ID ${M.collision_id}</p>
              </div>`    
  }
  output.innerHTML = build;


let vtypes = fillDropDown("vehicle_type_code1");
  document.getElementById("vtypes").innerHTML = vtypes;




}


function SearchByID(){
  let output = document.getElementById("output");
  let collision_id = document.getElementById("ID").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let M = data[i];
    if(M.collision_id == collision_id){
     build += `<div class="fitted card">
                 <h3>${M.on_street_name}</h3>
                 <hr>
                 <p>${M.off_street_name}</p>
                 <p>${M.crash_date}</p>
                 <p>${M.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>Vehicle type- ${M.vehicle_type_code1}</p>
                 <hr>
                 <p>ID ${M.collision_id}</p>
              </div>`    
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function SearchStreetAndFactor(){
  let output = document.getElementById("output");
  let street = document.getElementById("streetBox").value.trim();
  let factor = document.getElementById("factorBox").value.trim();
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let M = data[i];

   
    let streetMatch = street === "" || M.on_street_name == street;
    let factorMatch = factor === "" || M.contributing_factor_vehicle_1 == factor;

    if(streetMatch && factorMatch){
      build += `<div class="fitted card">
                  <h3>${M.on_street_name}</h3>
                  <hr>
                  <p>${M.off_street_name}</p>
                  <p>${M.crash_date}</p>
                  <p>${M.contributing_factor_vehicle_1}</p>
                  <hr>
                  <p>Vehicle type- ${M.vehicle_type_code1}</p>
                  <hr>
                  <p>ID ${M.collision_id}</p>
                </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterbyvtype(){
  let output = document.getElementById("output");
  let vtype = document.getElementById("vtypes").value;
  let result = document.getElementById("result");

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let M = data[i];
    if(M.vehicle_type_code1 == vtype){  
      build += `<div class="fitted card">
                  <h3>${M.on_street_name}</h3>
                  <hr>
                  <p>${M.off_street_name}</p>
                  <p>${M.crash_date}</p>
                  <p>${M.contributing_factor_vehicle_1}</p>
                  <hr>
                  <p>Vehicle type- ${M.vehicle_type_code1}</p>
                  <hr>
                  <p>ID ${M.collision_id}</p>
                </div>`;
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}



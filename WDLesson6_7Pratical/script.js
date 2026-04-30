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

function SearchByStreet(){
  let output = document.getElementById("output");
  let off_street_name = document.getElementById("Off").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let M = data[i];
    if(M.off_street_name == off_street_name){
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

function fillDropDown(key){
  let list = [];
  let build = `<option>Select Option</option>`
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let field of list){
      build += `<option>${field}</option>`;
  }
  return build;
}
function filterbyvtype(){
  let vtypes = fillDropDown("contributing_factor_vehicle_1");
  document.getElementById("vtype").innerHTML = d4eefs;
  let output = document.getElementById("output");
  let contributing_factor_vehicle_1 = document.getElementById("vtpye").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let M = data[i];
    if(M.contributing_factor_vehicle_1 == contributing_factor_vehicle_1){
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
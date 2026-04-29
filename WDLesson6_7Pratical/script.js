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
  let borough = document.getElementById("ID").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
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
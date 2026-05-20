//Data Source: https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95
//global variables
let data, info, output;

async function init(){
  let link = "mvc.json"; //https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data); 
}

function accidentsByBorough(){
  //Variables to keep count of accidents by borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;

  //Tallying the count of accidents by borough
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData,"chart",chartType)
}

function accidentsByVehicle(){
  //Challenge: Create the same functionality as in the function accidentsByVehicle() above, except you will be aggregating for the following vehicle types: 'Sedan', 'Station Wagon/Sport Utility Vehicle', 'Taxi', 'Bus', 'Motorcycle' and "Other".  "Other" isn't a vehicle type but simply meant to capture all other vehicles.
 let b = 0, bt = 0, p = 0, sw = 0, s = 0;

  //Tallying the count of accidents by borough
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.vehicle_type_code1 == "Bus"){
      b++;
    }else if(accident.vehicle_type_code1 == "Station Wagon/Sport Utility Vehicle"){
      sw++;
    }else if(accident.vehicle_type_code1 == "Box Truck"){
      bt++;
    }else if(accident.vehicle_type_code1 == "Pick-up Truck"){
      p++;
    }else if(accident.vehicle_type_code1 == "Sedan"){
      s++;
    }
  }

  //Creating data for chart (as array of arrays) with 1st position of array being label
  let chartData2 = [
    ["Bus",b],
    ["Station Wagon/Sport Utility Vehicle",sw],
    ["Box Truck", bt],
    ["Pick-up Truck", p],
    ["Sedan", s]
  ];

  //Retrieving chart type from user's selection of drop-down
  let chartType2 = get("chartType").value;  
  
  //Generate and display chart
  displayChart(chartData2,"chart",chartType2)
}

  //Variables to keep count of vehicles by type
  

  //Tally the count of vehicles by type using decisions


  //Create data for chart (as array of arrays) with 1st position of array being label

  
  //Retrieve chart type from user's selection of drop-down

  
  //Generate and display chart




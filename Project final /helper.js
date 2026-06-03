// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Challenge 3: Create the function showMap() that displays the map for a location [lat, lon]
function showMap(lat,lon){
  




}

// Challenge 4: Create the function card() to generate an appropriate info card with the button to view map
function card( info ){ 
  let build = `<div class="card fitted">
                  <h3>${info.crash_date}</h3>
                  <hr>
                  <p>Location: ${info.crash_time}</p>
                  <h5>${info.borough}</h5>`;
                  if(info.latitude && info.longitude){
                    build += `<input type="button" value="Map" onclick="showMap( ${info.latitude}, ${info.longitude} )">`;
                  }
    build +=    `</div>`;
  return build;
}
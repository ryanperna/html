//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().


function get(id){
  return document.getElementById(id);

}
function card(data){
  return` <div class = "card">
          <h2> ${data.plate} </h2>
          <h3> ${data.state} </h3>
          <h4> ${data.license_type} </h4>
          <h5> ${data.summons_number}</h5>
          </div>;`
}
    
 


//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.


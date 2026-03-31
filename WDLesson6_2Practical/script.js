function BHS(){
  let build = "";
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");
  
  build += ` <div class = "card">
             <h2> ${school.name}</h2>
             <img src = "${school.image}">
             <p>${school.address}</p>
             </div>`;
  output.innerHTML = build;

  //Challenge 1: Create and display a card of the information contained in the JSON variable school

}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let build = "";
  let artist = {
    "name":"Playboi Carti",
    "image":"carti.webp",
    "album":"self.webp",
    "albumurl":"https://en.wikipedia.org/wiki/Playboi_Carti_(mixtape)",
    "url":"https://en.wikipedia.org/wiki/Playboi_Carti"
  };
  let output = document.getElementById("output");
   //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.

  build += `<div class = "card">
           <h2>${artist.name}</h2>
           <img src = "${artist.image}">
           <a href = "${artist.albumurl}">
           <img src = "${artist.album}">
           </a>
           <a href = "${artist.url}">About Playboi Carti </a>
           </div>`;
  output.innerHTML = build ;
 
}



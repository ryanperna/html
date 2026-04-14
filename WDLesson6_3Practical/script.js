/* Challenges 4,5, and 6 below task you to transform the following parallel arrays into arrays of JSON
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"]
let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [18.99,27.99,21.99,15.99];

let seafood_titles = ["Clams","Crabs","Lobster","Scallop","Shrimp","Tuna"]
let seafood_images = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [8.99,12.99,30.59,23.95,10.99,5.99];

let dessert_titles = ["Flan","Passion Berry","Oreo Cup"]
let dessert_images = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [4.15,3.99,2.99];
*/

// Challenge 4: Create an array of JSON where each JSON contains the name, an image source and price for each Meat item.  
// Solution to Challenge 4 is provided below as an example in order to complete Challenges 5 and 6.
let meats = [
  { title: "Beef Tips", image: "beeftips.jpg", price: 18.99 },
  { title: "Brisket", image: "brisket.jpg", price: 27.99 },
  { title: "Ribeye", image: "ribeye.jpg", price: 21.99 },
  { title: "Steak", image: "steak.jpg", price: 15.99 }
];
// Challenge 5: Create an array of JSON where each JSON contains the name, an image source and price for each Seafood item.  
let sea = [
  { title: "clams", image: "clams.jpg", price: 15.99},
  { title: "crabs", image: "crabs.jpg", price: 32.99},
  { title: "lobster", image: "lobster.png", price: 27.99},
  { title: "scallops", image: "scallops.jpg", price: 15.99},
  { title: "shrimp", image: "shrimp.jpg", price: 12.99},
  { title: "tuna", image: "tuna.jpg", price: 15.99}
];

// Challenge 6: Create an array of JSON where each JSON contains the name, an image source and price for each Dessert item.  

let dessert = [
  { title: "flan", image: "flan.jpg", price: 12.99},
  { title: "oreocup", image: "oreocup.jpg", price: 10.99},
  { title: "passionberry", image: "passionberry.jpeg", price: 20.99}

];
function showMeats(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
 for (let m = 0; m <meats.length; m++ ){
    build += `<div class = "card">
              <h3> ${meats[m].title} </h3>
              <img src = "images/${meats[m].image}">
              <p>$${meats[m].price}</p> 
              </div>`;
            
}






  /* Challenge 7
     1) Using a 'for' loop and the array of JSON from Challenge 4, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.
     2) Change the title to "Meats". 
  */


  output.innerHTML = build;
  
  title.innerHTML = "Meats";
}

function showSeafood(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  for (let s = 0; s <sea.length; s++ ){
    build += `<div class = "card">
              <h3> ${sea[s].title} </h3>
              <img src = "images/${sea[s].image}">
              <p>$${sea[s].price}</p> 
              </div>`;
  }
  


  output.innerHTML = build;
  
  title.innerHTML = Seafood;

}

function showDesserts(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  for (let d = 0; d <dessert.length; d++ ){
    build += `<div class = "card">
              <h3> ${dessert[d].title} </h3>
              <img src = "images/${dessert[d].image}">
              <p>$${dessert[d].price}</p> 
              </div>`;
  }
  /* Challenge 9
     1) Using a 'for' loop and the array of JSON from Challenge 6, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.
     2) Change the title to "Desserts".
  */


  output.innerHTML = build;
  // Write the title "Desserts" in the div with id 'title'
  title.innerHTML = Desserts;

}

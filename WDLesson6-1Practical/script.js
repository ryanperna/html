/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [20.99, 18.99, 30.99,20.99];
let meat_titles = ["Beeftips", "Brisket", "Ribeye","Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = [15.99, 45.99, 35.99, 17.99, 13.99, 10.99];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];

let dessert_images = ["flan.jpg", "oreocup.jpg","passionberry.jpeg"];
let dessert_prices = [17.99, 10.99, 12.99];
let dessert_titles = ["Flan", "OreoCup", "PassionBerry"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  
for(let x = 0; x < meat_images.length; x++){
  build += `<div class = "card">
            <img src = "images/${meat_images[x]}">
            <h2>${meat_prices[x]}</h2>
            <p> ${meat_titles[x]}</p>
  </div>`;

m.innerHTML= build;
}
for(let y = 0; y < seafood_images.length; y++){
    build += `<div class = "card">
              <img src = "images/${seafood_images[y]}">
              <h2>${seafood_prices[y]}</h2>
              <p>${seafood_titles[y]}</p>
    
    </div>`;
  s.innerHTML= build;
}
for(let z = 0; z < dessert_images.length; z++){
    build += `<div class = "card">
              <img src = "images/${dessert_images[z]}">
              <h2>${dessert_prices[z]}</h2>
              <p>${dessert_titles[z]}</p>
    
    </div>`;
  d.innerHTML= build;
}

    }




  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 

  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.



import data from './assets/recipes.json' assert { type: 'json' };
console.log(data);
let dataArr = data.results;
console.log(dataArr);

let ingredient ="";
const searchBtn=document.getElementById('search-btn');
const mainRecipeDiv=document.getElementById('main-recipe-div');

// let recipeName=document.getElementsByClassName('recipe-name');
// let userRating=document.getElementsByClassName('user-rating');
// let recipeImage=document.getElementsByClassName('recipe-img');
// let description=document.getElementsByClassName('description');
// let ingredients=document.getElementsByClassName('ingredient');
// let instructions=document.getElementsByClassName('instructions');
// let nutrition=document.getElementsByClassName('nutrition');
// let recipeVideo=document.getElementsByClassName('recipe-video');
// let difficulty=document.getElementsByClassName('difficulty');
// let mealType=document.getElementsByClassName('meal-type');
// let cookTime=document.getElementsByClassName('cook-time');

function handleInputValue(){
  //e.preventdefault();
  console.log('button clicked');
  
  let searchInput=document.getElementById('search-input');
  ingredient = searchInput.value;
  console.log(ingredient);
  const result = findNestedData(dataArr, ingredient);

  console.log(result);

}

searchBtn.addEventListener('click', ()=>handleInputValue());



function displayRecipeData(  ){
  console.log('show data now');
}


let findNestedData = (data, ingredient) => {
  let results = [];
  
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].sections[0].components.length; j++) {
      if (data[i].sections[0].components[j].ingredient.name == ingredient) {
        console.log(i);
        results.push(data[i]);
        break;
      }
      if (data[i].children) {
          const childResults = findNestedData(data[i].children, ingredient);
          results = results.concat(childResults);
        }
      }    
    }
    displayRecipeOptions(results);
    return results;
}
    
function displayRecipeOptions(arr){
  let recipeCards="";
  for(let i = 0; i < arr.length; i++){
    
    console.log(arr[i].name);
    recipeCards += `

    <div class="m-3">
      
        <div class="card h-100 m-3 text-black" style="width: 18rem;">
         
          <img src=${arr[i].beauty_url} class="card-img-top" alt="" width="300" height="300" >
          
          <div class="card-body">

            <h5 class="card-title">${arr[i].name}</h5>

            <p class="card-text">${arr[i].description}</p>

            <a href="#" class="btn btn-primary">View Recipe</a>
          
          </div>

        </div>
      
    </div>

    `;
  }
  mainRecipeDiv.innerHTML=recipeCards;
}














//***********************************************************************
// //! name of dish
// console.log('name of dish: ', data.results[1].name);

// //! image of dish
// console.log('image: ', data.results[1].beauty_url);


// //! description of the dish
// console.log('Description: ',data.results[1].description);

// //! Ingredients
// console.log('ingredients:');
// console.log(data.results[1].sections[0].components[0].measurements[0].quantity);
// console.log(data.results[1].sections[0].components[0].measurements[0].unit.abbreviation);
// //console.log(data.results[1].sections[0].components.length);
// for(let i = 0; i < data.results[1].sections[0].components.length; i++){
//   console.log(data.results[1].sections[0].components[i].ingredient.name);
// }
// //console.log(data.results[1].sections[0].components[0].ingredient.name); //*** 
// //console.log(data.results[1].sections[0].components[0].ingredient.display_singular);
// //console.log(data.results[1].sections[0].components[0].ingredient.display_plural);
// console.log(data.results[1].sections[0].components[0].extra_comment);

// //! Number of servings
// //console.log(data.results[1].num_servings);
// console.log(data.results[1].yields);

// //! Step by step instructions
// console.log('Step ', data.results[1].instructions[0].position);
// console.log(data.results[1].instructions[0].display_text);
// console.log('Step ', data.results[1].instructions[1].position);
// console.log(data.results[1].instructions[1].display_text);
// console.log('Step ', data.results[1].instructions[2].position);
// console.log(data.results[1].instructions[2].display_text);
// console.log('Step ', data.results[1].instructions[3].position);
// console.log(data.results[1].instructions[3].display_text);
// console.log('Step ', data.results[1].instructions[4].position);
// console.log(data.results[1].instructions[4].display_text);
// console.log('Step ', data.results[1].instructions[5].position);
// console.log(data.results[1].instructions[5].display_text);
// console.log('Step ', data.results[1].instructions[6].position);
// console.log(data.results[1].instructions[6].display_text);
// console.log('Step ', data.results[1].instructions[7].position);
// console.log(data.results[1].instructions[7].display_text);
// console.log('Step ', data.results[1].instructions[8].position);
// console.log(data.results[1].instructions[8].display_text);


// //! nutrition facts
// console.log('Calories: ', data.results[1].nutrition.calories);
// console.log('Carbs: ', data.results[1].nutrition.carbohydrates);
// console.log('Fiber: ', data.results[1].nutrition.fiber);
// console.log('Protein: ', data.results[1].nutrition.protein);
// console.log('Fat: ', data.results[1].nutrition.fat);
// console.log('Sugar: ', data.results[1].nutrition.sugar);

// //! Video of how to prepare
// console.log('Video: ', data.results[1].original_video_url);
// //console.log(data.results[1].video_url);

// //! Difficulty Easy, Medium, Hard
// console.log('Difficulty: ', data.results[1].topics[0].name);

// //! Meal Time Type Breakfast, Lunch, Dinner
// console.log('Meal Time: ', data.results[1].topics[3].name);

// //! Cook time
// console.log('Cook Time: ', data.results[1].total_time_tier
// .display_tier);

// //! User Rating out of 100%
// console.log('User Rating: ', data.results[1].user_ratings.score);
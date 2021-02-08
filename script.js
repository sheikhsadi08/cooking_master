// search event controller.
const searchMeal = () => {
  const start = document.getElementById("meal-item");
  start.innerHTML = "";
  const userInput = document.getElementById('userInput');
  const getInput = userInput.value;
  console.log(getInput);

if(getInput !== "") {
  document.getElementById("alertMessage").style.display = "none";
  document.getElementById("alertMessage2").style.display = "none";
  mealDataLoad(getInput);
} else if (getInput == "") {
  document.getElementById("alertMessage").style.display = "block";
}
}


// meal data load from server.
async function mealDataLoad(name) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const data = await response.json();
    const meal = data.meals;
    displayMeal(meal);
  } catch(error) {
      document.getElementById("alertMessage2").style.display = "block";
  }
}


// display meal function.
const displayMeal = mealItem => {
  const mealItems = document.getElementById("meal-item");

  mealItem.forEach(meal => {
    const mealBox = document.createElement("div");
    mealBox.id = "mealBoxItem";
    mealBox.className = "meal-box";
    const mealInfo = `
    <img class="meal-box-img" src="${meal.strMealThumb}">
    <h3 class="meal-box-text">${meal.strMeal}</h3>
    `
    mealBox.innerHTML = mealInfo;
    mealItems.appendChild(mealBox);
    document.getElementById("mealSectionParent").style.display = "block";
  });
}


// search button handler.
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", searchMeal);



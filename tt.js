const firstMeal = "breakfast"

var meals = { firstMeal: "oatmeal" }

console.log(meals.breakfast + " and " + meals['breakfast'] + " are the same")
console.log(meals[firstMeal])
console.log("But when you use .notation like meals.firstMeal will result in " + meals.firstMeal)

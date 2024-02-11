const fs = require('fs');
const jsonString = fs.readFileSync('test.json', 'utf-8');

const jsonData = JSON.parse(jsonString);
{
    /*
    const id_meal = new Map()
    const id_dish = new Map()
    const key = Object.keys(jsonData.calendar.mealIdToDayId)
    const keyOfDate = Object.keys(jsonData.calendar.dateToDayId)
    for (const i of key) {
        const t = jsonData.calendar.mealIdToDayId[i]
        id_meal.set(t, id_meal.get(t) + 1 || 1)
    }
    for (const i of keyOfDate) {
        id_dish.set(i, id_meal.get(jsonData.calendar.dateToDayId[i]) || 0)
    }
    console.log(id_dish)*/
}
{
    const id_meal = new Map()
    const id_dish = new Map()
    const idDishMeal = new Map()
    const key = Object.keys(jsonData.calendar.mealIdToDayId)
    const keyOfDate = Object.keys(jsonData.calendar.dateToDayId)
    const keyOoDish = Object.keys(jsonData.calendar.dishIdToMealId)
    for (const i of keyOoDish) {
        const t = jsonData.calendar.dishIdToMealId[i]
        idDishMeal.set(t, idDishMeal.get(t) + 1 || 1)
    }
     
    for (const i of key) {
        const t = jsonData.calendar.mealIdToDayId[i]
        
        id_meal.set(t,(id_meal.get(Number(t))||0) +idDishMeal.get(Number(i)) || 0)
    }
    //console.log(id_meal)
    for (const i of keyOfDate) {
        const t = jsonData.calendar.dateToDayId[i]
        //console.log(i+' '+t)
        id_dish.set(i,id_meal.get(t) || 0)
    }
    console.log(id_dish)
}
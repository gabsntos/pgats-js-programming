import {dogs, food} from './data-export.js'

dogs.forEach((dog, index) => {
    const foodItem = Object.values(food[index])[0]
    console.log(`The food ${foodItem} was given to ${dog}`);
});

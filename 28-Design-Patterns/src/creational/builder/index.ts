import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();

console.log(mainDishBuilder.getMeal());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

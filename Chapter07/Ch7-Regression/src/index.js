import * as data from './data';
import regression from 'regression';

console.log("Performing linear regression:");
console.log("=============================");
const linearModel = regression.linear(data.linear);
console.log("Slope and intercept:");
console.log(linearModel.equation);
console.log("Line formula:");
console.log(linearModel.string);
console.log("R^2 fitness: " + linearModel.r2);
console.log("Predict X = 75: " + linearModel.predict(75)[1]);


console.log("Performing exponential regression:");
console.log("=============================");
const expModel = regression.exponential(data.exponential);
console.log("Initial value and rate:");
console.log(expModel.equation);
console.log("Exponential formula:");
console.log(expModel.string);
console.log("R^2 fitness: " + expModel.r2);
console.log("Predict X = -1: " + expModel.predict(-1)[1]);


console.log("Performing polynomial regression:");
console.log("=============================");
const polyModel = regression.polynomial(data.polynomial, {order: 4});
console.log("Polynomial parameters");
console.log(polyModel.equation);
console.log("Polynomial formula:");
console.log(polyModel.string);
console.log("R^2 fitness: " + polyModel.r2);
console.log("Predict X = 6: " + polyModel.predict(6)[1]);


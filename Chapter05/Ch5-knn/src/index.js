import KNN from './knn.js';
import {colors_16, weight_height} from './data.js';
import decolorize from './decolorize.js';

console.log("Testing height and weight with k=5");
console.log("==========================");

const solver1 = new KNN(5, weight_height.data, weight_height.labels);

console.log("Testing a 'definitely male' point:");
console.log(solver1.predict([200, 75]));
console.log("\nTesting a 'probably male' point:");
console.log(solver1.predict([170, 70]));
console.log("\nTesting a 'totally uncertain' point:");
console.log(solver1.predict([140, 64]));
console.log("\nTesting a 'probably female' point:");
console.log(solver1.predict([130, 63]));
console.log("\nTesting a 'definitely female' point:");
console.log(solver1.predict([120, 60]));


console.log("Decolorizing images");
console.log("==========================");

['landscape.jpeg', 'lily.jpeg', 'waterlilies.jpeg'].forEach(filename => {
    console.log("Decolorizing " + filename + '...');
    decolorize('./files/' + filename)
        .then(() => console.log(filename + " decolorized"));
});


import tags from './instagram-tags-fashion.json';
import receipts from './retail-data.json';
import Apriori  from 'apriori';
import {FPGrowth} from 'node-fpgrowth';

const results = (new Apriori.Algorithm(0.05, 0.9, false))
    .analyze(receipts);

console.log(results.associationRules
    .sort((a, b) => a.confidence > b.confidence ? -1 : 1));

// console.log(results.associationRules.length);

//
// const fpgrowth = new FPGrowth(0.009);
// fpgrowth.on('data', itemset => {
//     console.log("SINGLE ITEM");
//     console.log(itemset);
// })
// fpgrowth.exec(receipts)
//     .then(result => {
//         console.log(result.itemsets);
//         console.log("Completed in " + result.executionTime + "ms.");
//     });

import SVM from 'libsvm-js/asm';
import IrisDataset from 'ml-dataset-iris';

import {RandomForestClassifier} from 'ml-random-forest';
import crossValidation from 'ml-cross-validation';

const data = IrisDataset.getNumbers();
const labels = IrisDataset.getClasses().map(
    (elem) => IrisDataset.getDistinctClasses().indexOf(elem)
);

const loss = (expected, actual) => {
    let incorrect = 0,
        len = expected.length;
    for (let i in expected) {
        if (expected[i] !== actual[i]) {
            incorrect++;
        }
    }
    return incorrect / len;
};


/**
 * SVM Test.
 */

console.log("Support Vector Machine");
console.log("======================");

const svm = new SVM({
    kernel: SVM.KERNEL_TYPES.RBF,
    type: SVM.SVM_TYPES.C_SVC,
    gamma: 0.25,
    cost: 1,
    quiet: true
});


svm.train(data, labels);

const svmPredictions = svm.predict(data);
const svmCvPredictions = svm.crossValidation(data, labels, 5);

console.log("Loss for predictions: " + Math.round(loss(labels, svmPredictions) * 100) + "%");
console.log("Loss for crossvalidated predictions: " + Math.round(loss(labels, svmCvPredictions) * 100) + "%");



/**
 Random Forest
 */


console.log("======================");
console.log("Random Forest");
console.log("======================");

const rfOptions = {
    maxFeatures: 3,
    replacement: true,
    nEstimators: 100,
    useSampleBagging: true
};

const rf = new RandomForestClassifier(rfOptions);
rf.train(data, labels);
const rfPredictions = rf.predict(data);

const confusionMatrix = crossValidation.kFold(RandomForestClassifier, data, labels, rfOptions, 10);
const accuracy = confusionMatrix.getAccuracy();

console.log("Predictions:");
console.log(rfPredictions.join(","));
console.log("\nLoss for predictions: " + Math.round(loss(labels, rfPredictions) * 100) + "%");
console.log("Loss for crossvalidated predictions: " + Math.round( (1 - accuracy) * 100) + "%\n");
console.log(confusionMatrix);


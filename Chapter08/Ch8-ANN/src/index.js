import * as tf from '@tensorflow/tfjs';

// Set up a sequential model (aka, vanilla neural network)
const model = tf.sequential();

// Add our layers
model.add(tf.layers.dense({units: 4, activation: 'relu', inputDim: 2}));
model.add(tf.layers.dense({units: 4, activation: 'relu', inputDim: 2}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

// Prepare the model for training: Specify the loss and the optimizer.
const learningRate = 1;
const optimizer = tf.train.sgd(learningRate);
model.compile({loss: 'binaryCrossentropy', optimizer, metrics: ['accuracy']});

// XOR data x values.
const xs = tf.tensor([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1]
],
// Shape of the tensor is 4 rows x 2 cols
[4, 2]);

// XOR data y values.
const ys = tf.tensor([ 0, 1, 1, 0 ], [4, 1]);


// Train the model using the data.
model.fit(xs, ys, {epochs: 1000}).then(() => {
    // Use the model to do inference on a data point the model hasn't seen before:
    console.log("Done training. Evaluating model...");

    const r = model.evaluate(xs, ys);
    console.log("Loss: ");
    r[0].print();
    console.log("Accuracy: ");
    r[1].print();

    console.log("Testing 0, 0");
    model.predict(tf.tensor2d([0, 0], [1, 2])).print();
    console.log("Testing 0, 1");
    model.predict(tf.tensor2d([0, 1], [1, 2])).print();
    console.log("Testing 1, 0");
    model.predict(tf.tensor2d([1, 0], [1, 2])).print();
    console.log("Testing 1, 1");
    model.predict(tf.tensor2d([1, 1], [1, 2])).print();
});
import readline from 'readline';
import fs from 'fs';
import BayesClassifier, {simpleTokenizer} from "./bayes";

const classifier = new BayesClassifier(simpleTokenizer);

const trainer = (filename, label, classifier) => {

    return new Promise((resolve) => {
        console.log("Training " + label + " examples...");
        readline.createInterface({
            input: fs.createReadStream(filename)
        })
            .on('line', line => classifier.train(label, line))
            .on('close', () => {
                console.log("Finished training " + label + " examples.");
                resolve();
            });
    });

}

const tester = (filename, label, classifier) => {

    return new Promise((resolve) => {
        let total = 0;
        let correct = 0;
        console.log("Testing " + label + " examples...");
        readline.createInterface({ input: fs.createReadStream(filename) })
            .on('line', line => {
                const prediction = classifier.predict(line);
                total++;
                if (prediction.label === label) {
                    correct++;
                }
            })
            .on('close', () => {
                console.log("Finished testing " + label + " examples.");
                const results = {total, correct};
                console.log(results);
                resolve(results);
            });
    });

}

Promise.all([
    trainer('./data/train_positive.txt', 'positive', classifier),
    trainer('./data/train_negative.txt', 'negative', classifier)
]).then(() => {
    console.log("Finished training. Now testing.");

    Promise.all([
        tester('./data/test_negative.txt', 'negative', classifier),
        tester('./data/test_positive.txt', 'positive', classifier)
    ])
        .then(results => results.reduce(
            (obj, item) => ({total: obj.total + item.total, correct: obj.correct + item.correct}), {total: 0, correct: 0}
        ))
        .then(results => {
            const pct = (100 * results.correct / results.total).toFixed(2) + '%';
            console.log(results);
            console.log("Test results: " + pct);
        })
    ;


})

// Promise.all([
//     trainer('./data/train_positive.txt', 'positive', classifier),
//     trainer('./data/train_negative.txt', 'negative', classifier)
// ]).then(() => {
//
//     const tests = [
//         "i really hated this awful movie, it was so bad I didn't even know what to do with myself",
//         "this was the best movie i've ever seen. it was so exciting, i was on the edge of my seat every minute",
//         "i am indifferent about this"
//     ];
//
//     tests.forEach(test => {
//         console.log("Testing: " + test);
//         const result = classifier.predict(test);
//         console.log(result);
//     });
//
//
// });

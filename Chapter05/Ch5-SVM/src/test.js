import IrisDataset from 'ml-dataset-iris';
const RandomForestClassifier = require('random-forest-classifier').RandomForestClassifier

const data = IrisDataset.getDataset().map(e => {
    return {sl: e[0], sw: e[1], pl: e[2], pw: e[3], species: e[4]};
});

var rf = new RandomForestClassifier({
    n_estimators: 10
});

console.log(data);
rf.fit(data, null, "species", function(err, trees){
    // console.log(JSON.stringify(trees, null, 4));
    var pred = rf.predict(data, trees);

    console.log(pred);

    // pred = ["virginica", "setosa"]
});

/**
 * Calculate the distance between two points.
 * Points must be given as arrays or objects with equivalent keys.
 * @param {Array.<number>} a
 * @param {Array.<number>} b
 * @return {number}
 */
const distance = (a, b) => Math.sqrt(
    a.map((aPoint, i) => b[i] - aPoint)
        .reduce((sumOfSquares, diff) => sumOfSquares + (diff*diff), 0)
);

class KNN {

    constructor(k = 1, data, labels) {
        this.k = k;
        this.data = data;
        this.labels = labels;
    }

    generateDistanceMap(point) {

        const map = [];
        let maxDistanceInMap;

        for (let index = 0, len = this.data.length; index < len; index++) {

            const otherPoint = this.data[index];
            const otherPointLabel = this.labels[index];
            const thisDistance = distance(point, otherPoint);

            /**
             * Keep at most k items in the map.
             * Much more efficient for large sets, because this
             * avoids storing and then sorting a million-item map.
             * This adds many more sort operations, but hopefully k is small.
             */
            if (!maxDistanceInMap || thisDistance < maxDistanceInMap) {

                // Only add an item if it's closer than the farthest of the candidates
                map.push({
                    index,
                    distance: thisDistance,
                    label: otherPointLabel
                });

                // Sort the map so the closest is first
                map.sort((a, b) => a.distance < b.distance ? -1 : 1);

                // If the map became too long, drop the farthest item
                if (map.length > this.k) {
                    map.pop();
                }

                // Update this value for the next comparison
                maxDistanceInMap = map[map.length - 1].distance;

            }
        }


        return map;
    }

    predict(point) {

        const map = this.generateDistanceMap(point);
        const votes = map.slice(0, this.k);
        const voteCounts = votes
            // Reduces into an object like {label: voteCount}
            .reduce((obj, vote) => Object.assign({}, obj, {[vote.label]: (obj[vote.label] || 0) + 1}), {})
        ;
        const sortedVotes = Object.keys(voteCounts)
            .map(label => ({label, count: voteCounts[label]}))
            .sort((a, b) => a.count > b.count ? -1 : 1)
        ;

        return {
            label: sortedVotes[0].label,
            voteCounts,
            votes
        };

    }

}

export default KNN;
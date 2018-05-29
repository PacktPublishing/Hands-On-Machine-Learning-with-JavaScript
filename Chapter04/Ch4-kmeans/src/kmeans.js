/**
 * Calculate the mean of an array of numbers.
 * @param {Array.<number>} numbers
 * @return {number}
 */
const mean = numbers => numbers.reduce((sum, val) => sum + val, 0) / numbers.length;

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

/**
 * Determines "k" cluster centroids given a list of points,
 * using the k-means algorithm.
 *
 * Basic usage:
 *
 *     const numberOfCentroids = 3;
 *     const arrayOfDataPoints = [ [1, 2], [3, 3], ... ];
 *     const maxAllowedIterations = 1000;
 *     const kMeansSolver = new KMeans(numberOfCentroids, arrayOfDataPoints);
 *     const {centroids, iteration, error, didReachSteadyState} = kMeansSolver.solve(maxAllowedIterations);
 *     // Reset the solver if you wish to run it again:
 *     kMeansSolver.reset();
 *     // Inspect iteration logs to debug:
 *     console.log(kMeansSolver.iterationLogs)
 *
 * You MUST make sure that all data points given to this algorithm
 * have the same number of dimensions; you can not mix 2d points
 * with 3d points, for instance.
 */
class KMeans {

    /**
     * @param k
     * @param data
     */
    constructor(k, data) {
        this.k = k;
        this.data = data;
        this.reset();
    }

    /**
     * Resets the solver state; use this if you wish to run the
     * same solver instance again with the same data points
     * but different initial conditions.
     */
    reset() {
        this.error = null;
        this.iterations = 0;
        this.iterationLogs = [];
        this.centroids = this.initRandomCentroids();
        this.centroidAssignments = [];
    }

    /**
     * Determines the number of dimensions in the data set.
     * @return {number}
     */
    getDimensionality() {
        const point = this.data[0];
        return point.length;
    }

    /**
     * For a given dimension in the data set, determine the minimum
     * and maximum value. This is used during random initialization
     * to make sure the random centroids are in the same range as
     * the data.
     *
     * @param n
     * @returns {{min: *, max: *}}
     */
    getRangeForDimension(n) {
        const values = this.data.map(point => point[n]);
        return {
            min: Math.min.apply(null, values),
            max: Math.max.apply(null, values)
        };
    }

    /**
     * Get ranges for all dimensions.
     * @see getRangeForDimension
     * @returns {Array} Array whose indices are the dimension number and whose members are the output of getRangeForDimension
     */
    getAllDimensionRanges() {
        const dimensionRanges = [];
        const dimensionality = this.getDimensionality();

        for (let dimension = 0; dimension < dimensionality; dimension++) {
            dimensionRanges[dimension] = this.getRangeForDimension(dimension);
        }

        return dimensionRanges;

    }

    /**
     * Initializes random centroids, using the ranges of the data
     * to set minimum and maximum bounds for the centroids.
     * You may inspect the output of this method if you need to debug
     * random initialization, otherwise this is an internal method.
     * @see getAllDimensionRanges
     * @see getRangeForDimension
     * @returns {Array}
     */
    initRandomCentroids() {

        const dimensionality = this.getDimensionality();
        const dimensionRanges = this.getAllDimensionRanges();
        const centroids = [];

        // We must create 'k' centroids.
        for (let i = 0; i < this.k; i++) {

            // Since each dimension has its own range, create a placeholder at first
            let point = [];

            /**
             * For each dimension in the data find the min/max range of that dimension,
             * and choose a random value that lies within that range.
             */
            for (let dimension = 0; dimension < dimensionality; dimension++) {
                const {min, max} = dimensionRanges[dimension];
                point[dimension] = min + (Math.random()*(max-min));
            }

            centroids.push(point);

        }

        return centroids;

    }

    /**
     * Given a point in the data to consider, determine the closest
     * centroid and assign the point to that centroid.
     * The return value of this method is a boolean which represents
     * whether the point's centroid assignment has changed;
     * this is used to determine the termination condition for the algorithm.
     * @param pointIndex
     * @returns {boolean} Did the point change its assignment?
     */
    assignPointToCentroid(pointIndex) {

        const lastAssignedCentroid = this.centroidAssignments[pointIndex];
        const point = this.data[pointIndex];
        let minDistance = null;
        let assignedCentroid = null;

        for (let i = 0; i < this.centroids.length; i++) {
            const centroid = this.centroids[i];
            const distanceToCentroid = distance(point, centroid);

            if (minDistance === null || distanceToCentroid < minDistance) {
                minDistance = distanceToCentroid;
                assignedCentroid = i;
            }

        }

        this.centroidAssignments[pointIndex] = assignedCentroid;

        return lastAssignedCentroid !== assignedCentroid;

    }

    /**
     * For all points in the data, call assignPointsToCentroids
     * and returns whether _any_ point's centroid assignment has
     * been updated.
     *
     * @see assignPointToCentroid
     * @returns {boolean} Was any point's centroid assignment updated?
     */
    assignPointsToCentroids() {
        let didAnyPointsGetReassigned = false;
        for (let i = 0; i < this.data.length; i++) {
            const wasReassigned = this.assignPointToCentroid(i);
            if (wasReassigned) didAnyPointsGetReassigned = true;
        }
        return didAnyPointsGetReassigned;
    }

    /**
     * Given a centroid to consider, returns an array
     * of all points assigned to that centroid.
     *
     * @param centroidIndex
     * @returns {Array}
     */
    getPointsForCentroid(centroidIndex) {
        const points = [];
        for (let i = 0; i < this.data.length; i++) {
            const assignment = this.centroidAssignments[i];
            if (assignment === centroidIndex) {
                points.push(this.data[i]);
            }
        }
        return points;
    }

    /**
     * Given a centroid to consider, update its location to
     * the mean value of the positions of points assigned to it.
     * @see getPointsForCentroid
     * @param centroidIndex
     * @returns {Array}
     */
    updateCentroidLocation(centroidIndex) {
        const thisCentroidPoints = this.getPointsForCentroid(centroidIndex);
        const dimensionality = this.getDimensionality();
        const newCentroid = [];
        for (let dimension = 0; dimension < dimensionality; dimension++) {
            newCentroid[dimension] = mean(thisCentroidPoints.map(point => point[dimension]));
        }
        this.centroids[centroidIndex] = newCentroid;
        return newCentroid;
    }

    /**
     * For all centroids, call updateCentroidLocation
     */
    updateCentroidLocations() {
        for (let i = 0; i < this.centroids.length; i++) {
            this.updateCentroidLocation(i);
        }
    }

    /**
     * Calculates the total "error" for the current state
     * of centroid positions and assignments.
     * Here, error is defined as the root-mean-squared distance
     * of all points to their centroids.
     * @returns {Number}
     */
    calculateError() {

        let sumDistanceSquared = 0;
        for (let i = 0; i < this.data.length; i++) {
            const centroidIndex = this.centroidAssignments[i];
            const centroid = this.centroids[centroidIndex];
            const point = this.data[i];

            // Un-comment this one to do a purely geometrical error calculation
            // const thisDistance = distance(point, centroid);

            // This version also considers the number of clusters; helpful for
            // our auto-solver so that it doesn't over-fit.
            const thisDistance = distance(point, centroid) + this.k;
            sumDistanceSquared += thisDistance*thisDistance;
        }

        this.error = Math.sqrt(sumDistanceSquared / this.data.length);
        return this.error;
    }

    /**
     * Run the k-means algorithm until either the solver reaches steady-state,
     * or the maxIterations allowed has been exceeded.
     *
     * The return value from this method is an object with properties:
     * {
     *  centroids {Array.<Object>},
     *  iteration {number},
     *  error {number},
     *  didReachSteadyState {Boolean}
     * }
     *
     * You are most likely interested in the centroids property of the output.
     *
     * @param {Number} maxIterations Default 1000
     * @returns {Object}
     */
    solve(maxIterations = 1000) {

        while (this.iterations < maxIterations) {

            const didAssignmentsChange = this.assignPointsToCentroids();
            this.updateCentroidLocations();
            this.calculateError();


            this.iterationLogs[this.iterations] = {
                centroids: [...this.centroids],
                iteration: this.iterations,
                error: this.error,
                didReachSteadyState: !didAssignmentsChange
            };

            if (didAssignmentsChange === false) {
                break;
            }

            this.iterations++;

        }

        return this.iterationLogs[this.iterationLogs.length - 1];

    }



}


export default KMeans;
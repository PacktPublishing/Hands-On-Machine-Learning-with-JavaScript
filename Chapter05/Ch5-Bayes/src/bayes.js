
export const simpleTokenizer = string => string
    .toLowerCase()
    .replace(/[^\w\d]/g, ' ')
    .split(' ')
    .filter(word => word.length > 3)
    // This "uniques" the tokens; only responsible for 0.5% accuracy boost
    // so could be dropped if performance is an issue
    // Note; does not preserve first-occurrence order. to preserve order,
    // use .reverse() before and after the filter
    .filter((word, index, arr) => arr.indexOf(word, index+1) === -1)
;

// 3% accuracy LOSS for the IMDB dataset vs simpleTokenizer
export const bigramTokenizer = string => {
    const unigrams = simpleTokenizer(string);
    const bigrams = [];
    for (let i = 0, len = unigrams.length; i < len - 1; i++) {
        bigrams.push(unigrams[i] + " " + unigrams[i+1]);
    }
    return bigrams;
}

class BayesClassifier {

    constructor(tokenizer = null) {
        this.database = {
            labels: {},
            tokens: {}
        };

        this.tokenizer = (tokenizer !== null) ? tokenizer : simpleTokenizer;

    }

    /**
     * Trains a given document for a label.
     * @param label
     * @param text
     */
    train(label, text) {
        this.incrementLabelDocumentCount(label);
        this.tokenizer(text).forEach(token => this.incrementTokenCount(token, label));
    }

    /**
     * Increments the count of documents in a given category/label
     * @param label
     */
    incrementLabelDocumentCount(label) {
        this.database.labels[label] = this.getLabelDocumentCount(label) + 1;
    }

    /**
     * Returns the number of documents seen for a given category/label.
     * If null is passed as the label, return the total number of training documents seen.
     * @param label
     */
    getLabelDocumentCount(label = null) {
        if (label) {
            return this.database.labels[label] || 0;
        } else {
            return Object.values(this.database.labels)
                .reduce((sum, count) => sum + count, 0);
        }
    }

    /**
     * Increment the count of a token observed with a given label.
     * @param token
     * @param label
     */
    incrementTokenCount(token, label) {
        if (typeof this.database.tokens[token] === 'undefined') {
            this.database.tokens[token] = {};
        }

        this.database.tokens[token][label] = this.getTokenCount(token, label) + 1;
    }

    /**
     * Get the number of times a token was seen with a given category/label.
     * If no label is given, returns the total number of times the token was seen
     * across all training examples.
     * @param token
     * @param label
     * @returns {*}
     */
    getTokenCount(token, label = null) {
        if (label) {
            return (this.database.tokens[token] || {})[label] || 0;
        } else {
            return Object.values(this.database.tokens[token] || {})
                .reduce((sum, count) => sum + count, 0);
        }
    }


    /**
     * Get all labels encountered during training.
     * @returns {Array}
     */
    getAllLabels() {
        return Object.keys(this.database.labels);
    }

    /**
     * Given a token and a label, calculate the probability that
     * the document has the label given that the token is in the document.
     * We do this by calculating the much easier to find Bayesian equivalent:
     * the probability that the token appears, given the label (the word frequency in that category).
     * This method also adjusts for rare tokens.
     * @param token
     * @param label
     * @returns {number}
     */
    calculateTokenScore(token, label) {
        const rareTokenWeight = 3;

        const totalDocumentCount = this.getLabelDocumentCount();
        const labelDocumentCount = this.getLabelDocumentCount(label);
        const notLabelDocumentCount = totalDocumentCount - labelDocumentCount;

        // Assuming equal probabilities gave us 1% accuracy bump over using the frequencies of each label
        const probLabel = 1 / this.getAllLabels().length;
        const probNotLabel = 1 - probLabel;

        const tokenLabelCount = this.getTokenCount(token, label);
        const tokenTotalCount = this.getTokenCount(token);
        const tokenNotLabelCount = tokenTotalCount - tokenLabelCount;

        const probTokenGivenLabel = tokenLabelCount / labelDocumentCount;
        const probTokenGivenNotLabel = tokenNotLabelCount / notLabelDocumentCount;
        const probTokenLabelSupport = probTokenGivenLabel * probLabel;
        const probTokenNotLabelSupport = probTokenGivenNotLabel * probNotLabel;

        const rawWordScore =
            (probTokenLabelSupport)
            /
            (probTokenLabelSupport + probTokenNotLabelSupport);

        // Adjust for rare tokens -- essentially weighted average
        // We're going to shorthand some variables to make reading easier.
        // s is the "strength" or the "weight"
        // n is the number of times we've seen the token total
        const s = rareTokenWeight;
        const n = tokenTotalCount;
        const adjustedTokenScore =
            ( (s * probLabel) + (n * (rawWordScore || probLabel)) )
            /
            ( s + n );



        return adjustedTokenScore;
    }

    /**
     * Given a token stream (ie a tokenized document), calculate the probability that
     * this document has a given label.
     * @param label
     * @param tokens
     * @returns {number}
     */
    calculateLabelProbability(label, tokens) {

        // We assume that the a-priori probability of all labels are equal.
        // You could alternatively calculate the probability based on label frequencies.
        const probLabel = 1 / this.getAllLabels().length;

        // How significant each token must be in order to be considered;
        // Their score must be greater than epsilon from the default token score
        // This basically filters out uninteresting tokens from consideration.
        // Responsible for 78% => 87.8% accuracy bump (e=.17) overall.
        const epsilon = 0.15;
        // For each token, we have to calculate a "token score", which is the probability of this document
        // belonging to a category given the token appears in it.
        const tokenScores = tokens
            .map(token => this.calculateTokenScore(token, label))
            .filter(score => Math.abs(probLabel - score) > epsilon);

        // To avoid floating point underflow when working with really small numbers,
        // we add combine the token probabilities in log space instead.
        // This is only used because of floating point math and should not affect the algorithm overall.
        const logSum = tokenScores.reduce((sum, score) => sum + (Math.log(1-score) - Math.log(score)), 0);
        const probability = 1 / (1 + Math.exp(logSum));

        return probability;
    }

    /**
     * Given a document, determine its probability for all labels/categories encountered in the training set.
     * The first element in the return array (element 0) is the label/category with the best match.
     * @param text
     * @returns {Array.<Object>}
     */
    calculateAllLabelProbabilities(text) {
        const tokens = this.tokenizer(text);
        return this.getAllLabels()
            .map(label => ({
                label,
                probability: this.calculateLabelProbability(label, tokens)
            }))
            .sort((a, b) => a.probability > b.probability ? -1 : 1);
    }

    /**
     * Given a document, predict its category or label.
     * @param text
     * @returns {{label: string, probability: number, probabilities: array}}
     */
    predict(text) {
        const probabilities = this.calculateAllLabelProbabilities(text);
        const best = probabilities[0];

        return {
            label: best.label,
            probability: best.probability,
            probabilities
        };

    }



}

export default BayesClassifier;
module.exports = class ScoringService {
    calculateScoreRelativeToPar(par, scores) {
        return scores.map(score => score ? score : 0).reduce((a, b) => a + b, 0) - par;
    }
    calculateOutScore(par, scores) {
        return scores.map(score => score ? score : 0).reduce((a, b) => a + b, 0) - par;
    }
    calculateInScore(par, scores) {
        return scores.map(score => score ? score : 0).reduce((a, b) => a + b, 0) - par;
    }
    calculateTotalScore(scores) {
        return scores.map(score => score ? score : 0).reduce((a, b) => a + b, 0);
    }
};
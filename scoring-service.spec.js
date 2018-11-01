let ScoringService = require("../scoring-service");

describe('ScoringService', () => {
    let scoringService;

    beforeEach(() => {
        scoringService = new ScoringService();
    });

   describe('calculateScoreRelativeToPar', () =>{
       it('calculates under par score correctly', function () {
           let par = 72;
           let playerScores = Array(18).fill(3, 0, 18);
           let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
           expect(scoreRelativeToPar).toEqual(-18);
       });
       it('calculates over par score correctly', function () {
           let par = 72;
           let playerScores = Array(18).fill(5, 0, 18);
           let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
           expect(scoreRelativeToPar).toEqual(18);
       });
       it('returns a number', function () {
           let par = 72;
           let playerScores = Array(18).fill(5, 0, 18);
           let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
           expect(typeof scoreRelativeToPar).toEqual('number');
       });
       it('calculates even when there are no scores', function () {
           let par = 72;
           let playerScores = Array(18);
           let scoreRelativeToPar = scoringService.calculateScoreRelativeToPar(par, playerScores);
           expect(scoreRelativeToPar).toEqual(-72);
       });
   });
   describe('calculateOutScore', () => {
       it('calculates under par score correctly', function () {
           let par = 36;
           let playerScores = Array(9).fill(3, 0, 9);
           let OutScore = scoringService.calculateOutScore(par, playerScores);
           expect(OutScore).toEqual(-9);
       });
       it('calculates over par score correctly', function () {
           let par = 36;
           let playerScores = Array(9).fill(5, 0, 9);
           let OutScore = scoringService.calculateOutScore(par, playerScores);
           expect(OutScore).toEqual(9);
       });
       it('returns a number', function () {
           let par = 36;
           let playerScores = Array(9).fill(5, 0, 9);
           let OutScore = scoringService.calculateOutScore(par, playerScores);
           expect(typeof OutScore).toEqual('number');
       });
       it('calculates even when there are no scores', function () {
           let par = 36;
           let playerScores = Array(9);
           let OutScore = scoringService.calculateOutScore(par, playerScores);
           expect(OutScore).toEqual(-36);
       });
   });
   describe('calculateInScore', () => {
       it('calculates under par score correctly', function () {
           let par = 36;
           let playerScores = Array(9).fill(3, 0, 9);
           let InScore = scoringService.calculateInScore(par, playerScores);
           expect(InScore).toEqual(-9);
       });
       it('calculates over par score correctly', function () {
           let par = 36;
           let playerScores = Array(9).fill(5, 0, 9);
           let InScore = scoringService.calculateInScore(par, playerScores);
           expect(InScore).toEqual(9);
       });
       it('returns a number', function () {
           let par = 36;
           let playerScores = Array(9).fill(5, 0, 9);
           let InScore = scoringService.calculateInScore(par, playerScores);
           expect(typeof InScore).toEqual('number');
       });
       it('calculates even when there are no scores', function () {
           let par = 36;
           let playerScores = Array(9);
           let InScore = scoringService.calculateInScore(par, playerScores);
           expect(InScore).toEqual(-36);
       });
    });
   describe('calculateTotalScore', () => {
       it('returns a number', function () {
           let playerScores = Array(18).fill(4, 0, 18);
           let TotalScore = scoringService.calculateTotalScore(playerScores);
           expect(typeof TotalScore).toEqual('number');
       });
       it('calculates score for each hole', function () {
           let playerScores = Array(18).fill(4, 0, 18);
           let TotalScore = scoringService.calculateTotalScore(playerScores);
           expect(TotalScore).toEqual(72);
       });
    });
});
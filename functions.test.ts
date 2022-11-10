const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
   
    test('if shuffleArray returns an array', () => {
        let answer = shuffleArray(array)
        expect(Array.isArray(answer)).toBe(true);
    })
 
    test('contains same items as the original array', () => {
        let answer= shuffleArray(array)
        expect(answer).toEqual(expect.arrayContaining(array));
    })

})
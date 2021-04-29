// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { setCharge, setMood, setPoki } from '../functions.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const charge = 'low';
    const mood = 'low';
    const poki = 'bulbasaur';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actualCharge = setCharge(3);
    const actualMood = setMood(3);
    const actualPoki = setPoki(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualCharge, charge);
    expect.equal(actualMood, mood);
    expect.equal(actualPoki, poki);
});

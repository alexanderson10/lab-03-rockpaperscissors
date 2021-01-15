// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';
import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('if getRandomThrow returns a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'string';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = typeof (getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does didUserWin return lose in a losing scenario', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does didUserWin return win in a winning scenario', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissor', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

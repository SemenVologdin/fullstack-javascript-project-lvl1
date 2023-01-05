import readlineSync from 'readline-sync'

import {cli} from '../src/cli.js'

const name = cli()

console.log('What is the result of the expression?')

const tryCount = 3
for( let i = 0; i < tryCount; i++ ){
    let randomNumber1 = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 10);
    const operations = ['*', '-', '+'];
    const operator = operations[Math.floor(Math.random() * operations.length)];
    
    let answer = readlineSync.question(`Question: ${randomNumber1} ${operator} ${randomNumber2} `);
    let correctAnswer = 0;
    switch( operator ){
        case '*':
            correctAnswer = randomNumber1 * randomNumber2;
            break;
        case '-':
            correctAnswer = randomNumber1 - randomNumber2;
            break;
        case '+':
            correctAnswer = randomNumber1 + randomNumber2;
            break;
    }
    
    if( answer == correctAnswer ){
        console.log("Correct!")
        if( i == tryCount - 1 ){
            console.log(`Good job, ${name}`)
        }
    }else{
        console.log(`"${answer}" is wrong answer :(. Correct answer was "${correctAnswer}"`)
        break;
    }
}
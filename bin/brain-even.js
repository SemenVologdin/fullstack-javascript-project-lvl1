import readlineSync from 'readline-sync'

import {cli} from '../src/cli.js'

const name = cli()
console.log('Answer "yes" if the number is even, otherwise answer "no"')

const tryCount = 3
for( let i = 0; i < tryCount; i++ ){
    let randomNumber = Math.ceil(Math.random() * 10);
    let isEven = randomNumber % 2 == 0;
    let answer = readlineSync.question(`Question: ${randomNumber} `);
    let correctAnswer = isEven ? "yes" : "no";

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


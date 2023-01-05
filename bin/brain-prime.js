import readlineSync from 'readline-sync'

import {cli} from '../src/cli.js'

const name = cli()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

const tryCount = 3
for( let i = 0; i < tryCount; i++ ){
    let randomNumber = Math.floor(Math.random() * 10);
    let answer = readlineSync.question(`Question: ${randomNumber} `);
    let correctAnswer = isPrime(randomNumber) ? "yes" : "no";

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

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
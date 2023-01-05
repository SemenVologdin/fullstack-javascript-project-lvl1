import readlineSync from 'readline-sync'

import {cli} from '../src/cli.js'

const name = cli()

console.log('Find the greatest common divisor of given numbers.')

const tryCount = 3
for( let i = 0; i < tryCount; i++ ){
    let randomNumber1 = Math.floor(Math.random() * 100);
    let randomNumber2 = Math.floor(Math.random() * 100);

    let answer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2} `);
    const correctAnswer = gcd(randomNumber1, randomNumber2)

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

function gcd(a, b) {
    if (!b) {
      return a;
    }
  
    return gcd(b, a % b);
  }
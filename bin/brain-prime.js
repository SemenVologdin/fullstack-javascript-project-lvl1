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

function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) {
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
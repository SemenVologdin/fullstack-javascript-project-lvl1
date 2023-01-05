import readlineSync from 'readline-sync'

import {cli} from '../src/cli.js'

const name = cli()

console.log('What number is missing in the progression?')

const tryCount = 3
for( let i = 0; i < tryCount; i++ ){
    let step = Math.floor(Math.random() * 100);
    let numbers = getRandomNumbers(step);
    let hidenSymbol = Math.floor(Math.random() * numbers.length)
    const correctAnswer = numbers[hidenSymbol]
    numbers[hidenSymbol] = '...'

    let answer = readlineSync.question(`Question: ${numbers.join(' ')} `);

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

function getRandomNumbers(step){
    let firstNumber = Math.floor(Math.random() * 100);
    let countNumbers = Math.floor(Math.random() * 15);
    const result = []

    for( let i = 0; i < countNumbers; i++ ){
        const num = firstNumber + step * i
        result.push(num)
    }

    return result;
}
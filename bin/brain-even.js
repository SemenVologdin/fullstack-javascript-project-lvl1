import readlineSync from 'readline-sync'

console.log('Answer "yes" if the number is even, otherwise answer "no"')

for( let i = 0; i < 3; i++ ){
    let randomNumber = Math.ceil(Math.random() * 10);
    let isEven = randomNumber % 2 == 0;
    let answer = readlineSync.question(`Question: ${randomNumber} `);
    let correctAnswer = isEven ? "yes" : "no";

    if( answer == correctAnswer ){
        console.log("Correct!")
    }else{
        console.log(`"${answer}" is wrong answer :(. Correct answer was "${correctAnswer}"`)
        break;
    }
}
import readlineSync from 'readline-sync'

console.log('Welcome!')

const name = readlineSync.question('What\'s your name?: ')
console.log('Hello ', name)
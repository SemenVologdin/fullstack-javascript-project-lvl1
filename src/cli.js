import readlineSync from 'readline-sync'

export function cli() {
    console.log('Welcome!')
    const name = readlineSync.question('What\'s your name?: ')
    console.log('Hello', name)
    
    return name
}
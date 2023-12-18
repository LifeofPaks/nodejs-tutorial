const { stdin, stdout } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

// rl.question(   `What is your name?`, (name) =>{
//     console.log(`Hi ${name}`)
//     rl.close()
// })

// using prompt-sync

const prompt = require('prompt-sync')()
const name = prompt('What is your name?')
console.log(`Hi! ${name}`)
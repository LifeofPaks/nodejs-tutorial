// console.log(process.argv)

// console.log(process.argv[2])

// process.argv.forEach((val, index) =>{
//     console.log(`${index} : ${val}`)
// })


// using minimist

const minimist = require('minimist')

const argNew = minimist(process.argv)
console.log(argNew.name)
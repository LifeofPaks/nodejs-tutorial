const repl = require('repl')
const local = repl.start('The node command line started')

// to exit REPL with custom message
local.on('exit', ()=>{
    console.log('exiting REPL')
    process.exit()
})
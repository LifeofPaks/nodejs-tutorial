// SYNCHRONOUS PROGRAMMING
console.log('Start operation')


const sleepTime = (milliseconds) =>{
    const startTime =  new Date().getTime()
    console.log('Operation is running')
    while(new Date().getTime() < startTime + milliseconds){
        console.log('In Progress')
    }
    console.log('Operation is Done!')
}

sleepTime(1000)
console.log('Do something else...')
// ERROR OBJECT LESSONS=========================

// const error = new Error('Something went wrong')
// console.log(error.message)

// USING THE THROW KEYWORD

// throw new Error('I am error object')


// CUSTOM ERROR IMPORT=================
// const {CustomError} = require('./CustomError')
// throw new CustomError('This is a custom error object')



// HANDLING EXCEPTIONS USING THE TRY AND CATCH=====================
// try{
//     doSomething()
// } catch (e){
//     console.log('Error occured')
//     console.log(e)
// } 
// // see the error that occured abive before creating the doSomething functon

function doSomething (){
    // const data = fetch ('localhost:3000/api')
    console.log('I am from doSomething function')
    const data = 'I am from doSomething function'
    return data
}


// HANDLING UNCAUGHT EXCEPTIONS===============================
// process.on('uncaughtException', (err) =>{
//     console.log('There was an uncaught exception', err)
//     process.exit(1)
// })

// doSomething()


// EXCEPTIONS WITH PROMISES
// const promise = new Promise((resolve, reject) =>{
//     if(true){
//         resolve(doSomething())
//     } else{
//         reject(doSomething())

//     }
// })

// promise.then(val =>{
//     console.log(val)
// }).catch(e =>{
//     console.log("Error Occured")
//     console.log(e)
// })

// EXCEPTIONS WITH ASYNC AND AWAIT

const someFunction = async ()=>{
    try{
        await doSomething()
    } catch (e){
        console.log(e)
    }
}

someFunction()
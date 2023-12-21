// PROMISES

// const promise = new Promise ((resolve, reject) =>{
//     console.log('Async task executed!')

//     // automatically reject, add: throw 'err

//     if(false){
//         const person = { name: 'Paks'}
//         resolve(person)
//     } else{
//         const error = {errCode: '1001'}
//         reject(error)
//     }
// })

// promise.then((val) =>{
//     console.log(val)
// }, 
// (err) =>{
//     console.log(err)
// })


// PROMISE CHAINING
// const p = Promise.resolve('done!')
// p.then((val) =>{
//     console.log(val)
//     return 'Done2!'
// }).then((val) =>{
//     console.log(val)
// })

// PROMISE ALL & PROMISE RACE

const makeApiCall = (time) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(`This API call executed in: ${time}s`)
        }, time)
    })
}
// makeApiCall(1000).then((value) =>{
//     console.log(value)
// })


// MULTIPLE CALLS
const multiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)]
// Promise.all(multiCall).then(values =>{
//     console.log(values)
//     // all the values are displayed simultaneously
// })

// PROMISE RACE
Promise.race(multiCall).then(value =>{
    console.log(value)
})

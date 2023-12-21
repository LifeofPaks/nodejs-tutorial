const userLogin =()=>{
    console.log('Enter Username and Password')
    let username = prompt('Enter uersname')
    let password = prompt('Enter password')

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Performing User Authentication')
            if(username === 'paks' && password === 'paks'){
                resolve('User Authenticated')
            } else{
                reject('Authetication Failed!')
            }
        }, 1000)
    })
}

function goToHomePage (userAuthStatus){
    return Promise.resolve(`Go to Home page ${userAuthStatus}`)

}

userLogin().then((response) =>{
    console.log('Validated User!')

    return goToHomePage(response)
}).then(userAuthStatus =>{
    console.log(userAuthStatus)
})
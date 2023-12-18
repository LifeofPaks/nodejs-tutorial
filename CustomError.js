class CustomError extends Error{
    constructor(message){
        super(message)
    }
}

module.exports = {CustomError}


// check the error.js file for imports
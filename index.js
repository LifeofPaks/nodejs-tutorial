// console.log("This is NodeJs Tutorial")
// console.log("This is Getting real intersting")

// const ford = require('./car')
// console.log(ford)


// EXPORTS TUTORIAL
// const {testla} = require('./car')
// console.log(JSON.stringify(testla, null, 2))


// FILE SYSTEM AND PATH MODULE
const path = require('path')
const filePath = '/Users/mac/Documents/NodeJs/files/sample.txt' 
// right click on the on the desired file and and select copy file path, to get get the filepath 


// TO GET THE DIRECTORY NAME
// console.log(path.dirname(filePath))
// // OR
// console.log(__dirname)

// TO GET THE BASE NAME
// console.log(path.basename(filePath))
// OR
// console.log(__filename)


// // TO GET THE EXTENSION 
// console.log(path.extname(filePath))

// PATH JOIN
// const sampleFile = 'sample.txt'
// console.log(path.join(path.dirname(filePath),sampleFile))



// FILE SYSTEM MODULE
const fs = require('fs')
// console.log(fs)

// READING FROM A FILE
// fs.readFile(filePath, (err, data) =>{
//     if(err) throw new Error('Something went wrong!')
//     console.log(data.toString())
// })


// READING FROM A FILE/ SYNC METHOD

// try{
//     const data = fs.readFileSync(filePath, 'utf-8')
//     console.log(data)

// }catch(e){
//     console.log(e)
// }


// // READING FROM A FILE/ ASYNC METHOD
const fsPromise = require('fs').promises

// const fileReading =  async()=>{

//     try{
//         const data = await fsPromise.readFile(filePath, {encoding: 'utf-8'})
//         console.log(data)
//     } catch(e){
//         console.log(e)
//     }
   
// }

// fileReading()

// WRITING FILE
const textFile = path.join(__dirname, 'files', 'text.txt')
const content ='I love Tech!'

// fs.writeFile(textFile, content, (err) =>{
//     if(err) throw new Error ('Something went wrong!')
//     console.log('Write file operation completed successfully!')
// fs.readFile(textFile, 'utf-8', (err, data) =>{
//     if(err) throw new Error(err)
//     console.log(data)
// })
// })


// WRITING FILE USING ASYNC AND AWAIT

const writingAndReadingInFile = async ()=>{
   try{
    await fsPromise.writeFile(textFile, content)
    await fsPromise.appendFile(textFile, '\n This is file appender')

    // rename file
    await fsPromise.rename(textFile, path.join(__dirname, 'files', 'newText.txt'))
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'newText.txt'), 'utf-8')

    // const data = await fsPromise.readFile(textFile, 'utf-8')
    console.log(data)
   } catch (err){
    console.log(err)
   }
}
writingAndReadingInFile()
const {join} = require('path')
const { readFile } = require('fs')

const pathToFile = join(__dirname, 'hello.txt')

const read = () => new Promise((resolve, reject) => {
  readFile(pathToFile, 'utf-8',(err, data) => {
    if(err){
      reject(err)
    }
    resolve(data)
  })
})

;
(
  async() => {
    const data = await read()
    console.log(data)
    console.log('adter promise')
  }
)()
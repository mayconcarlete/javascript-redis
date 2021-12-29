const { createClient } = require('redis')

const client = createClient(6379, '127.0.0.1')

// const connection = async () => {
//   return new Promise((resolve, reject) => {

//   })
// }

const pro = () => new Promise((resolve, reject) => {
  connection = client.connect()
  resolve(connection)
})

const setValue = ({key, value}) => new Promise((resolve, reject) => {
  const setValue = client.set(key, value)
  resolve(setValue)
})
;
(
  async () => {
    console.log(await pro())
    console.log(await setValue({key: 'name', value: 'maykerops'}))

  }
)()
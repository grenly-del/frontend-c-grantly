// Asynchronous Javascript

// const axios = require('axios/dist/browser/axios.cjs'); // browser
// const axios = require('axios/dist/node/axios.cjs'); 
// const axios = require('axios/dist/browser/axios.cjs')
// Synchronous -> single thread -> blocking
// console.log('process 2')
// console.log('process 3 sangat lama di eksekusi')
// console.log('process 4')


// Asynchrounous -> multi-thread
// 1. Pararell
// setTimeout(() => {
//     console.log('process 1')
// }, 1000)


// console.log('process 2')

// setTimeout(() => {
//     console.log('process 3')
    
// }, 1000)
// console.log('process 4')

// 2. Concurent

// setTimeout(() => {
//     console.log('process 1')
//     setTimeout(() => {
//         console.log('process 2')
//         setTimeout(() => {
//             console.log('process 3')
//         },1000)
//     },1000)
// }, 1000)



// Promise
// let condition = false
// let promise = new Promise((resolve, reject) => {
//     if( condition ) {
//         resolve('Berhasil')
//     }else {
//         reject('gagal')
//     }
// })

// .then - .catch
// promise.then(result => console.log(result)).catch(err => console.log(err))

// async await
// let result = async () => {
//     try {
        
//         console.log(await promise)
//     } catch (error) {
//      console.log(await error)   
//     }
// }

// result()


// FETCH
// fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
// .then(res => res.json())
// .then(result => console.log(result))
// .catch(err => console.log(err))


// ASYNC - AWAIT
// let result = async () => {
//     let hasil = await fetch('https://jsonplaceholder.typicode.com/users')
//     let json = await hasil.json()
//     json.map(e => console.log(e.name))
// }


let result = async () => {
    let hasil = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(hasil)
}

result()
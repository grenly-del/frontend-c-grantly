// IIFE & Callback


// 1. IIFE (Imemediatly Invoked Function Expression)
// (function() {
//     console.log('hello world')
// })()

// // - With Param & Arg
// (function(nama) {
//     console.log('hello world')
//     console.log(nama)
// })('grantly')


// - With Param & Arg & Return Value
// let nama = (function(nama) {
//     return nama
// })('grantly')

// console.log(nama)



// 2. Callback
// - No Params
// function sayHallo (callback) {
//     callback()
// }


// sayHallo(function() {
//     console.log('Hello Callback Function')
// })

// - With Params

// function sayHallo (callback) {
//     return `Hello ${callback('Grantly Sorongan')}`
// } 

// let output = sayHallo(function(nama) {
//     return nama
// })

console.log(output)


// ======== JAVASCRIPT (Function)=========

// // -Tanpa Input Dan Output
// // == Cara Pertama
// function greetings1() {
//     console.log('Hello World')
// }

// // == Cara Kedua
// let greetings2 = function() {
//     console.log("Hello World")
// }


// // == Eksekusi Function
// greetings1()
// greetings2()

// -Dengan Input Dan Output (Parameter dan Argumen)
// // == Cara Pertama
// function greetings1(fullName) {
//     return 'Hello Nama Saya '+fullName
// }


// let output1 = greetings1('Grantly')

// console.log(output1)

// // == Cara Kedua

// let greetings2 = function (fullName) {
//     return 'Hello Nama Saya '+fullName
// }


// let output2 = greetings2('Sorongan')

// console.log(output2)

// - Global, Local & Block Scope

// let x = 10 // Global
// function foo(){
//     let y = 20 // Lokal Function Scope
//     let z = 30 // Lokal Function Scope
//     if (z>x) {
//         let a = 40 // Block Scope
//         console.log(a)
//     }
//     console.log(z+y)
//     // console.log(a) // Block Scope (Error)
// }

// foo()
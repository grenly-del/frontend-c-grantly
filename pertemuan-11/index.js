// String Literals, Arrow Function, Default Parameter

// 1. String Literals

// // Cara Lama
// const fullName = 'Grantly Sorongan'
// const age = 33
// const address = 'Manado'
// const result = 'Hallo nama saya '+fullName+", umur saya "+age+" Tahun, dan saya tinggal di "+address+"."

// // Cara Baru
// const result2 = `Hallo nama saya ${fullName}, umur saya ${age} Tahun, dan saya tinggal di ${address}.`

// console.log(result2)



// 2. Arrow Function

// Function Biasa
function sayGreetings(fullName) {
    return `Hello ${fullName}`
}

console.log(sayGreetings('Grantly'))

// Arrow Function
const sayGreetings2 = (fullName) => {
    return `Hello ${fullName}`
}

console.log(sayGreetings2("faldy"))



// - Persingkat (Implicit  return value)
const sayGreetings3 = fullName => `Hello ${fullName}`

console.log(sayGreetings3('Jack'))

// - IIFE
let output = (() => `Hello World`)()
console.log(output)

// - Arrow Function Callback
let numbers = [1,2,3,4,5,6,7]
let output2 = numbers.map((item) => item)


// 3. Default Parameter
const sayGreetings4 = (fullName='Steve', age=20, address='Treman') => {
    console.log(`Hallo My Name Is ${fullName} i'am ${age} year old and i'am live at ${address}`)
}

sayGreetings4('Grantly', 19, 'Sorong')
// Rest Parameter & Spread Parameter

const { createLogger } = require("vite")


// 1. Rest Parameter

// Tanpa Rest Parameter

const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1 ,param2, param3, param4, param5)
}


// Dengan Rest Parameter

const func2 = (...param) => {
    console.log(param)
}



// Mini Exercise
const penjumlahan = (...param) => {
    let hasil = 0
    param.forEach(v => hasil += v)
    return hasil
}



func1('A', 'B', 'C', 'D', 'E')
func2('A', 'B', 'C', 'D', 'E')
console.log(penjumlahan(3,2,5))





// 2. Spread Parameter
const numbers = [1,2,3,4,5]
console.log(...numbers)


// Duplicate 
const hasilarr = [...numbers]
console.log(hasilarr)


// Concat
const numbers2 = [6,7,8,9,10]
const hasil = [...numbers, ...numbers2]
console.log(hasil)


const john = {
    fullName : 'Grantly Sorongan',
    age: 19
}
const hasil2 = {...john, address: 'Treman'}
console.log(hasil2)


let obj1 = {a: 1, b: 2, c: 3}
let obj2 = {d: 4, e: 5, f: 6}

console.log({...obj1, ...obj2})
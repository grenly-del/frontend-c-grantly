// Array & Object

// 1. Array 
// Deklarasi Array 
// - Cara 1. Array Literal

// let numbers = [1, 2, 3, 4, 5]
// console.log(numbers)


// // - Cara 2. Kata Kunci New
// let numbers2 = new Array(6,7,8,9,10)
// console.log(numbers2)

// Tipe Data Dalam Array
// let numbers3 = [1, 2, 3, 4, 5] // Number
// let students = ["John" , "Jane", "Bob"] // String
// let john = ["John" , 30, true, [80, 90, 100]] // Campuran


// console.log(john)

// // Array Length
// console.log(numbers3.length)
// console.log(students.length)
// console.log(john.length)


// Mengakses Element Tertentu Dalam Array 
// Melalui Index, Index Selalu Dimulai Dari NOL (0)

// console.log(numbers3[2]) // 3
// console.log(students[1]) // Jane
// console.log(john[3]) // 80, 90, 100
// console.log(john[3][1]) // 90


// Mengakses element terakhir dalam array

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers[numbers.length-1])



// Array Method
// // 1. toString() // merubah element menjadi string
// let array = [1,2,3, 'hallo', false, true]
// console.log(array.toString())

// // 2. join() // pemisah element array
// console.log(array.join(' '))
// console.log(array.join('-'))

// // 3. pop() // menghapus element terakhir
// array.pop()
// console.log(array)


// // 4. push() // menambahkan element terakhir
// array.push('Selamat pagi')
// console.log(array)


// // 5. shift() // menghapus element pertama
// array.shift()
// console.log(array)

// // 6. unShift() // menambahkan ke element pertama
// array.unshift('selamat pagi')
// console.log(array)

// // 7. splice() // menambahkan element ke sesuai index

// array.splice(3, 0, 4, 5)
// console.log(array)

// // 8. concat()
// let buah = ["pisang", "apel", "jeruk"]
// let sayur = ["tomat", "bayam", "wortel"]
// let biji = ["kedelai", "kacang tanah", "kacang pelong"]

// let makanan = buah.concat(sayur, biji)
// // let makanan = [...buah, ...sayur, ...biji]
// // console.log(makanan)


// // 9. slice()
// let sayuran = makanan.slice(3, 6)
// console.log(test)

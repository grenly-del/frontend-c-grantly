// Destructuring

// 1. Destructuring Array & Object

// let age = [13, 8, 2004]
// let person = {
//     nama: 'Grantly',
//     fakultas: 'Ilmu Komputer',
//     jurusan: 'Informatika'
// }
// // Array - 
// const [tanggal, bulan, tahun] = age
// console.log(`Saya Lahir di tanggal ${tanggal}, bulan ${bulan}, tahun ${tahun}`)

// // Object -
// const {nama, jurusan, fakultas} = person
// console.log(`Nama saya ${nama} saya berkuliah di fakultas ${fakultas} jurusan ${jurusan}`)



// 2. Destructuring Array & Object Dengan Mengambil Sebagian Item
// let age2 = [13, 8, 2004]
// let person2 = {
//     nama: 'Edward',
//     kota: 'Manado',
//     agama: 'Kristen'
// }
// // Array -
// const [tgl] = age2
// console.log(tgl)
// // Object -
// const {kota} = person2
// console.log(kota)

// 3. Destructuring Array & Object Default Value
// let age2 = [13, 8]
// let person2 = {
//     nama: 'Edward',
//     kota: 'Manado',
//     agama: 'Kristen'
// }

// // Array - 
// const [a,b,c=2004] = age2
// console.log(`Saya Lahir di tanggal ${a}, bulan ${b}, tahun ${c}`)
// // Object -
// const {nama, kota, agama, jurusan='Informatika'} = person2
// console.log(`Nama saya ${nama} saya tinggal di ${kota} saya beragama ${agama} dan saya jurusan ${jurusan}`)


// 4. Rest Operator Destructuring 
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const obj = {a:1, b:2, c:3, d:4}
// // Array -
// const [first, ...after] = arr // Rest Operator hanya bisa untuk di akhir tidak bisa dilakukan di depan contoh : [...after, a] X
// console.log(first)
// console.log(after)
// // Object -
// const {a, ...all} = obj
// console.log(a)
// console.log(all)



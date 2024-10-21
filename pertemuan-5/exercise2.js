
// ==== Exercises Kedua ====







// === IIFE 
// const outputBMI = (function(berat, tinggi) {
//     let t_meter = tinggi / 100
//     let bmi = berat / (t_meter*t_meter)
//     console.log(`Tinggi : ${t_meter}m`)
//     console.log(`Berat : ${berat}kg`)
//     return bmi
// })(50, 170)

// console.log(`BMI : ${outputBMI}`) 


// === Callback 
function hitung_bmi(berat, tinggi, callback) {
    let t_meter = tinggi / 100
    let bmi = berat / (t_meter*t_meter)
    callback(t_meter, berat)
    return bmi
}
let output = hitung_bmi(50,170,function(t_meter, berat) {
    console.log(`Tinggi : ${t_meter}m`)
    console.log(`Berat : ${berat}kg`)
})
console.log(`BMI : ${output}`) 







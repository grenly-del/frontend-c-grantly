
// ==== Exercises Pertama ====
function hitung_bmi(berat, tinggi) {
    let t_meter = tinggi / 100
    let bmi = berat / (t_meter*t_meter)
    console.log(`Tinggi : ${t_meter}m`)
    console.log(`Berat : ${berat}kg`)
    return bmi
}
let output = hitung_bmi(50,170)
console.log(`BMI : ${output}`) 
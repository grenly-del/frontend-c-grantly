const hasil = (val) => {
    return val > 0 && val < 10 ? 'Besar' : val >= 10 && < 20 ? "Sedang" : 'Salah'
}


console.log(hasil(10))
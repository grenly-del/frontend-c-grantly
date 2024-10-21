const ambilDataUser = async () => {
    try {
        const {data} = await axios('https://reqres.in/api/users')
        const hasil = data.data
        hasil.forEach(({first_name, last_name}) => {
            console.log(`ini adalah firstName ${first_name}`)
            console.log(`ini adalah lastName ${last_name}`)
            console.log(' ')
        })
    } catch (error) {
        console.log(error)
    }
}

export {ambilDataUser}
// ambilDataUser()
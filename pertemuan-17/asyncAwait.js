const ambilDataUser = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users')
        const {data} = await res.json()
        console.log(data)
        data.forEach(({first_name, last_name}) => {
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
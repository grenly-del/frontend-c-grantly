const ambilDataUser = () => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(({data}) => {
        data.forEach(({first_name, last_name}) => {
            console.log(`Ini adalah firstName ${first_name}`)
            console.log(`Ini adalah lastName ${last_name}`)
            console.log(' ')
        });
    })
}


export {ambilDataUser}
// ambilDataUser()

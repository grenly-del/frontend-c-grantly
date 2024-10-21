const fullName = 'Grantly'
const numbers = [1,2,3,4,5,6]


const data = () => {
    fetch('./karakter.json')
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => data)
    .catch(err => console.log(err))

}

console.log(data())
export {fullName, numbers, data}
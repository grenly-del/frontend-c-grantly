// ======== TUGAS ARRAY ==========
// == ARRAY 
let people = ["Greg", "Mary", "Devon", "James"]

//1. FOR LOP
// for (let i = 0; i<people.length; i++) {
//     console.log(people[i])
// }


//2. FOREACH
// people.forEach(function(data) {
//     console.log(data)
// })


// 3. Remove Greg
delete people[0] // menghilangkan dengan perintah delete
people = people.slice(1) // menghilangkan dengan menimpa array
console.log(people)


// 4. Remove James
delete people[people.length-1] // menghilangkan dengan perintah delete
people = people.slice(0, -1) // menghilangkan dengan menimpa array
console.log(people)


// 5. Add matt to the front Array
people.unshift('Matt')
// console.log(people)


// 6. Add My Name to the end of the Array

people.push('Grantly')
console.log(people)


// 7. For Loop to Mary
for (let i = 0; i<people.length;i++) {
    if (i>=2) {
        break
    }else {
        console.log(people[i])
    }
}


// 8. SLICE Array Not Include Matt Mary

let newPeople = people.slice(1, 4)
console.log(newPeople)

// 9. Update Devon in people and add Elizabeth Artie
console.log(people)
people.splice(2, 1,"Elizabeth", "Artie")
console.log(people)


// 10. Add Bob
let withBob = people.concat('Bob')
console.log(withBob)



// == OBJECT

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


// 1. Add Go in Object with field Languages
programming.languages.push('Go')


// 2. Update Field Difficulty
programming['difficulty'] = 7


// 3. Delete jokes
delete programming.jokes


// 4. Add New Field
programming.isFun = true
console.log(programming)


// 5. Looping field languange with Map()
programming.languages.map(function(v, i) {
    console.log(i+' - '+v)
})
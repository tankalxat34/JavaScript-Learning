const person = {
    city: 'New York',
    name: 'Alexander',
    digit: 5
}

const person2 = Object.assign({}, person)

person.digit = 18
console.log(person.digit)
console.log(person2.digit)
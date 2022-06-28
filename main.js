const myCity = {
    city: 'New York',
    name: 'Alexander',
    digit: 5
}

const result = JSON.stringify(myCity)
console.log(result)

const resultObject = JSON.parse(result)
console.log(resultObject)
// // Sends event to client
// // Init my app in VK
// vkBridge.send('VKWebAppInit')
// .then((result) => console.log(result))
// .catch((error) => console.log(error))

// // Subscribes to event, sended by client
// var USER;
// vkBridge.subscribe(e => {console.log(e);});

const arr = [1,1,2,3,4,4,5,6,6,7,7,8,9]

function uniqueArray(array) { // => [2,3,5,8,9] чтобы не было пар
    let newArray = new Array()
    let countOfDigits = new Object()
    array.forEach((element) => {
        if (Object.keys(countOfDigits).includes(String(element))) {
            countOfDigits[element] += 1
        } else {
            countOfDigits[element] = 0
            countOfDigits[element] += 1
        }
    })
    Object.keys(countOfDigits).forEach((key) => {
        if (countOfDigits[key] === 1) {
            newArray.push(Number(key))
        }
    })
    return newArray
}

// console.log(uniqueArray(arr))

function User(name, age) {
    this.name = name
    this.age = age
}

// console.log(new User("Alex", 18))

function sortArray() {
    let arr = [3,7,5,8,1,2,54]
    return arr.sort((a, b) => a-b)
}

console.log(sortArray())
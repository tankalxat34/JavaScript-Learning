function rnd(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

const car = {
    carBrand: 'example',
    price: 1,
    isAvailableForSale: false
}

const BRAND = [
    'bmw',
    'mercedes',
    'audi',
    'ferrari',
    'lada'
]

let cars = [];
let newObject;

for (let i = 0; i < 3; i++) {
    newObject = Object.assign({}, car)
    newObject.carBrand = BRAND[rnd(0, BRAND.length - 1)]
    newObject.price = rnd(10000, 999999)
    newObject.isAvailableForSale = Boolean(rnd(0, 2))
    cars.push(newObject)
}

console.log(cars)
console.log(car)
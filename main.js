// обычная функция
function f1(a, b = 1) {
    return a * b;
}

console.log('Результат f1')
console.log(f1(5, 2))   // 10
console.log(f1(5))      // 5


// анонимное функциональное выражение
const f2 = function(a, b = 1) {
    return a * b;
}

console.log('Результат f2')
console.log(f2(5, 2))   // 10
console.log(f2(5))      // 5


// стрелочные функции
const f3 = (a, b = 1) => {
    return a * b;
}

console.log('Результат f3')
console.log(f3(5, 2))   // 10
console.log(f3(5))      // 5
/* практика про базовым алгоритмам с видеоурока: https://www.youtube.com/watch?v=OToyoIqVPQI */

/* Задача 1 - Число Фибоначчи */
function fibonachi(n) {
    if (n <= 0) {
        return 0
    }
    if (n <= 2) {
        return 1
    }
    return fibonachi(n - 1) + fibonachi(n - 2)
}

function iterationFibonachi(n) {
    if (n <= 0) {
        return 0
    }
    if (n <= 2) {
        return 1
    }
    let prev = 1;
    let result = 1;
    for (let i = 0; i < n -2; i++) {
        let tmp = result;
        result += prev;
        prev = tmp;
    }
    return result;
}

console.log(iterationFibonachi(7))
console.log(fibonachi(7))

/* Задача 2 - Определение палиндрома */

// шалаш - true
// дом - false
function isPalindrom(word) {
    /* первый вариант - пробежка по всему слову */
    word = word.toLowerCase()
    let word2 = String();
    for (let i = word.length - 1; i >= 0; i--) {
        word2 += word[i]
    }
    return Boolean(word2 === word)
}

function isPalindrom2(word) {
    /* второй вариант - пробежка до половины строки и мгновенная проверка символов. Самый рациональный */
    word = word.toLowerCase();
    for (let i = (word.length - 1) / 2; i >= 0; i--) {
        if (word[word.length - i - 1] !== word[i]) {
            return false
        }
    }
    return true
}

function isPalindrom3(word) {
    /* третий вариант - самый коротки, но не слишком рациональный */
    word = word.toLowerCase();

    return word === word.split('').reverse().join('')
}

console.log(isPalindrom("шалаш"))   // true
console.log(isPalindrom("дом"))     // false

console.log(isPalindrom2("шалаш"))   // true
console.log(isPalindrom2("дом"))     // false

console.log(isPalindrom3("шалаш"))   // true
console.log(isPalindrom3("дом"))     // false


/* Задача 3 - Девять функций */

function one(...args) { 
    return eval(args.join('') + '1')
}
function two(...args) { 
    return eval(args.join('') + '2')
}
function three(...args) { 
    return eval(args.join('') + '3')
}
function four(...args) { 
    return eval(args.join('') + '4')
}
function five(...args) { 
    return eval(args.join('') + '5')
}
function six(...args) { 
    return eval(args.join('') + '6')
}
function seven(...args) { 
    return eval(args.join('') + '7')
}
function eight(...args) { 
    return eval(args.join('') + '8')
}
function nine(...args) { 
    return eval(args.join('') + '9')
}
function zero(...args) { 
    return eval(args.join('') + '0')
}


function plus(...args) {
    return args.join('') + "+"
}
function minus(...args) {
    return args.join('') + "-"
}
function divide(...args) {
    return args.join('') + "/"
}
function mult(...args) {
    return args.join('') + "*"
}

console.log(four(mult(three())))
console.log(five(mult(five())))
console.log(four(divide(four())))


/* Промежуточная задача */
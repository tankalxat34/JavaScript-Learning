const fibonachi = n => {
    /* нахождение числа Фибоначчи по его номеру 
    
    число Фибоначчи - такое число, которое является суммой двух предыдущих чисел

    РЯД: 0, 1, 1, 2, 3, 5, 8, 13
      №: 0, 1, 2, 3, 4, 5, 6, 7

    ФОРМУЛА: f(n) = f(n - 1) + f(n - 2)
    */
    if (n < 0) {
        return 0
    }

    if (n <= 2) {
        return 1
    }
    return fibonachi(n - 1) + fibonachi(n - 2)
}


let result = fibonachi(7)
console.log(result)
function resolvedPromise(json) {
    console.log(json[0].title)
    console.log(json[0].completed)

    console.table(json[0])
}

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log(response)
        return response.json()
    })      // вызовется, если промис выполнен. Метод json возвращает промис, содержащий ответ от сервера
    .then(json => resolvedPromise(json))        // вызовется, если промис выполнен. На экран выведется объект, созданный на основе данных, полученных на прыдыдущем объекте
    .catch(error => console.error(error))   // вызовется, если промис вернул ошибку. На экран выведем эту ошибку


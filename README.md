# JavaScript-Learning
Здесь я изучаю <img src="https://icon-widget.codersrank.io/api/javascript" width=16px> JavaScript по бесплатному курсу на YouTube

[>>> ССЫЛКА НА КУРС <<<](https://youtu.be/CxgOKJh4zWE)

# Выполнение кода
- Веб-браузер (лучше всего Google Chrome);
- [Node.js](https://nodejs.org/en/);
- [Редактор кода Visual Studio Code](https://code.visualstudio.com/);

# Вводная часть
## Основы понимания JavaScript
- Выражения
- Функции
- Объекты

## Объекты

**Главная идея в JavaScript: все сущности являются объектами**.

**Объект** - набор свойств "имя: значение".

Пример объекта:
```js
{
    visible: true,
    colorDepth: 24,
    title: 'My Image',
    orient: {
        angle: 0,
        type: 'landscape'
    },
    pixelDepth: 24,
    width: 1440,
    property: 'someValue',
}
```

Массивы, функции, числа, строки - все эети сущности ведут себя как объекты.

# Вывод на экран

Вывод на экран начинается с команды:

```js
console.log('Hello world')
```

Разберем подробно:
- `console` - объект, у него есть свойства. Каждое свойство - это пара "Key: value".
- `log` - метод (функция, которая является значением одного из свойств объекта).
- `.` - синтаксис, точечная запись. С помозью точечной записи можно получить доступ к методу `log` объекта `console`.
- `()` - вызов метода `log` здесь и сейчас.
- `'Hello world'` - аргумент метода. В данном случае - это просто значение типа `String`. Строковые значения в JS могут помещаться в одинарные или двойные кавычки.

Кроме `.log()` у объекта `console` есть и другие методы:
- `.dir()` - можно увидеть свойства объекта `console`.
- `.table()` - можно увидеть все свойства объекта в виде таблицы. Причем объект передается как аргумент.

## Свойства

В браузере в консоли мы можем написать объект (в нашем случае `console`) и нажать Enter. В ответ JavaScript выдаст нам список свойств введенного объекта.

# Выражения
**Вызов функции - выражение, так как оно всегда возвращает какое-либо значение**

**Выражение** - сущность, которая всегда возвращает какое-либо значение.

Примеры выражений:
```js
'abc'   // вернется 'abc'
10      // вернется 10
5 + 2   // вернется 7
c = 10  // вернется 10
'Good ' + 'Evening'     // вернется 'Good Evening'
a <= b || c !== d       // вернется true или false
myFunctional(c, d)      // вернется некоторое значение (результат функции)
```

Примечание знак `||` означает `ИЛИ`.

## Выражение присваивания
```js
a = 20 // вернется значение 20 и переменной "a" присвоили значение 20
```

## Выражение с побочными действиями

Такое выражение не только возвращает значение, но и выполняет другие действия.

```js
a = 5   // присвоение переменной a значения 5
b++     // постфиксный инкремент - увеличивает значение b на 1
myFunction(c, d)    // функция возвращает значение
```

# Переменные
Переменные дают возможности повторного доступа к значениям. 

**Переменная** - именованая ячейка памяти, к которой можно обратиться в программе с цель получения или изменения значения в ней.

## Правила и варианты именования переменных

### 1) *PascalCase* - Именование с заглавной буквы

Так происходит именование экземпляров классов и/или объектов:
```js
PascalCase
```

### 2) Капс в константах

Значения известны до запуска приложения и не меняются (являются константными) во время работы программы/приложения. Такие переменные именуются капсом и отдельные слова в имени такой переменной разделяются "_" - нижним подчеркиванием:

```js
DB_PASSWORD
```

### 3) *camelCase* - остальные случаи

Так рекомендуется называть все остальные случаи. Без пробелов, нижних подчеркиваний, первое слово с маленькой буквы, каждое следующее слово с большой буквы.

```js
camelCase
```

> Названия переменных должны быть понятными!

## Объявление переменных

- `let` - появился в 2015 году (стандарт EMCAScript 6)
- `const` - для констант. Появился в 2015 году.
- `var` - появился одновременно с появлением JavaScript (лучше забыть про этот способ объявления переменных)

## Код

С помощью ключевого слова `let` мы даем интерпретатору инструкцию создать переменную `a`. Так же мы можем сразу при инициализации переменной присвоить ей значение. Можно создавать переменные без этого ключевого слова.

```js
let a
let b = 10
a = true
```

> Для `let`-инициализированных переменных мы можем менять значения. Для `const`-инициализированных переменных мы **не можем** менять значения.

```js
let b // здесь переменная b получила значение undefined (неопределенный тип)
```

## Типы переменных

Типы переменных в JavaScript создаются в момент присвоения переменным каких то значений

```js
const a = 10        // Number
const b = 'abc'     // String
```

### Виды типов переменных
- **Примитивные**
- **Ссылочный**

#### Примитивные типы

Такие типы содержат в памяти компьютера конкретное значение.

- `string` - строка
- `boolean` - true или false
- `number` (например 0, 3, 25, 1.25, -14 и тд)
- `null` (только одно значение: `null`. Значение отсутствует. `null` присваивается программистом и может быть изменено на любой другой)
- `undefined` (Значение не существует, оно не определено.Этот тип не присваивается вручную, он автоматически)
- `symbol` (достаточно редкий)

#### Ссылочный тип
`object` (объект)

Переменная хранит ссылку на конкретный объект в памяти компьютера (ссылается на него)

Это дает возможность иметь несколько ссылок, указывающих на один и тот же объект. Разные переменные, содержащие одинаковые ссылки, будут сылаться на один и тот же объект в памяти.


#### Примеры

```js
const objectA = {
    a: 10,
    b: true
}
```

При выполнении этого кода будет создано:
- переменная `objectA`, хранящяя адрес объекта в памяти.
- сам объект со свойствами `a` и `b`, хранящися в другом месте памяти.

Далее создадим копию переменной `objectA`:

```js
const copyOfA = objectA // ссылку из objectA скопировали в переменную copyOfA
```

Полученные переменные будут содержать одну и ту же ссылку на один и тот же объект в памяти.

Менять значения свойств мы можем так:

```js
copyOfA.a = 20
console.log(objectA) // 20
```

Дбабаввление свойств в объект делается так:

```js
copyOfA.c = 'abc'
```

# Динамическая типизация

В JS нет необходимости декларировать тип переменной. Типы переменных могут меняться динамически в зависимости от присвамых значений.

```js
a = "abc"   // String
a = 10      // Number
```

> Вывод - используй `const` - он позволяет предотвратить возможные проблемы, связанные с динамической типизацией.

## Синтаксис стрелочной функции 

```js
const a = () => {
    console.log("Hello world!")
}

a() // "Hello world"

a = 10 // TypeError

a()
```

# Объекты

Объект - совоокупность пар "свойство: значение".

Доступ к свойствам объекта осуществляется через точечную запись (dot notation).

Если объект хранится в const-переменной - это не мешает нам менять его программно и добавлять ноые свойства.

## Работа со свойствами

### Добавление свойств

```js
const obj = {
    name: "Alexander",
}

console.log(obj.name) // 'Alexander'

obj.tel = 9119 // добавил свойство tel
console.log(obj.tel) // 9119

obj.name = "Ruslan"

console.log(obj.name) // 'Ruslan'
```

### Удаление свойств
Для удаления свойства используется ключевое слово `delete`.

```js
delete obj.name // удяляет name из обекта из примера выше
```

### Альтернативная работа со свойствами

Свойства можно задавать и в виде строки

```js
const obj = {
    city: 'New York'
}

obj['popular'] = true
delete obj['city']
```

### Свойства из переменных и констант

Если в программе есть некоторые переменные, то их можно использовать при формировании объекта так:

```js
const name = "Alexander"
const postsQty = 23

const userProfile = {
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}
```

Либо в более сокращенном варианте так:

```js
const name = "Alexander"
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}
```

> Сокращенные свойства рекомендуется размещать в начале объекта. Иногда их можно сортировать по длине

## Глобальные объекты
- `window` - в веб-браузерах
- `global` - в Node.js
- `globalThis` - объект , сочитающий в себе два предыдущих объекта

### Свойства глобальных объектов
`console` - одно из свойств глобального объекта `window`.

## Методы объектов

Метод - свойство объекта, значение которого - функция.

Пример:

```js
const myCity = {
    city: 'New York',
    cityGreeting: function() {
        colsole.log('Hello!')
    }
}

myCity.cityGreeting() // 'Hello!'
```

Еще пример, без явного слова function:

```js
const myCity = {
    city: 'New York',
    cityGreeting() {
        colsole.log('Hello!')
    }
}

myCity.cityGreeting() // 'Hello!'
```

# JSON

**JSON** - JavaScript Object Notation (формат обмена данными между компьютерами в интернете).

## Конвертация в объект JavaScript

Метод `parse` объекта `JSON`

Пример, который возвращает объект JavaScript:

```js
JSON.parse('{"key1": "value1", "key2": 1}')
```
## Конвертация JavaScript-объект в строку

Метод `stringify` объекта `JSON`

```js
JSON.stringify({key1: 'value1', key2: 1})
```


# Мутация в JavaScript

## Значения примитивных типов

```js
const a = 10
let b = a // скопировали значение переменной a в переменную b
b = 30
console.log(a) // 10
console.log(30) // 30
```

## Значения ссылочного типа

```js
const person = {
    name: 'Bob',
    age: 21
}
person.age = 22
person.isAdult = true // добавление нового свойства - мутация объекта

console.log(person.age)     // 22
console.log(person.isAdult) // true
```

Возможна мутация копий объекта

```js
const person = {
    name: 'Bob',
    age: 21
}

const person2 = person

person2.age = 22
person2.isAdult = true // добавление нового свойства - мутация объекта

console.log(person.age)     // 22
console.log(person.isAdult) // true
```

### Как избежать мутацию в копии объекта?

#### Вариант 1 - `Object.assign`

```js
const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person) // аналогично globalThis.Object.assign(...)
/* Буквально: создаем в пустом объекте все те свойства и значения из старого объекта person */

person2.age = 26

console.log(person2.age)    // 26
console.log(person.age)     // 25
```

> Если у объекта есть вложенные объекты, то ссылки на них сохраняются!

#### Вариант 2 - ...

Второй способ через оператор `...` "spread" (оператора разделения объекта на свойства).

Существующий объект `person` мы разделили на свойства и собрали на их основе новый объект.

```js
const person = {
    name: 'Bob',
    age: 25
}

const person2 = { ...person }

person2.name = 'Alice'

console.log(person2.name)   // 'Alice'
console.log(person.name)    // 'Bob'
```

> Если у объекта есть вложенные объекты, то ссылки на них сохраняются!

#### Вариант 3 - JSON

Третий способ через уже знакомые методы объекта `JSON`:

```js
const person = {
    name: 'Bob',
    age: 25
}

// сначала конвертацию в строку, потом в объект
const person2 = JSON.parse(JSON.stringify(person))

person2.name = 'Alice'

console.log(person2.name)   // 'Alice'
console.log(person.name)    // 'Bob'
```

> Здесь ссылки на вложенные объекты *не сохраняются!*

# Функции

Функция - блок кода, который можно выполнять многократно

Синтаксис:

```js
function name(arg1, arg2) {
    /* operators */
    return someValue;
}
```

## Функция может быть
- именованной;
- присвоена переменной;
- анонимной;
- аргументом при вызове другой функции;
- значением свойства (метода) объекта;

> Функция - объект

Если функция ничего не возвращает - она возвращает `undefined`.

## Колбэк функции

**Callback-функция** - такая функция, которая вызывается в теле другой функции.

```js
function anotherFunction() {
    /* эта функция является callback-функцией */
    // Действия...
}

function functionWithCallback(callbackFunction) {
    callbackFunction();
}

functionWithCallback(anotherFunction)
```

### Пример

```js
function printMyName() {
    console.log('Alexander');
}

setTimeout(printMyName, 1000); // функция printMyName будет вызвана через 1000 миллисекунд (1 секунду)
```

Функция `setTimeout` вызывает другую функцию через определенное количество миллисекунд

**1000 мс = 1 с**

## Правила работы с функциями

1. Называть функции исходя из выполняемых задач.
2. Одна функция должна выполнять одну задачу.
3. Не рекомендуется внешние относительно функции переменные и объекты (pure function - чистая функция).

## Анонимные функциональные выражения

В JS сущестуют объявленные функции (кторые рассматривались ранее)

Но есть еще и функциональные выражения:

```js
const myFn = function(a, b) {
    /*действия*/
}
```

В отличие от функции, функциональное выражение не имеет имени и ее нейльзя использовать автономно.

Кроме того, функциональное выражение можно присваивать в переменную и использовать ее как обычнгу функцию.

## Стрелочные функции

Не имеют имени и ключевого слова `function`.

### Синтаксис:

```js
const myFn = (a, b) => {
    /*действия*/
}
```

Стрелочная функция - выражение.

Стрелочные функции всегда анонимные.

Переменной можно присвоить стрелочную функцию и использовать ее впоследствии как обычную функцию.

## Особые синтаксические правила

Если в функции только один параметр, то скобки можно не писать

```js
a => {
    /*body*/
}
```

Кроме того, если в теле функии только одно выражение, то фигурные скобки можно опустить.

```js
(a, b) => a + b
```

Есть еще одна возможность сократить запись, если у функции только один аргумент и только одно действие:

```js
a => a * a
```

## Значения параметров по умолчанию в функции

Необязательные аргументы пишутся через `=`:

```js
function myFn(a, b = 1) {
    return a * b;
}
myFn(2, 10) // 20
myFn(5) // 5
```

### Пример изменения и возврата копии объекта внутри функции

В данном примере иллюстрируется возможность стрелочной функции неявно возвращать новый объект, созданный на основе существующего, переданного внутрь функции как аргумент.

```js
const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Alexander'
}

newPost(firstPost) // вернется новый объект с новым свойством addedAt
```


# Области видимости

**Область видимости** определяет границы действия переменной.

Исходя из места инициализации переменной они бувают:
- Локальные переменные
- Глобальные переменные

Поиск переменных в областях видимости начинается с самого низкого уровня и постепенно идет к глобальному, если до сих пор не была найдена необходимая переменная: `myFn` → `global`

## Пример

```js
let a;
let b; // глобальная переменная

function myFn() {
    let b; // локальная переменная
    a = true;
    b = 10;
    console.log(b); // 10 - взято из локальной области функции myFn
}

myFn();

console.log(a); // true
console.log(b); // undefined
```

## Жизненный цикл переменных

```js
let a;
let b; // глобальная переменная

function myFn() {
    let b; // локальная переменная
    a = true;
    b = 10;
    console.log(b); // 10 - взято из локальной области функции myFn
}

myFn();

console.log(a); // true
console.log(b); // undefined
```

> После выполнения функции `myFn` все переменные внутри этой функции уничтожились!

## Типы областей видимости
- Глобальная область
- Область видимости функции
- Область видимости блока (то, что в скобках {})

## Необъявленные переменные

Так делать не рекомендуется!

```js
function myFn() {
    a = true;
    console.log(a); // true
}

myFn()

console.log(a) // true
```

## Строгий режим

Запрещает использование необъявленных переменных.

```js
'use strict'

function myFn() {
    a = true;
    console.log(a); // ReferenceError: a is not defined at myFn
}

myFn()

console.log(a) // true
```

# Операторы

**Оператор** - это встроенная функция

## Виды операторов
- Арифметические (`+`, `-`, `*`, `/`).
- Сравнения (`===`, `!==`, `<=`, `>=`).
- Логические (`!`, `&&`, `||`).
- Присваивания (`=`).
- Текстовые (`typeof`, `instanceof`, `new`, `delete`).
- Символьные (`()`).

## Операнды

**Операнд (аргумент)** - сущность, которая используется оператором для работы.

В случае присваивания операнды стоят справа и слева от оператора.

## Операторы по количеству операндов

### Унарные операторы

Унарные операторы - такие операторы, которые имеют всегда один операнд (аргумент).

Примеры:

```js
a++             // увеличение значения на 1
+a              // можно конвертировать строку в число
delete obj.a    // удаление свойства у объекта
typeof a        // можно узнать тип переменной
new Object()    // можно создать новый экземпляр объекта
```

### Бинарные операторы

Бинарные операторы требуют два операнда.

```js
a = 5       // присваивание
a + b       // сложение
a += 5      // увеличение переменной на 5
a === b     // проверка на равенство
a && b      // логическая проверка "И"
```

## Форматы записи операторов

### Инфиксная запись

Оператор находится между операндами.

```js
a = 5
a + b
a += 5
a || b
a > b
```

### Префиксная запись

Оператор стоит перед операндом.

```js
++a
delete obj.a
typeof a
```

### Постфиксная запись

Оператор находится после операнда.

```js
a++
myFunction()
```

## Логические операторы

- `!` - не
- `&&` - и
- `||` - или

### Примеры выполнения из консоли
```js
2 && 6  // 6
2 || 6  // 2
```

### Ложные значения

Здесь перечислены все ложные значения в JS:

```js
false
0
''
undefined
null
```


### Конвертация логических значений

Есть функция `Boolean`. Возвращает `true` или `false`.

```js
Boolean(15) // true
Boolean(0) // false
```
### Фукнция `typeof`

```js
typeof 10           // 'number'
typeof 'Alexander'  // 'string'
typeof false        // 'boolean'

typeof 10 === 'number'  // true
```

### Важный момент

Операторы короткого замыкания (И, ИЛИ и НЕ) возвращают значение операнда, а не `true` или `false`!

## Оператор разделения на свойства

Этот оператор мы уже встречали: `...`:

```js
const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)
```

# Шаблонные строки

Это относится к вариантам форматирования строк.

Пример:

```js
const hello = 'Hello'
const world = 'World'

const greeting = `${hello} ${world}`
```


# Обработа ошибок

## Генератор ошибок
Пример, который генерирует ошибку:

```js
const fnWithError = () => {
    throw new Error('Some error')
}

fnWithError() // выполнение кода остановится после появления Uncaught ошибки (непойманной ошибки)

console.log('Continue...')
```

## try/catch

Такая конструкция выполнит код без прерывания на ошибки:

```js
try {
    // выполнение первого блока
} 
catch (error) {
    // если ошибка возникла в первом блоке - идем сюда
}
```

# Инструкции

Инструкция обычно заканчивается точкой с запятой.

Но точка с запятой не требуется после блока инструкций

## Виды структур
- **выражение** - всегда возвращает значение
- **инструкция** - всегда выполняет действия
- **выражение-инструкция** - содержит выражение, оканчивающееся ";"

## Примеры инструкций

```js
let a; // тут нужна ;

const b = 5; // и тут нужна ;

if (a > b) {
    console.log('a is larger');
} // а тут не нужна

for (let i = 0; i < 5; i++) {
    console.log(i);
} // и тут не нужна
```

### Замечание по поводу ;

Точку с запятой можно опускать

## Выражение-инструкция

Примеры:

```js
'abc';

a = a + 3;

c = a + b;

d = 'Good ' + 'Evening';

myFunction(c, d);

console.log('Hey');
```

## Отличие выражений от инструкций

**Выражения могут быть использованы как аргументы для вызова функции**

# Массив

**Массив** - это объект с цифровыми именами свойств.

## Создание массива

```js
/* пример 1 */
const myArray = [1, 2, 3]
consoe.log(myArray)
// [1, 2, 3]

/* пример 2 */
const myArray2 = new Array(1, 2, 3) // новый экземпляр класса Array
console.log(myArray)
// [1, 2, 3]
```

В данном примере `myArray` не равен `myArray2`.

Причина неравенства похожих массивов: объекты созданы в разных местах памяти и переменные будут содержать разные ссылки на места в памяти.

## Структура массива

Массив может хранить данные разных форматов

## Работа с массивами

Можно вручную изменить свойство `length` у массива.

## Методы массивов (функции высшего порядка в массивах, методы прототипов)

```js
/* push - добавить элемент в конец*/
const myArray = [1, 2, 3]
myArray.push(4)

console.log(myArray)    // [1, 2, 3, 4]

/* pop - удаляет последний элемент */
console.log(myArray.pop())  // 4
console.log(myArray)        // [1, 2, 3]

/* unshift - добавить элемент в начале массива */
myArray.unshift(true)
console.log(myArray)    // [true, 1, 2, 3]

/* shift - удалить нулевой элемент */
console.log(myArray.shift())    // true
console.log(myArray) // [1, 2, 3]

/* forEach - применить функцию для каждого элемента */
myArray.forEach(el => console.log(el * 2)) // 2 4 6

/* map - возвращает новый массив, применяя колбэк функцию к каждому элементу */
const newArray = myArray.map(el => el * 3)
console.log(newArray)   // [3, 6, 9]
console.log(myArray)    // [1, 2, 3]
```

# Деструктуризация

Это процесс создания переменных, названия которых соответствуют названию свойств в объекте. Причем значениями переменных становятся значения свойств из объекта.

## Синтаксис (объекты)

```js
const userProfile = {
    firstname: 'Alexander',
    commentsQty: 23,
    hasSignedAgreement: false
}

const { firstname, commentsQty } = userProfile
const { hasSignedAgreement } = userProfile

console.log(firstname)      // 'Alexander'
console.log(commentsQty)    // 23
```

## Синтаксис (массивы)

```js
const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits

console.log(fruitOne)   // 'Apple'
console.log(fruitTwo)   // 'Banana'
```

## Синтаксис (функции)

```js
const userProfile = {
    firstname: 'Alexander',
    commentsQty: 23,
    hasSignedAgreement: false
}

/* 
Берем свойства с именами такими то из значения, которое будет передано в аргумент функции

На основе указанных свойств из будут взяты значения этих свойств из переданного объекта, которые могут использоваться внутри функции
*/
const userInfo = ({ firstname, commentsQty }) => {
    if (!commentsQty) {
        return `User ${firstname} has no comments`
    }
    return `User ${firstname} has ${commentsQty} comments`
}

console.log(userInfo(userProfile)) // 'User Alexander has 23 comments'
```

# Условные инструкции

## Виды
- `if`
- `if ... else`
- `switch`
- тернарный оператор

## Синтаксис

```js
if (условие) {
    // блок кода, выполняемый однократно, если условие правдиво
} else if (условие2) {
    // блок кода, выполняемый однократно, если условие2 правдиво
} else {
    // блок кода, выполняемый однократно, если условие ложно и условие2 ложно
}
```

# switch

Инструкция нужна для определения действия по значению выражения

## Синтаксис

```js
switch (выражение) {
    case A:
        // если выражение === A
        break
    case B:
        // если выражение === B
        break
    default:
        // действия по умолчанию
}
```

# Тернарный оператор

Конструкция с тернарным оператором - выражение, которое возвращает значение.

## Синтаксис

```js
Условие ? Выражение1 : Выражение2

// другой формат записи
Условие
    ? Выражение1
    : Выражение2
```

Рассмотрим подробнее:

- `Условие` - любое выражение.
- `Выражение1` - если `Условие` правдиво → возвращается результат выражения `Выражение1`.
- `Выражение2` - если `Условие` ложно → возвращается результат выражения `Выражение2`.

## Пример

```js
let a = 10
let result = 'Число равно пяти'

a > 5
    ? result = 'Число больше пяти'
    : result = 'Число меньше пяти'

console.log(result)
```

# Циклы

Циклы дают возможность избежать повторения кода и сделать какие то повторяющиеся действия.

Все циклы являются инструкциями

## Виды циклов
- `for`
- `for ... in ...`
- `while`
- `do ... while`
- `for ... of ...`

### Цикл `for`

#### Структура

```js
for (инициализация_итератора; условие; итерационное действие) {
    // блок кода
}
```

#### Пример
```js
for (let i = 0; i < 5; i++) {
    console.log(i)
}
```

### Цикл `while`

#### Структура

```js
while (условие) {
    // блок кода
}
```

#### Пример

```js
let i = 0

while (i < 5>) {
    console.log(i)
    i++
}
```

### Цикл `do while`

#### Структура

```js
do {
    // блок кода
} while (Условие)
```

#### Пример

```js
let i = 0

do {
    console.log(i)
    i++
} while (i < 5)
```


### Цикл `for in`

Благодаря этому циклу мы можем перебрать все свойства объекта

#### Структура

```js
for (key in Object) {
    // блок кода
    // Object[key]
}
```

#### Пример

```js
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObjectp[key])
}
```

#### Пример для `forEach`

##### Перебор по ключам

```js
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})
```

##### Перебор по значениям

```js
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.values(myObject).forEach(value => {
    console.log(value)
})
```


### Цикл `for of`

Такой цикл нужен для пробежки по итерируемым структурам

> Объект - не итерируемая сущность!

#### Структура

`Iterable` - переменная, по которойм можно перебрать элементы

```js
for (Element of Iterable) {
    // блок кода
}
```

#### Пример

```js
const myString = 'hey'

for (const letter of myString) {
    console.log(letter)
}
```

# Модули

Модули позволяют структурировать проект и избегать дублирование блоков кода.

## Синтаксис Export - Import

```js
/* module1.js */
export ...
```

```js
/* module2.js */
import ...
```

### Пример

```js
/* moduleOne.js */
const myName = () => {
    console.log('Alexander')
}

export default myName
```

Теперь осуществляем подключение экспортированной функции

При использовании ключевого слова `default` мы можем экспортировать функцию так, что при ее использовании в другом файле мы можем дать ей другое название. В данном примере мы даем функции `myName` название `printMyName`.

```js
/* moduleTwo.js */
import printMyName from './moduleOne.js'

printMyName()   // Alexander
```


### Важно!

Для корректно работы с этой технологичей нужно, чтобы код модулей находился в файлах с расширением `mjs`!

### Экспорт-Импорт переменных

В данном примере нужно, чтобы имена переменных совпадали

```js
/* moduleOne.js */
const one = 1
const two = 'two'

export {
    one,
    two
}
```

```js
/* moduleTwo.js */
import {
    one,
    two
} from '.moduleOne.js'

console.log(one)    // 1
console.log(two)    // 'two'
```

Чтобы изменить название импортируемой переменной нужно рядом с ней написать `as newNameOfValue`

Пример:

```js
import {
    one as oneRenamed,
    two
} from './modulene.js'

console.log(oneRenamed) // 1
```

## Правила работы с модулями

1. Модули должны быть одноцелевыми;
2. Распологайте все `export` инструкции внизу файла;
3. Распологайте все `import` инструкции вверху файла;
4. По возможности используйте `export default`;

# Классы и прототипы

Здесь будет изложено про синтаксис классов из ES6 (2015 год). Именно тогда они впервые появились в JavaSctipt.

Классы позволяют создавать прототипы для объектов. На основании прототипов создаются экземпляры. Каждый экземпляр имеет свои собственные свойства и методы. 

Экземпляры наследуют методы и свойства прототипов.

Класс - это шаблон для создания экземпляров класса.

## Пример класса

Для названия класса используй метод `PascalNotation` "обзывания" класса.

```js
class Comment {
    constructor(text) {
        /* конструктор класса. Определяет сам класс. Аналог __init__ класса в Python */
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

/* создание экземпляра класса */
const firstComment = new Comment('First comment')
```

### Отдельно про `this`

Это специальная переменная, которая указывает на экземпляр класса.

## Создание экземпляра класса

```js
const firstComment = new Comment('First comment')
```

## Цепочка прототипов

Цепочка прототипов означает такую последовательность экземпляров, классов и объектов, в которой каждая сущность наследуюет свойства родительской сущности.

`firstComment` → `Comment` → `Object`

## Проверка принадлежности с помощью `instanseof`

```js
class Comment {
    constructor(text) {
        /* конструктор класса. Определяет сам класс. Аналог __init__ класса в Python */
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

/* создание экземпляра класса */
const firstComment = new Comment('First comment')

firstComment instanceof Comment // true
firstComment instanceof Object  // true
```

## Вызов методов

```js
class Comment {
    constructor(text) {
        /* конструктор класса. Определяет сам класс. Аналог __init__ класса в Python */
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

/* создание экземпляра класса */
const firstComment = new Comment('First comment')

firstComment.upvote()
console.log(firstComment.votesQty)  // 1
firstComment.upvote()
console.log(firstComment.votesQty)  // 2
```

## Проверка принадлежности свойств экземпляру объекта

```js
const firstComment = new Comment('First comment')

firstComment.hasOwnProperty('text')             // true
firstComment.hasOwnProperty('votesQty')         // true
firstComment.hasOwnProperty('upvote')           // false
firstComment.hasOwnProperty('hasOwnProperty')   // false
```

## Статические методы

Такие методы создаются с помощью ключевого слова `static`.

Статический метод доступен как свойство класса и не наследуется экземплярами класса

```js
class Comment {
    constructor(text) {
        /* конструктор класса. Определяет сам класс. Аналог __init__ класса в Python */
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

/* вызываем статический метод */
Comment.mergeComments('First comment.', 'Second comment.')
```

## Расширение других классов

Создаем новый класс и пишем ключевое слово `extends`, которым мы указываем на класс, который мы хотим расширить.

```js
class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)
console.log(myArray)
console.log(myArray.sum())
```

`acc` (от слова accomulator) - переменная, которая может меняться в зависимости от пробежки по массиву/

Продробнее о методе `reduce` можно почитать в интернете [или же здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Цепочка прототипов

`myArray` → `NumbersArray` → `Array` → `Object`

## Прототип

У каждого экземпляра класса есть скрытое свойство, которое называется `__proto__`. За счет него как раз и формируется цепочка прототипов

Посмотрим на работу этого свойства

```js
Comment.prototype === firstComment.__proto__ // true
```

Выведется `true`, так как общее у класса и экземпляра класса - объект, в котором находятся методы, ранее определенные нами в классе.

## Важное замечание

Строки и числа ведут себя как объекты.

# Промисы

Промисы позволяют обрабатывать отложенные во времени события.

Пример: послать запрос на сервер и получить ответ. Ответ от сервера придет спустя несколько секунд или миллисекунд.. Есть два варианта:
- **Выполнять какие то действия в момент ожидания ответа.**
- Ничего не делать (нежелателен).

Такой запрос на сервер называется **асинхронным**.

Еще пример: запрос на запись в базу данных.

## Определение и поведение промиса

**Промис** - это обещание предоставить результат позже.

Промис может вернуть ошибку, если результат предоставить невозможно.

**Промис является объектом.**

## Состояния промиса
- ожидание (результата или ошибки) - `pending`
- исполнен (результат получен) - `resolved`
- отклонен (возникла ошибка) - `rejected`

## Создание промиса

Вновь созданный промис будет в состоянии `pending`.

`resolve` и `reject` - функции

```js
const myPromise = new Promise((resolve, reject) => {
    /*
    Выполнение асинхронных действий

    Внутри этой функции нужно в результате вызвать одну из функций - resolve или reject   
    */
});
```

## Получение результата промиса

```js
myPromise
    .then(value => {
        /*
        Действия в случае успешного исполнения Промиса

        Параметр value - это значение, переданное в вызове функции resolve внутри Промиса
        */
    })
    .catch(error => {
        /*
        Действия в случае отклонения Промиса

        Параметр error - это значение, переданное в вызове функции reject внутри Промиса
        */
    })
```

## Реальное применение промисов

### Получение данных с помощью FETCH API

Функции `fetch` нет в Node.js, поэтому код ниже следует запускать в веб-браузере

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())      // вызовется, если промис выполнен. Метод json возвращает промис, который при результате resolved вернет JSON объект, с которым можно работать
    .then(json => console.log(json))        // вызовется, если промис выполнен. На экран выведется объект, созданный на основе данных, полученных на прыдыдущем объекте
    .catch(error => console.error(error))   // вызовется, если промис вернул ошибку. На экран выведем эту ошибку
```

### Еще пример

Пример содержит один промис, чтобы упросить запись

```js
const getData = url => 
    new Promise((resolve, reject) => 
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
```

> Функцию `getDate` можно вынести в отдельный модуль `utilities.mjs` и импортировать ее, чтобы использовать



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
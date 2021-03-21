
// Ponomarov Lesson 4 part 2

// Завдання 1

// Напишіть функцію, яка повинна повертати суму всіх чисел усередині масиву. Функція повинна враховувати позитивні та від'ємні значення
// Приклад масиву
const numbers1 = [1, -1, 2, 3];
function sum(numbers1) { let sum = 0;
    for (i = 0; i < numbers1.length; i++) {
        sum += numbers1[i];
    }
    return(sum)
}
// Виклик функції
console.log(sum(numbers1)); // повинно вивести 5

// Завдання 2
// Коли ви запускаєте функцію arrayFromRange, функція повинна виводити числа від мінімального до максимального значення в форматі масиву
// Також ця функція повинна приймати від'ємні числа


function arrayFromRange(min, max) { 
    let arr  = []; for (i = Math.min(min, max); i <= Math.max(min, max); i++ ) {
    arr.push(i)
    }
    return(arr)
 }
const numbers2 = arrayFromRange(1, 4); // мінімальне та максимальне значення
 
console.log(numbers2); // повинно повернути [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // повинно повернути [-10, -9, -8]


// Завдання 3
// Потрібно створити функцію, яка повертатиме максимальне число з масиву

const numbers3 = [1, 2, 3, 4, 5];

function getMax([]) {
    let max = Math.max.apply(null, numbers3);
return(max);
}
const maxNumber = getMax(numbers3);

console.log(maxNumber) // має відображати максимальне число з масиву - 5


// Завдання 4

// Завдання складається з 3 частин
// 1. На основі масиву movies потрібно повернути усі фільми, які були випущені в 2019 році з рейтингом більше 4
// 2. Потім відсортуйте відфільтровані раніше фільми за рейтингом у порядку спадання
// 3. В кінці поверніть тільки назви відсортованих фільмів по тайтлу - ["a", "c"]

// 1. На основі масиву movies потрібно повернути усі фільми, які були випущені в 2019 році з рейтингом більше 4
let movies = [
{title: 'a', year: 2019, rating: 4.7},
{title: 'b', year: 2018, rating: 4.4},
{title: 'c', year: 2019, rating: 4.3},
{title: 'd', year: 2019, rating: 3.9},
]
function filterByRating(movies) {
    if (movies.rating >= 4) {
        return true;
    }
    return false;
}
function filterByYear(movies) {
    if (movies.year == 2019) {
        return true;
    }
    return false;
}
function filterByRatingAndbyYear(movies) {
    if (movies.year == 2019 && movies.rating >= 4) {
        return true;
    }
    return false;
}
let byRating = movies.filter(filterByRating);
let byYear = movies.filter(filterByYear);
let byRatingAndbyYear = movies.filter(filterByRatingAndbyYear);
// console.log('Фильмы с рейтингом выше 4 \n', byRating);
// console.log('Фильмы 2019 года \n', byYear);
console.log('Фильмы 2019 года с рейтингом 4 и выше: \n', byRatingAndbyYear);

// 2. Потім відсортуйте відфільтровані раніше фільми за рейтингом у порядку спадання

let filterByDescendingOrder = movies.sort(function(a, b) {
    return parseFloat(b.rating) - parseFloat(a.rating);
});
console.log('Сортировка в порядке убывания рейтинга: \n', filterByDescendingOrder);

// 3. В кінці поверніть тільки назви відсортованих фільмів по тайтлу - ["a", "c"]

function filterByTitle(movies) {
    if (movies.title == "a" || movies.title == "c" ) {
        return true;
    }
    return false;
}
let byTitle = movies.filter(filterByTitle);
function byTitleFun() { 
    let result = [];
    console.log(byTitle.length)
    for (i = 0; i <= byTitle.length - 1; i++ ) {
        result.push(byTitle[i].title); 
    }
    return result
}
console.log('Фильмы с названием "а" и "с": \n',byTitleFun())



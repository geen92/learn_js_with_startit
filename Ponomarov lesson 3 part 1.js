// Ponomarov lesson 3

// Ex 1

// Объект post

const post = {
    titleBody: "Sweet",
    author: "People",
    views: 100,
    isLive: true,
    someFunction: function sayHello() {
        //console.log("Hello world!")
        return "Hello world!"
    },
    coment: {
        name: "Gena",
        lastName: "Ponomarov",
        coment: "JavaScript is good"
    }
}

// Ex 1.1

// Ключ тела комментария
const keyComent = Object.keys(post);
console.log(keyComent[5]);
const keys = Object.keys(post);
console.log(keys[0]);

// Значение someFunction
console.log(post.someFunction())

// Ex 1.2

// Длина объекта
const keys1 = Object.keys(post);
console.log(keys1.length);

// Возвращает список значений 
for (let key in post) {
    console.log(post[key])
}
//for (let key in post) {
    // console.log(post, post[key])
// }
// for (let key in post) {
    // console.log(key);
//   }

// Напиcfk функцию под названием «helloColleague», вызвал функцию
let helloColleagues = {
    company: "Sweet.tv",
    team: "team",
    lol: (ololo) => {
        return(`I am working in ${helloColleagues.company} in amazing ${helloColleagues.team}`)
    }
}
console.log(helloColleagues.lol())

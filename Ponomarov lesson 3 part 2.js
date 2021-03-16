// Ponomarov lesson 3 part 2

// Ex 1

// Объект post

const post = {
    titleBody: "Sweet",
    author: "People",
    views: 100,
    coment: {
        name: "Gena",
        lastName: "Ponomarov",
        isLive: true,
        coment: "JavaScript is good",
        someFunction: function sayHello() {
            //console.log("Hello world!")
            return "Hello world!"
        },
    }
}

console.log(post.coment)
console.log(post.coment.someFunction())

// Ex 1.1.

// Длина объекта = 4
console.log(Object.keys(post).length)
console.log(Object.keys(post))

// Вывести типы в объекте. Почему-то типы выводятся 16 раз вместо 4... странно
console.log(Object.values(post).length);
console.log(typeof Object.values(post)[0]);
console.log(typeof Object.values(post)[1]);
console.log(typeof Object.values(post)[2]);
console.log(typeof Object.values(post)[3]);


let y = (Object.values(post))
let x = (Object.values(post).length)
console.log(x)
console.log(y[0])

for (let key in y) {
     for ( let i = 0; i < x; i++ )
     console.log(typeof y[i])  //  help!!!
}

//  console.log(typeof Object.keys(post)[0])
// console.log(typeof post.coment)
// console.log(post.length)
// console.log(typeof post)
// console.log(post)
// for (let key in post) {
//    console.log(key.length)
    // for ( i = 0; i < key.length; ++i )
// console.log(key[i])
// }
//console.log(post.length)
//console.log(typeof post)

// Ex 2.1

// Пустой объект
let isEmpty = {};
// console.log(Object.values(isEmpty).length)
let rock = Object.values(isEmpty).length
// console.log(rock)
if (rock == 0 ) { console.log(true);
} else { console.log(false);
}

// Заполненный объект
let isNoEmpty = {
    Cat: "Tom"
};
// console.log(Object.values(isNoEmpty).length)
let rock1 = Object.values(isNoEmpty).length
// console.log(rock1)
if (rock1 == 0 ) { console.log(true);
} else { console.log(false);
}

// Ex 2.2
// Вывести большее число
let maxNumber = (a, b) => {
return (Math.max(a, b))
}
console.log(maxNumber(1,2))

// Сумма значений объекта
let salaries = {Mykola: 250,
    Pavlo: 250, 
    Petro: 500
}

let masiv = Object.values(salaries);
let summamasiva = (lol) => {
let summa = 0;
for ( let i = 0; i < lol.length; i++) {
    summa += lol[i];
    }
console.log(summa);
}
summamasiva(masiv);



// Ex 3.1           не успел))) засыпаю Zzzzzzzzzzz.............

let menu = {width: 200, 
    height: 300, 
    title: "Мое меню"
};

console.log(typeof Object.values(menu)[0]);
console.log(Object.values(menu)[0]);

v = Object.values(menu)[0]
c = Object.values(menu)[1]

let umn = (v,c) => c * 2
console.log(umn(v,c))
    // let summa = 0;
    // for ( let i = 0; i < lol.length; i++) {
    //    summa += lol[i];

// Умножение на 2

// let multiplyNumeric = (lol) => {
    // let summa = 0;
    // for ( let i = 0; i < lol.length; i++) {
    //    summa += lol[i];
// }
    // console.log(summa*2);
// }
    // multiplyNumeric(masiv);
    // function seyHello () {

    //     console.log("Hello")
    //     }
    //     seyHello();
    //     ///////////////////////////////
    //     function seyX (userName) {
        
    //         console.log(`Hello ${userName}`)
    //     }
        
    //     seyX("Gex")
    //     ///////////////////////////////
    //     function sey (name = "Joy", x = 1){
    //         let sms = name + 1;
    //         console.log(sms)
    //         return(sms)
    //     }
    //     a = sey()
    //     console.log(a)
    //     ///////////////////////////////
    //     let sum = (x,y) => {
    //         return(x + y)
    //     } 
    //     console.log(sum(1,3))
    //     ///////////////////////////////
    //     let umn = (b,c) => b * c
    //     console.log(umn(4,6))
        




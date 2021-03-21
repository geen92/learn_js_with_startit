// Ponomarov Lesson 4 part 1

/*Ex 1 Create array, called it Post which should contains any:
- numeric value,
- boolean value,
- string value,
- undefined,
- function with some console.log,
- array of objects
Each value should have different array index*/

let Post = [ 1, true, "Cat", undefined,  x = () => { 
    console.log("Hola amigos!")
}, [{name: "Harry Potter"}, {}]]

/*Ex 1.1
Based on previously created arrray:
- Get the first and last array value*/
console.log(Post[0])
console.log(Post[Post.length - 1])
// - Get value of the function by array index and log value
console.log(Post[4]())
// - Get value of "array of objects" by array index and log value
console.log(Object.values(Post)[Post.length - 1])
console.log(Object.values(Post[Post.length - 1])[0].name)


/*let Gost = [
    1,
    false,
    "строка",
    undefined,
    a = () => {
        console.log(1);
    },
    [{key: "value"}, {}]
]
// - Get the first and last array value
console.log(Gost[0])
console.log(Gost[Gost.length-1])
// - Get value of function by array index and log value
console.log(Gost[4]())
// - Get value of "array of objects" by array index and log value
console.log(Object.values(Gost)[5])


let first = Gost[0];
let last = [Gost.length-1];
let funcValue = Gost[4];
console.log(first);
console.log(last);*/
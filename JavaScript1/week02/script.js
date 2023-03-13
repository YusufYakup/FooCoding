//1,
/** print first hello world	 */
console.log("Hello World! I just started learning JavaScript!")

//2,
console.log("I'm awesome")

//3,
var t
console.log("the value of my variable t will be: undefined")
console.log(t)
t = 5
console.log("the value of my variable t will be: 5")
console.log(t)

//4,
var y = "string"
console.log("the value of my variable y will be: string")
console.log(y)
y = "new string"
console.log("the value of my variable y will be: new string")
console.log(y)

//5,
var z = 7.25
console.log(z)
var a = Math.round(z)
console.log(a)
if (z > a) {
  console.log(z)
} else {
  console.log(a)
}

var animals = []
console.log("the value of my array will be: empty array")
console.log(animals)
var myFavoriteAnimals = ["froge", "horse", "rhino"]
console.log(myFavoriteAnimals)
/* push methods add a new value to the last of arrat */
myFavoriteAnimals.push("Dinosaur")
/* unshift methods add a new value to the first of arrat */
myFavoriteAnimals.unshift("sheep")
console.log(myFavoriteAnimals)

//7,
let myString = "this is a test"
console.log(myString)
let lengthOfMyString = myString.length
console.log(lengthOfMyString)

//8,
let firstName = "prg"
let lastName = "YaKup"
let age = 30
let progremmer = true

console.log("The type of my variable firstName is: string")
console.log("The type of my variable lastName is: string")
console.log("The type of my variable age is: number")
console.log("The type of my variable progremmer is: boolean")

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof age)
console.log(typeof progremmer)

if (typeof firstName === typeof lastName) {
  console.log("SAME TYPE")
} else {
  console.log("NOT SAME TYPE")
}
if (typeof firstName === typeof age) {
  console.log("SAME TYPE")
} else {
  console.log("NOT SAME TYPE")
}
if (typeof firstName === typeof progremmer) {
  console.log("SAME TYPE")
} else {
  console.log("NOT SAME TYPE")
}

//9,
let x = 7
x = x % 3
console.log(x)

let k = 877
y = k % 90
console.log("90 fits 9 times in 877, with a remainder is " + y)

let b = 74
z = b % 5
console.log("5 fits 12 times in 74, with a remainder is " + z)

let c = 287
a = c % 12
console.log("12 fits 23 times in 87, with a remainder is " + a)

//10,
let myArray = ["name", 30, true, 3.14]
console.log(myArray)
console.log("you may store different data types in a single array")

let q = 6 / 0
let f = 10 / 0

console.log(Number.isFinite(q))
console.log(Number.isFinite(f))

if (q === f) {
  console.log("Yes, they are equal")
} else {
  console.log("No, they're not equal")
}

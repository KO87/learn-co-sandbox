function doSomething(thing) {
  console.log(thing)
}
 
doSomething('anything')

function sayHelloToIsabel() {
  console.log("Hello, Isabel!")
}
function sayHelloToSofia() {
  console.log("Hello, Sofia!")
}
function sayHelloToBrendan() {
  console.log("Hello, Brendan!")
}

function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`)
}
 
sayHelloTo('Isabel') // "Hello, Isabel!"
sayHelloTo("Jane") // "Hello, Jane!"
sayHelloTo("R2-D2") // "Hello, R2-D2!"
sayHelloTo(1) // "Hello, 1!"
 

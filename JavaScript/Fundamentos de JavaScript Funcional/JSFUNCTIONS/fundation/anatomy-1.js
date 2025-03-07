//Function declaration

function sayHello(){
    console.log('Hello!')
}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}!`);
}

sayHelloTo('Mike')
sayHelloTo()

function returnHi(){
    return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi());

function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Jhon'));

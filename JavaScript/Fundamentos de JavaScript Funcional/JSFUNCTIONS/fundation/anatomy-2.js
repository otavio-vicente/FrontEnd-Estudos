//Anonymous function
(function (a, b, c) {
    return a + b + c
})

//Function expression = quando eu atribuo o valor de uma function para uma variável

const sum = function (a, b) {
    return a + b
}

const result = sum(7, 59)
console.log(result)
console.log(sum(2, 3))

const anotherSum  = sum
console.log(anotherSum(5, 9))

let x = 3
console.log(x);


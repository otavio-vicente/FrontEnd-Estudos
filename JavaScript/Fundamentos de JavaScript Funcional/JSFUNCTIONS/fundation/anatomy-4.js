//Anonymous function
//IIFF - Imediately Invoked Function Expression
(function (a, b, c) {
    let x = 2
    console.log( `Result: ${a + b + c}`);
    console.log(x);
    
})(1, 2, 3);

(function(){
    let x = 300
    console.log(x)
})();

(() => {
    console.log('arrow #01');
})();

(() => console.log('arrow #01'))();
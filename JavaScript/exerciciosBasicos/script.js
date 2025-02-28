//Ex1 Solicitar valor e mostrar soma, multiplicação, divisão e subtração

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let retorno;
let soma = (num1 + num2);
let mult = num1 * num2;
let div;
if(num1 === 0 || num2 === 0){
    alert("Não é possível divisão por 0.")
} else {
    div = num1 / num2;
}
let sub = num1 - num2; 

if(div != 0){
    alert(retorno = "Soma = " + soma + "; Multiplicação = " + mult + "; Divisão = " + div + "; Subtração = " + sub); 
} else {
    alert(retorno = "Soma = " + soma + "; Multiplicação = " + mult + "; Subtração = " + sub); 
}

//Ex2 Média aritimetica de dois numeros

let num3 = parseFloat(prompt("Digite o primeiro número:"));
let num4 = parseFloat(prompt("Digite o segundo número:"));

let media = (num3 + num4) / 2;
alert("Média: " + media);

//Ler e exibir cad letra de uma palavra

let palavra = prompt("Digite uma palavra:");

for(let i=0; i<palavra.length; i++) {
    console.log(palavra[i]);
}
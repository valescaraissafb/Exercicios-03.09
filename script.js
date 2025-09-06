
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i}² = ${i * i}`);
}

let i = 0;
while (i <= 50) {
  console.log(i);
  i += 5;
}

let contar= 0;
let numero = 100;
while (numero <= 200) {
  contar++;
  numero++;
}
console.log("Quantidade de números de 100 até 200:", contar); 

let contador = 1;
let texto = "";
do {
  texto += ("Estudando JavaScript\n");
  contador++;
} while (contador <= 7);
console.log(texto);

function saudacao() {
  console.log("Olá, seja bem-vindo ao JavaScript!");
}
saudacao(); 

function bomDia(nome) {
 console.log(`Bom dia, ${nome}!`)
} 
bomDia("Valesca")

function dobro(numero) {
  return numero * 2;
}
console.log("O dobro de 26 é = ", dobro(26));

function soma(num1, num2) {
  return num1 + num2;
}
let resultado = soma(15, 5);
console.log("A soma dos dois números recebidos é = ",resultado);  

function ehPar(numero) {
  return numero % 2 === 0;
}
console.log(ehPar(12));   
console.log(ehPar(17));  
console.log(ehPar(2)); 
console.log(ehPar(-9));
console.log(ehPar(11));



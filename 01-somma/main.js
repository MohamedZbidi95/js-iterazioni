/*
Sum (dispensa "Cicli", chapter 3)
Ask the user for a number N.
Calculate the sum of all the integers from 1 to N and print the result.

Chiedi all'utente un numero N.
Calcola la somma di tutti i numeri interi da 1 a N e stampa il risultato.
*/
//https://boolean-aiwd-1.netlify.app/lezioni/js-cicli.html

const userNumber = Number(prompt("Hola chico, give me a number to add"));
let sum = 0;

if (!userNumber || userNumber <= 0) {
  console.log("Invalid value. Enter a whole number greater than 0.");
} else {
  for (let i = 1; i <= userNumber; i++) {
    sum += i;
  }
  console.log(`The sum of numbers from 1 to ${userNumber} is: ${sum}`);
}

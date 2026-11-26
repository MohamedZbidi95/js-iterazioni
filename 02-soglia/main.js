/*
Threshold (dispensa "Cicli", chapter 4 - scope)
Declare a variable "threshold" with the value 18, outside the loop.
Ask the user for 4 grades with prompt.
For each grade, print if it is sufficient or insufficient, comparing it with the threshold.
After the loop, print the value of "threshold" and check that the variable "grade"
is not accessible outside the block.

Dichiara fuori dal ciclo una variabile "soglia" con il valore 18.
Chiedi all'utente di inserire 4 voti con prompt.
Per ogni voto, stampa se è sufficiente o insufficiente confrontandolo con la soglia.
Dopo il ciclo, stampa il valore di "soglia" e verifica che la variabile "voto"
non sia accessibile fuori dal blocco.
*/
// https://boolean-aiwd-1.netlify.app/lezioni/js-cicli.html

const threshold = 18;

for (let i = 0; i < 4; i++) {
  let grade = Number(prompt("Hola chico, give me grades!"));
  if (grade < threshold) {
    console.log("insufficient!");
  } else {
    console.log("sufficient!");
  }
}

console.log(threshold);

// grade is declared inside the for loop, so it does not exist outside it (block scope)
// console.log(grade);

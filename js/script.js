// Palidroma
let ask = prompt('immetti una parola')
function palidroma(text) {
  const reversedwords = text.split('').reverse().join('');
  return reversedwords
}

const reversedask = palidroma(ask);
const cleanedask = ask.toLowerCase();

if (cleanedask === reversedask) {
  console.log('la parola è palidroma')
}
else {
  console.log('la parola non è palidroma')
}

// Pari o dispari 

function randomnumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const choice = prompt('scegliere pari o dispari')
const giocatore = randomnumbers(1, 5);
console.log(`giocatore numero ${giocatore}`);
const computer = randomnumbers(1, 5);
console.log(`computer numero ${computer}`);

sum = giocatore + computer
console.log(`somma dei numeri ${sum}`);

function even(num) {
  return num % 2 === 0;
}

const totalsum = even(sum)
let result;
if (totalsum) {
  result = 'pari';
  console.log('pari');
}
else {
  result = 'dispari';
  console.log('dispari');
}

if (choice === result) {
  console.log('hai vinto');
} else {
  console.log('hai perso');
}



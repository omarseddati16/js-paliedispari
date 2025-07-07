// Palidroma
let ask = prompt('immetti una parola ')
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




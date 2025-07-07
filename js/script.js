// Palidroma
function palidroma(text) {
  let ask = prompt('immetti una parola ')
  const reversedwords = ask.split('').reverse().join('');
  if (ask === reversedwords) {
    console.log('la parola è palidroma')
  }
  else {
    console.log('la parola non è palidroma')
  }
}

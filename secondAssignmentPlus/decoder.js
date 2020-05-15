// Код скрытый в комментарий писал для себя, для лучшего понимания процесса.

// let text = `Back in the good old days | the "Golden Era" of Computers, it was easy
// to separate the men from the boys (sometimes called "Real Men" and "Quiche
// Eaters" in the literature). During this period, the Real Men were the ones
// that understood computer programming, and the Quiche Eaters were the ones
// that didn't.`;
//
// let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';
//
// let encode = (key, text) => {
//   const keyCode = 'a'.charCodeAt(0);
//   text = text.toLocaleLowerCase();
//   let encoded = '';
//   for (let i = 0; i < text.length; i++) {
//     const code = text.charCodeAt(i) - keyCode;
//     if (code < 0 || code >= 26) {
//       encoded += ' ';
//     } else {
//       encoded += key[code];
//     }
//   }
//
//   console.log(encoded);
//   return;
// }

let decode = (key, text) => {
  const keyCode = 'a'.charCodeAt(0);
  const keyLength = key.length;
  text = text.toLocaleLowerCase();
  let decoded = '';
  for (let i = 0; i < text.length; i++) {
    const keyIndex = key.indexOf(text[i]);
    const symbol = String.fromCharCode(keyIndex + keyCode);
    const length = decoded.length;
    if (symbol.match(/[a-z]/i)) {
      decoded += symbol;
    } else if (length > 0 && decoded[length - 1] !== ' ') {
      decoded += ' ';
    } else {
      decoded += '';
    }
  }

  console.log(decoded);
  return;
}

/*
  1 - A função sum(a, b) retorna a soma do parâmetro a com o b
*/

const sum = (a, b) => {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error(
        'parameters must be numbers'
      );
    }
    const result = a + b;
    return result;
  } catch (e) {
    throw e;
  }
};

/*
  2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
*/

const myRemove = (arr, item) => {
  const returnArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== item) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
};

/*
  3 - A função myFizzBuzz(num) recebe um número num e retorna 'fizzbuzz' se o número for divisível por 3 e 5 , retorna 'fizz' se for divisível apenas por 3 , retorna 'buzz' se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
*/

const myFizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 !== 0 && num % 5 !== 0 && typeof num === 'number') {
    return num;
  } else if (typeof num !== 'number') {
    return false;
  }
};

/*
  4 - Para as funções encode e decode crie os seguintes testes em Jest:
*/

const encode = (strToEncode) => {
  for (let i = 0; i < strToEncode.length; i += 1) {
    if (strToEncode[i] === 'a') {
      strToEncode = strToEncode.replace('a', '1');
    } else if (strToEncode[i] === 'e') {
      strToEncode = strToEncode.replace('e', '2');
    } else if (strToEncode[i] === 'i') {
      strToEncode = strToEncode.replace('i', '3');
    } else if (strToEncode[i] === 'o') {
      strToEncode = strToEncode.replace('o', '4');
    } else if (strToEncode[i] === 'u') {
      strToEncode = strToEncode.replace('u', '5');
    }
  }
  return strToEncode;
};

const decode = (strToDecode) => {
  for (let i = 0; i < strToDecode.length; i += 1) {
    if (strToDecode[i] === '1') {
      strToDecode = strToDecode.replace('1', 'a');
    } else if (strToDecode[i] === '2') {
      strToDecode = strToDecode.replace('2', 'e');
    } else if (strToDecode[i] === '3') {
      strToDecode = strToDecode.replace('3', 'i');
    } else if (strToDecode[i] === '4') {
      strToDecode = strToDecode.replace('4', 'o');
    } else if (strToDecode[i] === '5') {
      strToDecode = strToDecode.replace('5', 'u');
    }
  }
  return strToDecode;
};

/*
  5 - A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética:
*/

// const techList = (arr, str) => {
//   const newArr = [];
//   const obj = {};
//   const orderedArr = arr.sort(function(a,b){return a - b});
//   for (let i = 0; i < arr.length; i += 1) {
//     obj.tech = orderedArr[i];
//     obj.name = str;
//     newArr.push(obj);
//   }
//   return newArr;
// }


module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList};

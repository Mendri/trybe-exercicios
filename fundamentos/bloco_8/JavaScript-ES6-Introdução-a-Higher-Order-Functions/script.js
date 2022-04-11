/*
Vamos praticar com os seguintes exercícios:
1 - Crie uma função que retorne a string 'Acordando!!' ;
2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
*/

const wakeUp = () => "Acordando!!";

const drinkCoffe = () => "Bora tomar café!!";

const sleep = () => "Partiu dormir!!";

const doingThings = (funct) => console.log(funct());

doingThings(wakeUp);
doingThings(drinkCoffe);
doingThings(sleep);

/*
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
*/

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const nameAndEmail = (nomeCompleto) => {
  return `${nomeCompleto.replace(" ", "_").toLowerCase()}@trybe.com`;
};

console.log(newEmployees(nameAndEmail));

/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const sorteio = (userNumber, callback) => {
  const winningNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  return callback(winningNumber, userNumber);
};

const luckyShoot = (winningNumber, userNumber) => {
    if (winningNumber === userNumber) {
        console.log(winningNumber);
        console.log(userNumber);
        return "Parabéns você ganhou";
      } else if (winningNumber !== userNumber) {
        console.log(winningNumber);
        console.log(userNumber);
        return "Tente novamente";
      }
};

console.log(sorteio(2, luckyShoot));

/*
3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const lastHOF = (gabarito, userAnswers, callback) => callback(gabarito, userAnswers);

const lastCallBack = (gabarito, userAnswers) => {
    let points = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        if (gabarito[i] === userAnswers[i]) {
            points += 1;
        } else if (gabarito[i] !== userAnswers[i] && userAnswers[i] !== 'N.A') {
            points -= 0.5;
        }
    }
    return points;
}

console.log(lastHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, lastCallBack))
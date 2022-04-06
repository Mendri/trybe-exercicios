const {sum, myRemove, myFizzBuzz, encode, decode, techList} = require('./script');

/* 
Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

describe('01 - Somas', () => {

    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    
    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    
    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
        expect(() => {sum(4, '5')}).toThrow();
    })
    
    it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect( () => {sum(4, '5')}).toThrow(new Error('parameters must be numbers'));
    });

})

/*
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('02 - Removendo Items', () => {

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });

})

/*
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe('03 - FizzBuzz', () => {

    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    })

    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('Pato')).toBe(false);
    })

})

/*
Teste se encode e decode são funções;
Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente
Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente
Teste se as demais letras/números não são convertidos para cada caso
Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

describe('04 - Encode e Decode', () => {

    it('Teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })

    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toBe('12345');
    })

    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('12345')).toBe('aeiou');
    })

    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('Marçal')).toBe('M1rç1l');
        expect(decode('M1rç1l')).toBe('Marçal');
    })

    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('Marçal')).toHaveLength(6);
        expect(decode('M1rç1l')).toHaveLength(6);
    })

})

/*
    Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código 
*/

// describe('05 - Função techList', () => {

//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

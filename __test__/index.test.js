const aula = require('../index');

describe ('calculadora', () => {
    
    it ('devera retonar a soma de dois numeros', () => {
        expect(aula.soma(2,1)).toBe(3);
    })
    it ('devera retonar a multiplicação de dois numeros', () => {
        expect(aula.multi(2,1)).toBe(2);
    })
    it ('devera retonar a divisao de dois numeros', () => {
        expect(aula.divisao(9,3)).toBe(3);
    })
})
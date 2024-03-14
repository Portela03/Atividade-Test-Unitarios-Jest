const Calculadora = require('./Calculadora');

describe("Calculadora", () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    it("deve calcular a adição corretamente", () => {
        expect(calculadora.add(2, 3));
        expect(calculadora.add(2, 3, 4,5));
        expect(calculadora.add(-5, 3, 8,5));
    });

    it("deve calcular a subtração corretamente", () => {
        expect(calculadora.subtract(5, 3)).toBe(2);
        expect(calculadora.subtract(10, 3, 2)).toBe(5);
        expect(calculadora.subtract(20, 5, 3, 2)).toBe(10);
    });

    it("deve calcular a divisão corretamente", () => {
        expect(calculadora.divide(6, 3)).toBe(2);
        expect(calculadora.divide(12, 2, 2)).toBe(3);
        expect(() => calculadora.divide(6, 0)).toThrowError("Não é possível dividir por zero.");
    });

    it("deve calcular a multiplicação corretamente", () => {
        expect(calculadora.multiply(2, 3)).toBe(6);
        expect(calculadora.multiply(2, 3, 4)).toBe(24);
        expect(calculadora.multiply(5, -2, 3)).toBe(-30);
    });
});

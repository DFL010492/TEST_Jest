const Calculadora = require('./Calculadora')

describe('Testes da Calculadora', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculadora();
    });

    test('Deve somar dois numeros', () => {
        expect(calc.soma(2, 3)).toBe(5);
    });

    test('Deve subtrair dois numeros', () => {
        expect(calc.subtrai(5, 2)).toBe(3);
    });

    test('Deve multiplicar dois numeros', () => {
        expect(calc.multiplica(3, 4)).toBe(12);
    });

    test('Deve dividir dois numeros', () => {
        expect(calc.divide(10, 2)).toBe(5);
    });

    test('Deve lançar erro ao dividir por zero', () => {
        expect(() => calc.divide(10, 0)).toThrow('Divisão por zero não permitida');
    });

    test('Deve somar números negativos', () => {
        expect(calc.soma(-5, -3)).toBe(-8);
    });

    test('Deve dividir números fracionários', () => {
        expect(calc.divide(5, 2)).toBeCloseTo(2.5);
    });

    test('Deve mockar setTimeout para soma com delay', () => {
        jest.useFakeTimers();
        const callback = jest.fn();
        calc.somaComDelay(2, 3, callback);

        jest.advanceTimersByTime(1000);
        expect(callback).toHaveBeenCalledWith(5);
    });
});
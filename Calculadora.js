class Calculadora {
    soma(a, b) {
        return a + b;
    };

    subtrai(a, b) {
        return a - b;
    };

    multiplica(a, b) {
        return a * b;
    };

    divide(a, b) {
        if (b === 0) throw new Error('Divisão por zero não permitida');
        return a / b;
    };

    somaComDelay(a, b, callback) {
        setTimeout(() => {
            const resultado = this.soma(a, b);
            callback(resultado);
        }, 1000);
    }
};

module.exports = Calculadora
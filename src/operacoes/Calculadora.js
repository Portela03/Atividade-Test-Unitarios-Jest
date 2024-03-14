class Calculadora {
    add(...operandos) {
        return operandos.reduce((acumulador, operando) => acumulador + operando, 0);
    }

    subtract(...operandos) {
        return operandos.reduce((acumulador, operando) => acumulador - operando);
    }

    divide(...operandos) {
        if (operandos.some(operando => operando === 0)) {
            throw new Error("Não é possível dividir por zero.");
        }
        return operandos.reduce((acumulador, operando) => acumulador / operando);
    }

    multiply(...operandos) {
        return operandos.reduce((acumulador, operando) => acumulador * operando, 1);
    }
}

module.exports = Calculadora;

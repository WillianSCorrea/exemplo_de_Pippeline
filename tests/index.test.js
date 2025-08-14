const sortear = require('../src/script');

test('o sorteio gera apenas números positivos', () => {
    const resultado = sortear();
    expect(resultado.every(n => n > 0)).toBe(true);
});

test('o sorteio gera exatamente 6 números', () => {
    const resultado = sortear();
    expect(resultado).toHaveLength(6);
});

test('o sorteio não tem números repetidos', () => {
    const resultado = sortear();
    const setUnico = new Set(resultado);
    expect(setUnico.size).toBe(resultado.length);
});

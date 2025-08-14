function sortear() {
    const numeros = [];
    while (numeros.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    // Exibe no navegador
    if (typeof alert !== 'undefined') {
        alert("Números sorteados: " + numeros.join(", "));
    }

    // Retorna para poder testar
    return numeros;
}

module.exports = sortear;

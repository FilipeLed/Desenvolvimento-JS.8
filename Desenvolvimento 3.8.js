// Solicita dois números ao usuário
let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

try {
    // Tenta dividir o primeiro número pelo segundo número
    let resultado = numero1 / numero2;

    // Verifica se o resultado é um número finito
    if (isFinite(resultado)) {
        console.log(`Resultado da divisão: ${resultado}`);
    } else {
        throw new Error("Divisão resultou em um valor não finito.");
    }
} catch (erro) {
    // Captura e trata a exceção
    console.error("Erro: " + erro.message);
} finally {
    // Este bloco será executado independentemente de haver exceção ou não
    console.log("Operação concluída.");
}

function calcularMedia() {
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    const media = (nota1 + nota2) / 2;
    document.getElementById('resultado').innerText = `A média de ${nome} é ${media.toFixed(2)}.`;
}
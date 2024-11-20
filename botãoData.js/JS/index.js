function mostrarData() {
    const dataAtual = new Date(); // Obtém a data atual
    const dia = String(dataAtual.getDate()).padStart(2, '0'); // Dia do mês
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês (0-11)
    const ano = dataAtual.getFullYear(); // Ano

    // Formata a data como "DD/MM/AAAA"
    const dataFormatada = `${dia}/${mes}/${ano}`;
    document.getElementById("data").innerText = "Data Atual: " + dataFormatada; // Exibe a data
}
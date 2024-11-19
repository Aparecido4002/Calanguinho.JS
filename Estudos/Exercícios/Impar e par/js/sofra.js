
    function clique(){
        const input = document.getElementById("input");
        const inputValue = parseInt(input.value);

        const mensagemDiv = document.getElementById("mensagem");

        if (inputValue % 2 === 0) {
            mensagemDiv.textContent = "O numero " + inputValue + "é PAR";
        }
        else {
            mensagemDiv.textContent = "O numero " + inputValue + "é ÍMPAR";
        }
    }
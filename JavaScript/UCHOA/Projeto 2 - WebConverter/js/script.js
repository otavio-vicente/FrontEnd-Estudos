document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);

    const inputValue = document.getElementById('value-real');
    const selectedCurrency = document.getElementById('currency');
    const result = document.getElementById('result');
    let valueConverted = 0;

    function handleSubmit(e) {
        e.preventDefault(); // Impede o recarregamento da página

        if (!inputValue.value || inputValue.value < 0) {
            alert("Informe um valor válido!");
            return;
        } else if (!selectedCurrency.value) {
            alert("Selecione uma moeda!");
            return;
        }

        converter(); // Chama a função de conversão
    }

    function converter() {
        if (selectedCurrency.value === 'eur') {
            valueConverted = inputValue.value / 6.22; // Converte para Euro
            result.innerHTML = valueFormatter('pt-BR', 'EUR'); // Formata o valor
        } else if (selectedCurrency.value === 'dol') {
            valueConverted = inputValue.value / 5.83; // Converte para Dólar
            result.innerHTML = valueFormatter('en-US', 'USD'); // Formata o valor
        }

        animateResult(); // Animação do resultado
        inputValue.value = ''; // Limpa o campo de valor
        selectedCurrency.value = ''; // Limpa o campo de moeda
    }

    function valueFormatter(locale, currency) {
        const value = valueConverted.toLocaleString(locale, { style: 'currency', currency: currency });
        return `<span>🤑</span> ${value} <span>🤑</span>`; // Retorna o valor formatado
    }

    function animateResult() {
        result.animate([
            { transform: 'translateY(-150px)' },
            { transform: 'translateY(0px)' }
        ], { duration: 500 }); // Animação simples
    }
});
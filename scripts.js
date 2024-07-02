document.getElementById('calcularBtn').addEventListener('click', function () {
    var homens = parseFloat(document.getElementById('homens').value);
    var mulheres = parseFloat(document.getElementById('mulheres').value);
    var criancas = parseFloat(document.getElementById('criancas').value);

    var carneBovina = (homens * 0.5) + (mulheres * 0.3) + (criancas * 0.2);
    var frango = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.1);
    var linguica = (homens * 0.2) + (mulheres * 0.2) + (criancas * 0.2);
    var refrigerante = (homens * 0.3) + (mulheres * 0.4) + (criancas * 0.2);
    var cerveja = (homens * 0.8) + (mulheres * 0.5);

    var resultado = `
        <p>Quantidades necessárias:</p>
        <ul>
            <li>Carne bovina: ${formatarQuantidade(carneBovina)} kg</li>
            <li>Frango: ${formatarQuantidade(frango)} kg</li>
            <li>Linguiça: ${formatarQuantidade(linguica)} kg</li>
            <li>Refrigerante: ${formatarQuantidade(refrigerante)} L</li>
            <li>Cerveja: ${formatarQuantidade(cerveja)} L</li>
        </ul>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});

function formatarQuantidade(quantidade) {
    return quantidade % 1 === 0 ? quantidade.toFixed(0) : quantidade.toFixed(1);
}

function calcularCaptacao() {
    // Busca os valores digitados pelo usuário
    const area = parseFloat(document.getElementById('area').value);
    const precipitacao = parseFloat(document.getElementById('precipitacao').value);
    const resultadoDiv = document.getElementById('resultado');

    // Validação simples para garantir que os campos foram preenchidos
    if (isNaN(area) || area <= 0 || isNaN(precipitacao) || precipitacao <= 0) {
        alert("Por favor, insira valores válidos para a área e para a precipitação!");
        return;
    }

    // Fator de eficiência do telhado (calhas/absorção), geralmente usa-se 85% (0.85)
    const eficiencia = 0.85;

    // Cálculo do volume: Área (m²) * Precipitação (mm) * Eficiência
    // Nota: 1 mm de chuva em 1 m² equivale a 1 Litro de água
    const volumeLitros = area * precipitacao * eficiencia;

    // Cálculo do Impacto Real: 
    // Estimando que uma horta gaste cerca de 4 litros de água por m² ao dia (120 litros por mês por m²)
    const consumoHortaPorMesM2 = 4 * 30; 
    const areaHortaSustentavel = volumeLitros / consumoHortaPorMesM2;

    // Exibe os resultados na tela formatados
    document.getElementById('volume').innerText = volumeLitros.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    document.getElementById('horta').innerText = areaHortaSustentavel.toLocaleString('pt-BR', { maximumFractionDigits: 1 });

    // Mostra a caixinha de resultado que estava escondida
    resultadoDiv.style.display = 'block';
}

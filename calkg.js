function calcularCaloriasQueimadas() {
    // Obter os valores do formulário
    const peso = parseFloat(document.getElementById('peso').value);
    const idade = parseInt(document.getElementById('idade').value);
    const   
 sexo = document.getElementById('sexo').value;
    const duracao = parseFloat(document.getElementById('duracao').value);
    const intensidade = document.getElementById('intensidade').value;

    // Obter o valor de METs da atividade selecionada (simplificado para o exemplo)
    const atividade = document.getElementById('atividade').value;
    const mets = {
        pilates: 3.5,
        funcional: 6.0,
        musculacao: 5.0,
        aerobico: 7.5,
        crossfit: 8.0
    }[atividade];

    // Calcular o gasto calórico total
    const gct = mets * peso * duracao / 60;

    // Apresentar o resultado
    document.getElementById('resultado').textContent = `Com base nas informações fornecidas, você poderá queimar aproximadamente ${gct.toFixed(2)} calorias durante essa atividade.`;
}
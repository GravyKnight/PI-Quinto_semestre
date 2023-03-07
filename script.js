document.addEventListener('DOMContentLoaded', function() {
  // Seleciona os elementos da página que serão utilizados
  const gasolinaButton = document.getElementById('gasolina');
  const alcoolButton = document.getElementById('alcool');
  const dieselButton = document.getElementById('diesel');
  const abastecerButton = document.getElementById('abastecer');

  // Função que é chamada quando um botão de combustível é clicado
  function selectFuel(event) {
    // Remove a classe "selected" de todos os botões de combustível
    gasolinaButton.classList.remove('selected');
    alcoolButton.classList.remove('selected');
    dieselButton.classList.remove('selected');

    // Adiciona a classe "selected" ao botão de combustível clicado
    const selectedButton = event.target;
    selectedButton.classList.add('selected');

    // Habilita o botão "ABASTECER"
    abastecerButton.disabled = false;
  }

  // Adiciona um event listener para cada botão de combustível
  gasolinaButton.addEventListener('click', selectFuel);
  alcoolButton.addEventListener('click', selectFuel);
  dieselButton.addEventListener('click', selectFuel);

  // Função que é chamada quando o botão "ABASTECER" é clicado
  function abastecer() {
    // Verifica qual botão de combustível está selecionado
    const selectedFuel = document.querySelector('.fuel-button.selected');
  
    // Redireciona o usuário para a página correspondente
    if (selectedFuel.id === 'gasolina') {
      window.location.href = 'proxima.html';
    } else if (selectedFuel.id === 'alcool') {
      window.location.href = 'proxima2.html';
    } else if (selectedFuel.id === 'diesel') {
      window.location.href = 'proxima3.html';
    }
  }

  // Adiciona um event listener para o botão "ABASTECER"
  abastecerButton.addEventListener('click', abastecer);
});
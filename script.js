document.addEventListener('DOMContentLoaded', () => {
  const startGameForm = document.getElementById('start-game-form');
  
  if (startGameForm) {
    startGameForm.addEventListener('submit', event => {
      event.preventDefault();
      
      const player1Name = document.getElementById('player1-name').value;
      const player2Name = document.getElementById('player2-name').value;

      // Сохранение имен игроков в локальном хранилище
      localStorage.setItem('player1', player1Name);
      localStorage.setItem('player2', player2Name);

      // Переход на страницу игры
      window.location.href = 'game.html';
    });
  } else {
    // Загрузка имен игроков из локального хранилища
    const player1Name = localStorage.getItem('player1');
    const player2Name = localStorage.getItem('player2');

    if (player1Name && player2Name) {
      // Инициализация игры
      initializeGame(player1Name, player2Name);
    }
  }
});

function initializeGame(player1, player2) {
  const gameBoard = document.getElementById('game-board');
  
  // Здесь будет логика для инициализации игрового поля
  gameBoard.innerHTML = `<p>Играют ${player1} против ${player2}</p>`;
  // Добавьте сюда вашу логику для морского боя
}

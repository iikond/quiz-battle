const socket = io(); // подключаемся к Flask-SocketIO

function join() {
    const pinInput = document.getElementById('pin');
    const pin = pinInput.value.trim();
    if (!pin) {
        alert('Введи PIN');
        return;
    }
    if (pinInput != pin){
        document.getElementById('pin_legit').style.display = 'block';
        return;
    }
    socket.emit('join_game', { pin: pin });
    
}

function create() {
    alert('Пока просто заглушка для создания игры');
}

// когда сервер шлёт данные игры
socket.on('game_data', (data) => {
    console.log('Данные игры от сервера:', data);
    // тут потом покажем экран лобби/игры
});

// когда сервер обновляет счёт
socket.on('update_scores', (scores) => {
    console.log('Новый счёт:', scores);
});
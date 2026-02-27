from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

games = {}  # {pin: данные}

@socketio.on('connect')
def handle_connect():
    print('Клиент подключился')

@socketio.on('join_game')
def handle_join(data):
    pin = data['pin']
    if pin in games:
        emit('game_data', games[pin])  # шлём данные сразу

@socketio.on('answer')
def handle_answer(data):
    pin = data['pin']
    # обновляем счёт
    emit('update_scores', games[pin]['scores'], broadcast=True)
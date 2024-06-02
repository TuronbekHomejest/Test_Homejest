

// Функция для сохранения созданных кнопок в локальном хранилище
function saveButtonsToLocalStorage() {
    var buttonContainer = document.getElementById('buttonContainer');
    var buttons = buttonContainer.getElementsByTagName('button');
    var buttonData = [];
    for (var i = 0; i < buttons.length; i++) {
        buttonData.push(buttons[i].innerHTML);
    }
    localStorage.setItem('savedButtons', JSON.stringify(buttonData));
}

// Функция для загрузки сохраненных кнопок из локального хранилища
function loadButtonsFromLocalStorage() {
    var buttonContainer = document.getElementById('buttonContainer');
    var savedButtons = JSON.parse(localStorage.getItem('savedButtons'));
    if (savedButtons) {
        for (var i = 0; i < savedButtons.length; i++) {
            var button = createButton(savedButtons[i]);
            buttonContainer.appendChild(button);
        }
    }
}

document.getElementById('createButton').addEventListener('click', function() {
    var buttonContainer = document.getElementById('buttonContainer');
    var newButton = createButton('Нажми меня');
    buttonContainer.appendChild(newButton);
    saveButtonsToLocalStorage();
});

// При загрузке страницы загружаем сохраненные кнопки из локального хранилища
window.onload = loadButtonsFromLocalStorage;

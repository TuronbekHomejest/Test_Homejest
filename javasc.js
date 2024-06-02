const addButton = document.getElementById('add-button');
const popup = document.getElementById('popup');
const cancelButton = document.getElementById('cancel-button');
const saveButton = document.getElementById('save-button');
const buttonNameInput = document.getElementById('button-name');
const buttonLinkInput = document.getElementById('button-link');
const buttonsContainer = document.getElementById('buttons-container');

// Функция для загрузки сохраненных кнопок
function loadButtons() {
    const storedButtons = localStorage.getItem('buttons');
    if (storedButtons) {
        const buttons = JSON.parse(storedButtons);
        buttons.forEach(buttonData => {
            const newButton = createButton(buttonData.name, buttonData.link);
            buttonsContainer.appendChild(newButton);
        });
    }
}

// Функция для создания кнопки
function createButton(name, link) {
    const button = document.createElement('button');
    button.textContent = name;
    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';
    button.style.padding = '20px 40px';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.margin = '10px';
    button.style.fontSize = '18px';
    button.addEventListener('click', () => {
        window.location.href = link;
    });
    return button;
}

// Функция для сохранения кнопок
function saveButtons() {
    const buttonsData = [];
    buttonsContainer.childNodes.forEach(button => {
        buttonsData.push({
            name: button.textContent,
            link: button.getAttribute('data-link')
        });
    });
    const storedButtons = JSON.stringify(buttonsData);
    localStorage.setItem('buttons', storedButtons);
}

// Загрузка кнопок при загрузке страницы
loadButtons();

addButton.addEventListener('click', () => {
    popup.classList.remove('hidden');
});

cancelButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});

saveButton.addEventListener('click', () => {
    const buttonName = buttonNameInput.value;
    const buttonLink = buttonLinkInput.value;
    if (buttonName && buttonLink) {
        const newButton = createButton(buttonName, buttonLink);
        newButton.setAttribute('data-link', buttonLink); // Сохраняем ссылку в атрибуте
        buttonsContainer.appendChild(newButton);
        buttonNameInput.value = '';
        buttonLinkInput.value = '';
        popup.classList.add('hidden');
        saveButtons(); // Сохраняем кнопки в localStorage
    }
});
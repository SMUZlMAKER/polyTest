// Функция для генерации случайного JSON-объекта
function generateRandomJson() {
    const randomData = {
        field1: 'aaa',
        field2: 'bbb',
        field3: 'ccc'
    };

    // Отправляем JSON в консоль (можно заменить на отправку на сервер)
    console.log(JSON.stringify(randomData));
}

// Вызываем функцию при загрузке страницы
window.onload = generateRandomJson;

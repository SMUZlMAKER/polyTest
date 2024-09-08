// Функция для генерации случайного JSON-объекта
function generateRandomJson() {
    const randomData = {
        field1: Math.random().toString(36).substring(7),
        field2: Date.now(),
        field3: {
            nestedField: 'some value'
        }
    };

    // Отправляем JSON в консоль (можно заменить на отправку на сервер)
    console.log(JSON.stringify(randomData));
}

// Вызываем функцию при загрузке страницы
window.onload = generateRandomJson;

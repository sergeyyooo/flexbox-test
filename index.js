// Получил доступ к кнопке по id
const submitButton = document.getElementById('submitButton')
// Навешиваю обработчик события на клик на кнопку
submitButton.onclick = (e) => {
    // Получаю значение инпута имени класса
    const className = document.getElementById('classNameInput').value
    // Получаю значение инпута цвет
    const background = document.getElementById('stylesInput').value
    // Вызов функции которая применяет цвет ко всем элементам класса
    applyStyleToEveryInputByClassName(className, background)
}

const applyStyleToEveryInputByClassName = (className,color) => {
    // Добавил точку к имени класса для поиска ниже
    const newClassName = '.' + className.toLowerCase()
    // Нашел все элементы заданного класса
    let elementsList = document.querySelectorAll(newClassName)
    // Деструктуризировал их в массив (знаю непонятно как это)
    const elements = [...elementsList]
    // Прохожусь циклом по элементам и применяю цвет к каждому
    for(let element of elements){
        // применяю цвет к каждому
        element.style.backgroundColor = color.toLowerCase()
    }
}
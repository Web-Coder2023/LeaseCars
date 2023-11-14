let tabs = () => {
    let tabButtons = document.querySelectorAll('.tabs__btn');
    let tabContents = document.querySelectorAll('.tabs__item');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Скрыть все табы
            tabContents.forEach(function(tabContent) {
                tabContent.classList.remove('_active');
            });

            // Показать выбранный таб
            tabContents[index].classList.add('_active');

            // Убрать активный класс у всех кнопок
            tabButtons.forEach(function(tabButton) {
                tabButton.classList.remove('_active');
            });

            // Добавить активный класс к выбранной кнопке
            button.classList.add('_active');
        });
    });
}
tabs();
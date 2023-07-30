// Принимаем селектор элемента ввода и ограничиваем ввод недопустимых символов
const checkTextInputs = (selector) => {
  // Находим все инпуты, которые соответствуют указанному селектору
  const txtInputs = document.querySelectorAll(selector);

  // Добавляем обработчик событий для каждого найденного инпута
  txtInputs.forEach((input) => {
    // Создаем регулярное выражение для поиска символов,
    // которые не являются кириллицей, цифрами или пробелами
    const regExp = /[^а-яё 0-9]/gi;

    input.addEventListener('input', function (e) {
      // Если значение инпута не является кириллицей, цифрами или пробелами
      if (this.value.match(regExp)) {
        // Удаляем их из инпута
        this.value = this.value.replace(regExp, '');
      }
    });
  });
};

export default checkTextInputs;

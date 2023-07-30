// Принимаем селектор элемента ввода и ограничиваем ввод недопустимых символов
const checkTextInputs = (selector) => {
  // Находим все input'ы, которые соответствуют указанному селектору
  const txtInputs = document.querySelectorAll(selector);

  // Добавляем обработчик событий для каждого найденного input'а
  txtInputs.forEach((input) => {
    // Создаем регулярное выражение для поиска символов,
    // которые не являются кириллицей, цифрами или пробелами
    const regExp = /[^а-яё 0-9]/gi;

    input.addEventListener('input', function (e) {
      // Если значение input'а не является кириллицей, цифрами или пробелами
      if (this.value.match(regExp)) {
        // Удаляем их из input'а
        this.value = this.value.replace(regExp, '');
      }
    });
  });
};

export default checkTextInputs;

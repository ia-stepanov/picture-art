// Принимаем селектор элемента ввода и создаем маску для ввода номера телефона
const mask = (selector) => {
  // Устанавливаеем позицию курсора (pos) в элементе ввода (elem)
  let setCursorPosition = (pos, elem) => {
    // Устанавливаем фокус на элементе ввода
    elem.focus();

    // Если браузер поддерживает метод setSelectionRange, устанавливаем позицию курсора
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);

      // Иначе, для старых IE, используем метод createTextRange
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();

      // Сжимаем диапазон
      range.collapse(true);
      // Перемещаем конец и начало диапазона в позицию курсора
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      // Выделяем выше заданный диапазон в текстовом поле
      range.select();
    }
  };

  // Создаем функцию createMask, которая вызывается при вводе значения в input
  function createMask(event) {
    // Задаем маску шаблона для номера телефона
    let matrix = '+7 (___) ___ __ __';
    // Устанавливаем начальное значение счетчика для обхода пользовательского ввода
    let i = 0;
    // Получаем только цифры из маски шаблона
    let def = matrix.replace(/\D/g, '');
    // Получаем только цифры из пользовательского ввода
    let val = this.value.replace(/\D/g, '');

    // Если пользователь установил курсор в input, но не ввел номер телефона,
    // тогда присваиваем input'у значение из маски шаблона '7'
    if (def.length >= val.length) {
      val = def;
    }

    // Преобразуем ввод пользователя в соответствие с маской шаблона
    this.value = matrix.replace(/./g, function (a) {
      // Проверяем, является ли текущий символ маски подчеркиванием (_) или цифрой (\d)
      // и не превышает ли количество цифр, введенное пользователем, количество символов в маске
      return /[_\d]/.test(a) && i < val.length
        ? // Если оба условия верны, вставляем в маску введенное значение
          // и увеличиваем значение счетчика на 1
          val.charAt(i++)
        : // Иначе проверяем, превышает ли количество цифр, введенное пользователем, количество символов в маске
        i >= val.length
        ? // Если количество цифр, введенное пользователем, больше, чем количество символов в маске,
          // вставляем в маску пустую строку (''), что эквивалентно удалению символа из маски
          ''
        : // Иначе оставляем все символы в маске, кроме подчеркиваний и цифр, без изменений
          a;
    });

    // Если пользователь убрал курсор с input'а и не ввел номер телефона,
    // очищаем значение input'а
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
      // Иначе устанавливаем курсор на его последнюю позицию
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  // Находим все input'ы, которые соответствуют указанному селектору
  let inputs = document.querySelectorAll(selector);

  // Добавляем обработчики событий для каждого найденного input'а
  inputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

export default mask;

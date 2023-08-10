/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (!this.classList.contains('active-style')) {
        btns.forEach(btn => {
          btn.classList.remove('active-style');
          btn.nextElementSibling.classList.remove('active-content');
          btn.nextElementSibling.style.maxHeight = '0px';
        });
      }
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');
      if (this.classList.contains('active-style')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });

  /* // Аккордеон на CSS
  const blocks = document.querySelectorAll(itemsSelector);
   blocks.forEach((block) => {
    block.classList.add('animated', 'fadeInDown');
  });
   btns.forEach((btn) => {
    btn.addEventListener('click', function () {
      if (!this.classList.contains('active')) {
        btns.forEach((btn) => {
          btn.classList.remove('active', 'active-style');
        });
        this.classList.add('active', 'active-style');
      }
    });
  });
  */
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector);
  const burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display === 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  let sum = 0;
  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);
    if (sizeBlock.value === '' || materialBlock.value === '') {
      resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };
  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Принимаем селектор элемента ввода и ограничиваем ввод недопустимых символов
const checkTextInputs = selector => {
  // Находим все инпуты, которые соответствуют указанному селектору
  const txtInputs = document.querySelectorAll(selector);

  // Добавляем обработчик событий для каждого найденного инпута
  txtInputs.forEach(input => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
  }
  function unHighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc-form')) {
      item.closest('.file_upload').style.backgroundColor = '#fff';
    } else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }
  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unHighlight(input), false);
    });
  });
  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split('.');
      arr[0].length > 6 ? dots = '…' : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const no = document.querySelector('.portfolio-no');
  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');
    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };
  function attachMenuClickListeners() {
    for (var _len = arguments.length, selectors = new Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    selectors.forEach(selector => {
      menu.querySelector(selector).addEventListener('click', () => {
        if (selector === '.grandmother' || selector === '.granddad') {
          typeFilter();
        } else {
          typeFilter(wrapper.querySelectorAll(selector));
        }
      });
    });
  }
  attachMenuClickListeners('.all', '.lovers', '.chef', '.girl', '.guy', '.grandmother', '.granddad');
  menu.addEventListener('click', e => {
    let target = e.target;
    if (target && target.tagName === 'LI') {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/requests */ "./src/js/modules/services/requests.js");

const forms = state => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const selects = document.querySelectorAll('select');
  const upload = document.querySelectorAll('[name="upload"]');
  const calcPrice = document.querySelector('.calc-price');
  const message = {
    loading: 'Загрузка…',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так…',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };
  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
    selects.forEach(item => {
      item.selectedIndex = 0;
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
    calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = '…' : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      if (item.classList.contains('calc-form')) {
        for (const key in item.children) {
          const element = item.children[key];
          if (element.nodeName === 'SELECT') {
            formData.append(element.id, element.options[element.selectedIndex].textContent);
          } else if (element.nodeName === 'INPUT') {
            formData.append('promocode', element.value);
          }
        }
        formData.append('price', calcPrice.textContent);
      }
      let api;
      item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question;
      console.log(api);
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
        }, 5000);
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Принимаем селектор элемента ввода и создаем маску для ввода номера телефона
const mask = selector => {
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
    // тогда присваиваем инпуту значение из маски шаблона '7'
    if (def.length >= val.length) {
      val = def;
    }

    // Преобразуем ввод пользователя в соответствие с маской шаблона
    this.value = matrix.replace(/./g, function (a) {
      // Проверяем, является ли текущий символ маски подчеркиванием (_) или цифрой (\d)
      // и не превышает ли количество цифр, введенное пользователем, количество символов в маске
      return /[_\d]/.test(a) && i < val.length ?
      // Если оба условия верны, вставляем в маску введенное значение
      // и увеличиваем значение счетчика на 1
      val.charAt(i++) :
      // Иначе проверяем, превышает ли количество цифр, введенное пользователем, количество символов в маске
      i >= val.length ?
      // Если количество цифр, введенное пользователем, больше, чем количество символов в маске,
      // вставляем в маску пустую строку (''), что эквивалентно удалению символа из маски
      '' :
      // Иначе оставляем все символы в маске, кроме подчеркиваний и цифр, без изменений
      a;
    });

    // Если пользователь убрал курсор с инпута и не ввел номер телефона,
    // очищаем значение инпута
    if (event.type === 'blur') {
      if (this.value.length === 2) {
        this.value = '';
      }
      // Иначе устанавливаем курсор на его последнюю позицию
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  // Находим все инпуты, которые соответствуют указанному селектору
  let inputs = document.querySelectorAll(selector);

  // Добавляем обработчики событий для каждого найденного инпута
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modals = () => {
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          item.remove();
        }
        windows.forEach(item => {
          item.style.display = 'none';
          item.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      document.body.children[2].removeAttribute('style');
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(item => {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
        document.body.children[2].removeAttribute('style');
      }
    });
  }
  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });
      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
        const rightValue = getRightValue('.fixed-gift');
        document.body.children[2].style.right = `${rightValue + scroll}px`;
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function getRightValue(selector) {
    const selectedEl = document.querySelector(selector);
    if (!selectedEl) {
      console.error(`Элемент с селектором: ${selector} не найден`);
      return null;
    }
    const rightValue = parseInt(getComputedStyle(selectedEl).right);
    return rightValue;
  }
  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  // showModalByTime('.popup-consultation[data-modal]', 60000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);
  function showImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'none';
    });
  }
  function hideImg(block) {
    const img = block.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
      p.style.display = 'block';
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showImg(block);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  // Scrolling с requestAnimationFrame
  let links = document.querySelectorAll('[href^="#"]');
  let speed = 0.16;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Получаем текущую позицию прокрутки
      let widthTop = document.documentElement.scrollTop;
      // Находим элемент по id из хеша
      let hash = this.hash;
      // Получаем расстояние до целевого блока от текущего вида окна
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      // Инициализируем переменную для хранения времени начала анимации
      let start = null;

      // Запускаем анимацию через requestAnimationFrame и передаем функцию step
      requestAnimationFrame(step);

      // Вызываем функцию step при каждом кадре анимации
      function step(time) {
        // Если start равен null, присваиваем start текущее время
        if (start === null) {
          start = time;
        }

        // Рассчитываем прогресс анимации на основе разницы между текущим временем и временем начала
        let progress = time - start;
        // Рассчитываем новое значение вертикальной прокрутки на основе времени и скорости
        let r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);

        // Прокручиваем страницу до новой позиции
        document.documentElement.scrollTo(0, r);

        // Если новая позиция прокрутки не достигнута, вызываем следующий кадр анимации
        if (r !== widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          // Когда достигнута целевая позиция, обновляем хэш в URL
          location.hash = hash;
        }
      }
    });
  });

  /* // Scrolling на чистом JS
  const element = document.documentElement;
  const body = document.body;
   // Добавляем обработчик события click на элемент upElem
  const calcScroll = () => {
    upElem.addEventListener('click', function (event) {
      // Получаем текущую позицию прокрутки
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
       // Проверяем, есть ли у элемента хэш (например, #portfolio)
      if (this.hash !== '') {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();
        // Находим элемент по id из хеша
        let hashElement = document.querySelector(this.hash);
        // Получаем позицию элемента относительно верха страницы
        let hashElementTop = 0;
         // Поднимаемся по иерархии элементов, суммируя вертикальные смещения
        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }
         // Округляем значение вертикального смещения
        hashElementTop = Math.round(hashElementTop);
         // Вызываем функцию плавной прокрутки
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };
   const smoothScroll = (from, to, hash) => {
    // Задаем интервал времени для выполнения плавной прокрутки
    let timeInterval = 1;
    let prevScrollTop;
    let speed;
     // Определяем скорость прокрутки в зависимости от направления движения
    if (to > from) {
      speed = 30;
    } else {
      speed = -30;
    }
     // Запускаем интервал для выполнения плавной прокрутки
    let move = setInterval(function () {
      // Получаем текущую позицию прокрутки
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);
       // Проверяем условия остановки прокрутки
      if (
        prevScrollTop === scrollTop ||
        (to > from && scrollTop >= to) ||
        (to < from && scrollTop <= to)
      ) {
        // Прекращаем выполнение интервала
        clearInterval(move);
        // Заменяем историю браузера, чтобы обновить хэш без изменения страницы
        history.replaceState(
          history.state,
          document.title,
          location.href.replace(/#.*$/g, '') + hash
        );
      } else {
        // Продолжаем прокрутку
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };
   calcScroll();
  */
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./src/js/modules/services/requests.js":
/*!*********************************************!*\
  !*** ./src/js/modules/services/requests.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Couls not fetch ${url}, statuse: ${res.status}`);
  }
  return await res.json();
};


/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/requests */ "./src/js/modules/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  /* // Показать скрытые элементы в html
  const cards = document.querySelectorAll(styles);
   cards.forEach((card) => {
    card.classList.add('animated', 'fadeInUp');
  });
   btn.addEventListener('click', () => {
    cards.forEach((card) => {
      card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    });
    btn.remove();
  });
  */

  // Подгружать элементы с сервера
  btn.addEventListener('click', function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)('assets/db.json').then(res => createCards(res.styles)).catch(error => {
      console.error(`Ошибка: ${error}`);
      let errorMessage = document.createElement('div');
      errorMessage.classList.add('animated', 'fadeInUp', 'error-message');
      errorMessage.style.cssText = `
          margin: 2rem auto 6rem;
          color: red;
          text-align: center;
        `;
      errorMessage.innerHTML = `
          <p style="font-size: 2.2rem;"><b>Что-то пошло не&nbsp;так...</b></p> 
          <p style="font-size: 2rem;">сервер не&nbsp;отвечает, сайт не&nbsp;может<br>подгрузить дополнительные стили</p>
        `;
      document.querySelector(wrapper).parentNode.appendChild(errorMessage);
    });
    this.remove();
  });
  function createCards(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
        <div class="styles-block">
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href="${link}">Подробнее</a>
        </div>
      `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sliders = (slides, dir, sec, prev, next) => {
  let slideIndex = 1;
  let paused = false;
  const items = document.querySelectorAll(slides);
  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}
  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, sec * 1000);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, sec * 1000);
    }
  }
  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals.js */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders.js */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms.js */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask.js */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs.js */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles.js */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc.js */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter.js */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize.js */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion.js */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger.js */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling.js */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/drop.js */ "./src/js/modules/drop.js");













window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', 3, '.main-next-btn', '.main-prev-btn');
  (0,_modules_sliders_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical', 3);
  (0,_modules_forms_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask_js__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs_js__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs_js__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  // showMoreStyles('.button-styles', '.styles-2'); // Показать скрытые элементы в html
  (0,_modules_showMoreStyles_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row'); // Подгружать элементы с сервера
  (0,_modules_calc_js__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize_js__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  // accordion('.accordion-heading', '.accordion-block'); // Аккордеон на CSS
  (0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading');
  (0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  (0,_modules_scrolling_js__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
  (0,_modules_drop_js__WEBPACK_IMPORTED_MODULE_12__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
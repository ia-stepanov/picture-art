const scrolling = (upSelector) => {
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

  links.forEach((link) => {
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
        let r =
          toBlock < 0
            ? Math.max(widthTop - progress / speed, widthTop + toBlock)
            : Math.min(widthTop + progress / speed, widthTop + toBlock);

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

export default scrolling;

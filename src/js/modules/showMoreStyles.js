import { getResource } from '../services/requests';

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
    getResource('assets/db.json')
      .then((res) => createCards(res.styles))
      .catch((error) => {
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
    response.forEach(({ src, title, link }) => {
      let card = document.createElement('div');
      card.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1'
      );

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

export default showMoreStyles;

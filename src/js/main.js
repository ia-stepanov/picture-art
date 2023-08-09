import modals from './modules/modals.js';
import sliders from './modules/sliders.js';
import forms from './modules/forms.js';
import mask from './modules/mask.js';
import checkTextInputs from './modules/checkTextInputs.js';
import showMoreStyles from './modules/showMoreStyles.js';
import calc from './modules/calc.js';
import filter from './modules/filter.js';
import pictureSize from './modules/pictureSize.js';
import accordion from './modules/accordion.js';
import burger from './modules/burger.js';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', 'horizontal', 3, '.main-next-btn', '.main-prev-btn');
  sliders('.main-slider-item', 'vertical', 3);
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  // showMoreStyles('.button-styles', '.styles-2'); // Показать скрытые элементы в html
  showMoreStyles('.button-styles', '#styles .row'); // Подгружать элементы с сервера
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureSize('.sizes-block');
  // accordion('.accordion-heading', '.accordion-block'); // Аккордеон на CSS
  accordion('.accordion-heading');
  burger('.burger-menu', '.burger');
});

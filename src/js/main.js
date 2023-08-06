import modals from './modules/modals.js';
import sliders from './modules/sliders.js';
import forms from './modules/forms.js';
import mask from './modules/mask.js';
import checkTextInputs from './modules/checkTextInputs.js';
import showMoreStyles from './modules/showMoreStyles.js';
import calc from './modules/calc.js';

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
});

import modals from './modules/modals.js';
import sliders from './modules/sliders.js';
import forms from './modules/forms.js';
import mask from './modules/mask.js';
import checkTextInputs from './modules/checkTextInputs.js';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', 'horizontal', 3, '.main-next-btn', '.main-prev-btn');
  sliders('.main-slider-item', 'vertical', 3);
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
});

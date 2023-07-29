import modals from './modules/modals.js';
import sliders from './modules/sliders.js';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
  sliders('.main-slider-item', 'vertical');
});

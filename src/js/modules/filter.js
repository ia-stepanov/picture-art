const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const no = document.querySelector('.portfolio-no');

  const typeFilter = (markType) => {
    markAll.forEach((mark) => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach((mark) => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  function attachMenuClickListeners(...selectors) {
    selectors.forEach((selector) => {
      menu.querySelector(selector).addEventListener('click', () => {
        if (selector === '.grandmother' || selector === '.granddad') {
          typeFilter();
        } else {
          typeFilter(wrapper.querySelectorAll(selector));
        }
      });
    });
  }

  attachMenuClickListeners(
    '.all',
    '.lovers',
    '.chef',
    '.girl',
    '.guy',
    '.grandmother',
    '.granddad'
  );

  menu.addEventListener('click', (e) => {
    let target = e.target;

    if (target && target.tagName === 'LI') {
      items.forEach((btn) => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

export default filter;

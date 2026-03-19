// Blocking page scrolling when opening a modal window
document.body.classList.add('is-locked');
document.body.classList.remove('is-locked');
// Functions for blocking and unblocking page scroll
const lockScroll = () => {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  document.body.classList.add('is-locked');
};

const unlockScroll = () => {
  document.body.style.paddingRight = '';
  document.body.classList.remove('is-locked');
};

// Module for opening/closing the mobile menu and modal window
const mobileMenu = document.querySelector('.mobile-menu');
const modal = document.querySelector('.backdrop');

function open(el) {
  el.classList.remove('is-hidden');
  el.classList.add('is-open');
}

function close(el) {
  el.classList.remove('is-open');
  el.classList.add('is-hidden');
}

document.addEventListener('click', e => {
  const actionEl = e.target.closest('.js-action');
  if (!actionEl) return;

  const action = actionEl.dataset.action;

  if (action === 'menu') {
    if (mobileMenu.classList.contains('is-open')) {
      close(mobileMenu);
      unlockScroll();
    } else {
      open(mobileMenu);
      lockScroll();
    }
  }

  if (action === 'modal') {
    if (modal.classList.contains('is-open')) {
      close(modal);
      unlockScroll();
    } else {
      open(modal);
      lockScroll();
    }
  }
});

import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const stateKey = 'feedback-form-state';

formEl.addEventListener('input', throttle(e => {
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(stateKey, JSON.stringify(state));
  }, 500));

const savedState = localStorage.getItem(stateKey);
if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
}

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const state = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(state);
    localStorage.removeItem(stateKey);
    emailInput.value = '';
    messageInput.value = '';
  });

import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedFormData) {
  if (email.value) email.value = storedFormData.email;
  if (message.value) message.value = storedFormData.message;
}

const delayedLocalStorageGetter = throttle((ev) => {
  const formData = {
    email: ev.currentTarget.elements.email.value,
    message: ev.currentTarget.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 250);

form.addEventListener('input', delayedLocalStorageGetter);

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  form.reset();
});

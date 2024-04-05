import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedFormData) {
  email.value = storedFormData.email;
  message.value = storedFormData.message;
}

form.addEventListener('input', (ev) => {
  const formData = {
    email: ev.currentTarget.elements.email.value,
    message: ev.currentTarget.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.clear();
  form.reset();
});

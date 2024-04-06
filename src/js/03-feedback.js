import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

if (localStorage.getItem('feedback-form-state')) {
  const storedFormData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  email.value = storedFormData.email;
  message.value = storedFormData.message;
}

const formData = (ev) => {
  const dataObject = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObject));
};

form.addEventListener('keyup', throttle(formData, 500));

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  form.reset();
});

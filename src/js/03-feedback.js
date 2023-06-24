'use strict';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const FORM_STATE = 'feedback-form-state';

let formContent = {};
form.addEventListener('input', throttle(updateFormState, 500));
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_STATE)));
  localStorage.removeItem(FORM_STATE);
  email.value = '';
  message.value = '';
}

function updateFormState(event) {
  formContent['email'] = email.value;
  formContent['message'] = message.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(formContent));
}

getFormState();

function getFormState(event) {
  try {
    const getState = JSON.parse(localStorage.getItem(FORM_STATE));
    email.value = getState.email;
    message.value = getState.message;
    // getState.email ? (email.value = getState.email) : (email.value = '');
    // getState.message
    //   ? (message.value = getState.message)
    //   : (message.value = '');
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

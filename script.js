const submitButton = document.getElementById('submit-btn');
const loginButton = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkInfo = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');

function createLabel(text) {
  const label = document.createElement('label');
  label.innerText = text;
  form.appendChild(label);
}

function verifyEmail() {
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', verifyEmail);

submitButton.disabled = true;

function enableButton() {
  if (checkInfo.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

checkInfo.addEventListener('click', enableButton);

function textAreaInputChange() {
  counter.innerText = 500 - textarea.value.length;
}

textarea.addEventListener('input', textAreaInputChange);
let inputName;
let inputLastname;
let house;
let inputEmail;
let family;
let rate;
let content;
let contentChecked = '';

function createElements() {
  createLabel(`Nome: ${inputName.value} ${inputLastname.value}`);
  createLabel(`Email: ${inputEmail.value}`);
  createLabel(`Casa: ${house.value}`);
  createLabel(`Família: ${family.value}`);
  createLabel(`Matérias: ${contentChecked}`);
  createLabel(`Avaliação: ${rate.value}`);
  createLabel(`Observações: ${textarea.value}`);
}

function makeForm(event) {
  event.preventDefault();
  inputName = document.getElementById('input-name');
  inputLastname = document.getElementById('input-lastname');
  house = document.getElementById('house');
  inputEmail = document.getElementById('input-email');
  family = document.querySelector('input[name="family"]:checked');
  rate = document.querySelector('input[name="rate"]:checked');
  content = document.querySelectorAll('input[name="conteudo"]:checked');

  for (let i = 0; i < content.length; i += 1) {
    contentChecked += `${content[i].value}, `;
  }

  contentChecked = contentChecked.substring(0, contentChecked.length - 2);
  form.innerHTML = '';

  createElements();
}

submitButton.addEventListener('click', makeForm);

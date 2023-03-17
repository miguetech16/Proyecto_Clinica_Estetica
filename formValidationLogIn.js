var form; 
function initiate() {
  var button = document.getElementById("send");
  form = document.querySelector("form[name='form']");
  form.addEventListener("input", checkval);
  form.addEventListener("invalid", validation, true);
  button.addEventListener("click", sendit);

  var email = document.getElementById("email");

  email.addEventListener('input', function() {validateChange('email', 'Ingrese un email válido (nombre@dominio.com)');});
}

function validation(e){
  var elem = e.target;
  elem.style.background = '#FFDDDD';
}

function sendit() {

  var email = document.getElementById("email");
  var valid = form.checkValidity();

  if (valid) {
    form.submit();
  } else if (email.validity.patternMismatch || email.validity.valueMissing) {
    email.setCustomValidity('Ingrese un email válido (nombre@dominio.com)');
  }
}

function checkval(e) {
  var elem = e.target;

  if (elem.validity.valid) {
    elem.style.background = '#aeaeae00';
  } else {
    elem.style.background = '#FFDDDD';
  }
}

function validateChange(id , message) {
  var el = document.getElementById(`${id}`);
  if (el.validity.patternMismatch || el.validity.valueMissing) {
    el.setCustomValidity(`${message}`);
    el.style.background = '#FFDDDD';
  } else {
    el.setCustomValidity('');
    el.style.background = '#aeaeae00';
  }
}

addEventListener("load", initiate);
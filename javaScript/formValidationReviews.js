var form;
function initiate() {
  var button = document.getElementById("send_review");
  form = document.querySelector("form[name='form']");
  form.addEventListener("invalid", validation, true);
  button.addEventListener("click", sendit);

  var email = document.getElementById("email_review");
  var name_review = document.getElementById("name_review");
  var num_valoracion = document.getElementById("valoracion");
  var textareaContact = document.getElementById("textareaReviews");


  name_review.addEventListener('input', function () { validateChange('name_review', ''); });
  email.addEventListener('input', function () { validateChange('email_review', 'Ingrese un email válido (nombre@dominio.com)'); });
  num_valoracion.addEventListener('input', function () { validateChange('valoracion', ''); });
  textareaContact.addEventListener('input', function () { validateChange('textareaReviews', ''); });
}

function validation(e) {
  var elem = e.target;
  elem.style.background = '#FFDDDD';
}

function sendit() {
  var email = document.getElementById("email_review");
  var valid = form.checkValidity();

  if (valid) {
    form.submit();
  } else if (email.validity.patternMismatch || email.validity.valueMissing) {
    email.setCustomValidity('Ingrese un email válido (nombre@dominio.com)');
  }
}

function validateChange(id, message) {
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
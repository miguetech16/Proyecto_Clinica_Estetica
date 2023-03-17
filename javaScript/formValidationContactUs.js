var form;
function initiate() {
  var button = document.getElementById("send_contact");
  form = document.querySelector("form[name='form']");
  form.addEventListener("invalid", validation, true);
  button.addEventListener("click", sendit);

  var tlfn = document.getElementById("tlfn_contact");
  var email = document.getElementById("email_contact");
  var name_contact = document.getElementById("name_contact");
  var textareaContact = document.getElementById("textareaContact");


  name_contact.addEventListener('input', function () { validateChange('name_contact', ''); });
  email.addEventListener('input', function () { validateChange('email_contact', 'Ingrese un email válido (nombre@dominio.com)'); });
  tlfn.addEventListener('input', function () { validateChange('tlfn_contact', 'Ingrese un número de teléfono válido (9 dígitos)'); });
  textareaContact.addEventListener('input', function () { validateChange('textareaContact', ''); });
}

function validation(e) {
  var elem = e.target;
  elem.style.background = '#FFDDDD';
}

function sendit() {
  var tlfn = document.getElementById("tlfn_contact");
  var email = document.getElementById("email_contact");
  var valid = form.checkValidity();

  if (valid) {
    form.submit();
  } else if (email.validity.patternMismatch || email.validity.valueMissing) {
    email.setCustomValidity('Ingrese un email válido (nombre@dominio.com)');
  } else if (tlfn.validity.patternMismatch || tlfn.validity.valueMissing) {
    tlfn.setCustomValidity('Ingrese un número de teléfono válido (9 dígitos)');
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
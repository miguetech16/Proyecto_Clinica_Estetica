var form;
function initiate() {
  var button = document.getElementById("send");
  form = document.querySelector("form[name='form']");
  form.addEventListener("input", checkval);
  form.addEventListener("invalid", validation, true);
  button.addEventListener("click", sendit);

  var tlfn = document.getElementById("tlfn");
  var email = document.getElementById("email");
  var dni = document.getElementById("dni");
  var passwd2 = document.getElementById('passwd2');

  email.addEventListener('input', function () { validateChange('email', 'Ingrese un email válido (nombre@dominio.com)'); });
  tlfn.addEventListener('input', function () { validateChange('tlfn', 'Ingrese un número de teléfono válido (9 dígitos)'); });
  dni.addEventListener('input', function () { validateChange('dni', 'Ingrese un dni válido (8 dígitos y 1 letra)'); });
  passwd2.addEventListener('input', function () { validateChange('passwd2', 'Las contraseñas no coinciden'); });

}

function validation(e) {
  var elem = e.target;
  elem.style.background = '#FFDDDD';
}

function sendit() {
  var tlfn = document.getElementById("tlfn");
  var email = document.getElementById("email");
  var dni = document.getElementById("dni");
  var passwd1 = document.getElementById('passwd1');
  var passwd2 = document.getElementById('passwd2');
  var valid = form.checkValidity();

  if (valid && passwd1.value === passwd2.value) {
    form.submit();
  } else if (email.validity.patternMismatch || email.validity.valueMissing) {
    email.setCustomValidity('Ingrese un email válido (nombre@dominio.com)');
  } else if (tlfn.validity.patternMismatch || tlfn.validity.valueMissing) {
    tlfn.setCustomValidity('Ingrese un número de teléfono válido (9 dígitos)');
  } else if (dni.validity.patternMismatch || dni.validity.valueMissing) {
    dni.setCustomValidity('Ingrese un dni válido (8 dígitos y 1 letra)');
  } else {
    passwd2.setCustomValidity('Las contraseñas no coinciden');
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
var form; 
function initiate() {
  var button = document.getElementById("send");
  form = document.querySelector("form[name='form']");
  form.addEventListener("input", checkval);
  form.addEventListener("invalid", validation, true);
  button.addEventListener("click", sendit);
}

function validation(e){
  var elem = e.target;
  elem.style.background = '#FFDDDD';
}

function sendit() {
  var tlfn = document.getElementById("tlfn");
  var email = document.getElementById("email");
  var dni = document.getElementById("dni");
  var valid = form.checkValidity();
  var passwd1 = document.getElementById('passwd1');
  var passwd2 = document.getElementById('passwd2');

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
  
  var tlfn = document.getElementById("tlfn");
  var email = document.getElementById("email");
  var dni = document.getElementById("dni");
  var passwd1 = document.getElementById('passwd1');
  var passwd2 = document.getElementById('passwd2');

  tlfn.setCustomValidity('');
  email.setCustomValidity('');
  dni.setCustomValidity('');
  passwd1.setCustomValidity('');
  passwd2.setCustomValidity('');

  if (elem.validity.valid) {
    elem.style.background = '#aeaeae00';
  } else {
    elem.style.background = '#FFDDDD';
  }
}

addEventListener("load", initiate);
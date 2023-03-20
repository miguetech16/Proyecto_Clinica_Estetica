var form;
function initiate() {
  var button = document.getElementById("send_logIn");
  form = document.querySelector("form[name='form']");
  form.addEventListener("invalid", validation, true);
  button.addEventListener("click", sendit);

  var email = document.getElementById("email_logIn");

  email.addEventListener('input', function () { validateChange('email_logIn', 'Ingrese un email válido (nombre@dominio.com)'); });
}

function validation(e) {
  var elem = e.target;
  elem.style.background = '#FFDDDD';
}

function sendit() {

  var email = document.getElementById("email_logIn");
  var password = document.getElementById("password_logIn");
  var valid = form.checkValidity();

  if (valid) {
    existUser(email.value, password.value);
  } else if (email.validity.patternMismatch || email.validity.valueMissing) {
    email.setCustomValidity('Ingrese un email válido (nombre@dominio.com)');
  }
}

function existUser(correo, contraseña) {
  fetch('json/usuarios.json')
    .then(response => response.json())
    .then(data => {
      const usuarios = data.usuarios;
      var aparece = false;

      usuarios.forEach(usuario => {
        if (usuario.email === correo && usuario.contraseña === contraseña) {
          sessionStorage.setItem('email', correo);
          sessionStorage.setItem('password', contraseña);
          aparece = true;
        }
      });

      if (aparece === false) {
        alert('Los datos introducidos no concuerdan con ningún usuario');
      } else {
        form.submit();
        window.location = "userPanel.html";
      }

    });
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
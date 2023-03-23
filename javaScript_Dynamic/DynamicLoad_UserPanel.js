addEventListener('load', init);

    function init() {
        fetch('json/usuarios.json')
        .then(response => response.json())
        .then(data => {
            const contenidos = data.usuarios;
            let contenidoPrincipal = document.querySelector('.contenido-texto-card-usuario');
            let existuser = false;
            contenidos.forEach(contenido => {
                if (sessionStorage.getItem('email') === contenido.email) {
                    existuser = true;
                    contenidoPrincipal.querySelector('#user_name').textContent = contenido.username;
                    contenidoPrincipal.querySelector('#user_email').textContent = contenido.email;
                    contenidoPrincipal.querySelector('#user_phone').textContent = contenido.telefono;
                    contenidoPrincipal.querySelector('#user_dni').textContent = contenido.dni;                
                }
            });
            if (existuser === false){
                contenidoPrincipal.querySelector('#user_name').textContent = sessionStorage.getItem('username');
                contenidoPrincipal.querySelector('#user_email').textContent = sessionStorage.getItem('email');
                contenidoPrincipal.querySelector('#user_phone').textContent = sessionStorage.getItem('telefono');
                contenidoPrincipal.querySelector('#user_dni').textContent = sessionStorage.getItem('dni');
            }
        });
    }
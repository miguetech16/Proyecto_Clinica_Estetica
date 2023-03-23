addEventListener('load', init);

    const supportsTemplate = function () {
        //create a template element and make sure it has a 'content' property
        return 'content' in document.createElement('template');
    }

    function init() {

        loadTemplate('templates/review.html', 'template_reseña_añadir', cargacontenido);
    }

    function loadTemplate(fileName, id, callback) {

        fetch(fileName).then((res) => {
            return res.text();
        }).then((text) => {
            document.getElementById(id).innerHTML = text;
            //console.log(text)

            if(callback){
                callback();
            }
        })
    }

    function cargacontenido(){
        if (supportsTemplate()) {
            fetch('json/reviews.json')
            .then(response => response.json())
            .then(data => {
            const contenidos = data.valoraciones;
            let contenidoPrincipal = document.querySelector('#reseñas');
            console.log(contenidoPrincipal);
            let temp = document.getElementById('reseña');
            const fragment = document.createDocumentFragment();
            let content = temp.content;
            console.log(content);
            if(sessionStorage.getItem("email") !== "" && sessionStorage.getItem("email")){
                contenidos.forEach(contenido => {
                    let aux = content.cloneNode(true);
                    aux.querySelector('details').querySelector('.reseña').textContent = contenido.título;
                    let estrella = "★";
                    let valoracion = estrella.repeat(contenido.valoración);
                    aux.querySelector('details').querySelector('.estrellas').textContent = valoracion;                
                    aux.querySelector('details').querySelector('.text').textContent = contenido.reseña;
                    console.log(aux);
                    fragment.appendChild(aux);
                });
                contenidoPrincipal.appendChild(fragment);
            } else {
                contenidoPrincipal.setAttribute("class", "");
                document.querySelector('.formCont').style.display = 'none';
                contenidos.forEach(contenido => {
                    let aux = content.cloneNode(true);
                    aux.querySelector('details').querySelector('.reseña').textContent = contenido.título;
                    let estrella = "★";
                    let valoracion = estrella.repeat(contenido.valoración);
                    aux.querySelector('details').querySelector('.estrellas').textContent = valoracion;                
                    aux.querySelector('details').querySelector('.text').textContent = contenido.reseña;
                    console.log(aux);
                    fragment.appendChild(aux);
                });
                contenidoPrincipal.appendChild(fragment);
            }
            });
        }
    }
addEventListener('load', init);

    const supportsTemplate = function () {
        //create a template element and make sure it has a 'content' property
        return 'content' in document.createElement('template');
    }

    function init() {

        loadTemplate('templates/distribucion3.html', 'distribu3', cargacontenido);
        loadTemplate('templates/card.html', 'cardsTreatment', cargacartas);
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
            fetch('json/treatments.json')
            .then(response => response.json())
            .then(data => {
                const contenidos = data.tratamientos;
                let contenidoPrincipal = document.querySelector('#distribu3');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('dist_3');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                let tratamiento = sessionStorage.getItem("TratamientoSeleccionado");
                contenidos.forEach(contenido => {
                    if (tratamiento === contenido.nombre) {
                    let aux = content.cloneNode(true);
                    aux.querySelector('figure').querySelector('img').setAttribute("src", contenido.imagen);
                    aux.querySelector('section').querySelector('.introText').textContent = contenido.descripcion;
                    document.querySelector('.title').querySelector('.titulo').textContent = tratamiento;
                    console.log(aux);
                    fragment.appendChild(aux);
                    sessionStorage.removeItem("TratamientoSeleccionado");
                    }
                });
                contenidoPrincipal.appendChild(fragment);
            });
        }
    }

    function cargacartas(){
        
    }
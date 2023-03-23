addEventListener('load', init);

const supportsTemplate = function () {
    //create a template element and make sure it has a 'content' property
    return 'content' in document.createElement('template');
}

function init() {
    loadTemplate('templates/distribucion3.html', 'distribu3', cargacontenido);
    loadTemplate('templates/card.html', 'cardsTreatment', cargaCartas);
}

function loadTemplate(fileName, id, callback) {
    fetch(fileName).then((res) => {
        return res.text();
    }).then((text) => {
        document.getElementById(id).innerHTML = text;
        //console.log(text)

        if (callback) {
            callback();
        }
    })
}

function cargacontenido() {
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
                    }
                });
                contenidoPrincipal.appendChild(fragment);
            });
    }
}

function cargaAlergenos() {
    if (supportsTemplate()) {
        fetch('json/treatments.json')
            .then(response => response.json())
            .then(data => {
                const contenidos = data.tratamientos;
                let contenidoPrincipal = document.querySelector('#cardsTreatment');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('card_template');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                let tratamiento = sessionStorage.getItem("TratamientoSeleccionado");
                contenidos.forEach(contenido => {
                    if (tratamiento === contenido.nombre) {
                        let aux = content.cloneNode(true);
                        aux.querySelector('#img_card').setAttribute("src", data.imagenes.alergenosIMG);
                        let seccionconte = aux.querySelector('section');
                        seccionconte.querySelector('h3').textContent = "Alérgenos";
                        seccionconte.querySelector('p').textContent = contenido.alergenos;
                        console.log(aux);
                        fragment.appendChild(aux);
                    }
                });
                contenidoPrincipal.appendChild(fragment);
            });
    }
}

function cargaProductosUsados() {
    if (supportsTemplate()) {
        fetch('json/treatments.json')
            .then(response => response.json())
            .then(data => {
                const contenidos = data.tratamientos;
                let contenidoPrincipal = document.querySelector('#cardsTreatment');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('card_template');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                let tratamiento = sessionStorage.getItem("TratamientoSeleccionado");
                contenidos.forEach(contenido => {
                    if (tratamiento === contenido.nombre) {
                        let aux = content.cloneNode(true);
                        aux.querySelector('#img_card').setAttribute("src", data.imagenes.productosIMG);
                        let seccionconte = aux.querySelector('section');
                        seccionconte.querySelector('h3').textContent = "Productos Usados";
                        seccionconte.querySelector('p').textContent = contenido.productos_usados;
                        console.log(aux);
                        fragment.appendChild(aux);
                    }
                });
                contenidoPrincipal.appendChild(fragment);
            });
    }
}

function cargaSesiones() {
    if (supportsTemplate()) {
        fetch('json/treatments.json')
            .then(response => response.json())
            .then(data => {
                const contenidos = data.tratamientos;
                let contenidoPrincipal = document.querySelector('#cardsTreatment');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('card_template');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                let tratamiento = sessionStorage.getItem("TratamientoSeleccionado");
                contenidos.forEach(contenido => {
                    if (tratamiento === contenido.nombre) {
                        let aux = content.cloneNode(true);
                        aux.querySelector('#img_card').setAttribute("src", data.imagenes.sesionesIMG);
                        let seccionconte = aux.querySelector('section');
                        seccionconte.querySelector('h3').textContent = "Sesiones";
                        seccionconte.querySelector('p').textContent = contenido.sesiones;
                        console.log(aux);
                        fragment.appendChild(aux);
                    }
                });
                contenidoPrincipal.appendChild(fragment);
            });
    }
}

function cargaCartas() {
    cargaAlergenos();
    cargaProductosUsados();
    cargaSesiones();
}
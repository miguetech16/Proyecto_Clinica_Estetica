addEventListener('load', init);

    const supportsTemplate = function () {
        //create a template element and make sure it has a 'content' property
        return 'content' in document.createElement('template');
    }

    function init() {

        loadTemplate('templates/distribucion2.html', 'tratamientos', cargacontenido);
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
                let contenidoPrincipal = document.querySelector('#tratamientos');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('dist_2');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                contenidos.forEach(contenido => {
                    let aux = content.cloneNode(true);
                    aux.querySelector('.item').querySelector('.txtCentrado').textContent = contenido.nombre;
                    aux.querySelector('.item').querySelector('img').setAttribute("src", contenido.imagen);
                    aux.querySelector('.item').querySelector('a').setAttribute("onclick", `GuardarTratamiento('${contenido.nombre}')`);
                    console.log(aux);
                    fragment.appendChild(aux);
                });
                contenidoPrincipal.appendChild(fragment);
            });
        }
    }

    function GuardarTratamiento(tratamiento){
        sessionStorage.setItem("TratamientoSeleccionado", tratamiento);
        window.location = "treatment.html";
    }
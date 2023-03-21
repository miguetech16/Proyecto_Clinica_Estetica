addEventListener('load', init);

    const supportsTemplate = function () {
        //create a template element and make sure it has a 'content' property
        return 'content' in document.createElement('template');
    }

    function init() {

        loadTemplate('templates/question.html', 'faqs', cargacontenido);
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
            fetch('json/faq.json')
            .then(response => response.json())
            .then(data => {
                const contenidos = data.faqs;
                let contenidoPrincipal = document.querySelector('#faqs');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('question');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                contenidos.forEach(contenido => {
                    let aux = content.cloneNode(true);
                    aux.querySelector('details').querySelector('summary').textContent = contenido.pregunta;
                    aux.querySelector('details').querySelector('.text').textContent = contenido.respuesta;                
                    console.log(aux);
                    fragment.appendChild(aux);
                });
                contenidoPrincipal.appendChild(fragment);
            });
        }
    }
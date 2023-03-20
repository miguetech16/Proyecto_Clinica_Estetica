addEventListener('load', init);

const supportsTemplate = function () {
    //create a template element and make sure it has a 'content' property
    return 'content' in document.createElement('template');
}

function init() {
    loadTemplate('templates/distribucion1.html', 'dist1', cargacontenido);
}

function loadTemplate(fileName, id, callback) {
    fetch(fileName).then((res) => {
        return res.text();
    }).then((text) => {
        document.getElementById(id).innerHTML = text;
        if(callback){
            callback();
        }
    })
}

function cargacontenido(){
    if (supportsTemplate()) {
        fetch('json/aboutUs.json')
        .then(response => response.json())
        .then(data => {
            const medicos = data.medicos;
            let contenidoPrincipal = document.querySelector('#dist1');
            console.log(contenidoPrincipal);
            let temp = document.getElementById('dist_1');
            const fragment = document.createDocumentFragment();
            let content = temp.content;
            console.log(content);
            medicos.forEach(medico => {
                let aux = content.cloneNode(true);
                aux.querySelector('.img-distribution1').querySelector('img').setAttribute("src", medico.imagen);
                let seccionconte = aux.querySelector('section');
                seccionconte.querySelector('h2').textContent = medico.nombre;                    
                seccionconte.querySelector('p').textContent = medico.trayectoria;                    
                console.log(aux);
                fragment.appendChild(aux);
            });
            contenidoPrincipal.appendChild(fragment);
        });
    }
}

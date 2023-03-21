addEventListener('load', init);

    const supportsTemplate = function () {
        //create a template element and make sure it has a 'content' property
        return 'content' in document.createElement('template');
    }

    function init() {

        loadTemplate('templates/distribucion1.html', 'dist1', cargacontenido);
        loadTemplate('templates/distribucion2.html', 'dist2', cargaitems);

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
            fetch('json/home.json')
            .then(response => response.json())
            .then(data => {
                const contenidos = data.contenido;
                let contenidoPrincipal = document.querySelector('#dist1');
                console.log(contenidoPrincipal);
                let temp = document.getElementById('dist_1');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                contenidos.forEach(contenido => {
                    let aux = content.cloneNode(true);
                    aux.querySelector('.img-distribution1').querySelector('img').setAttribute("src", contenido.imagen);
                    let seccionconte = aux.querySelector('section');
                    seccionconte.querySelector('h2').textContent = contenido.titulo;                    
                    seccionconte.querySelector('p').textContent = contenido.descripcion;                    
                    console.log(aux);
                    fragment.appendChild(aux);
                });
                contenidoPrincipal.appendChild(fragment);
            });
        }
    }

    function cargaitems(){
        if (supportsTemplate()) {
            fetch('json/home.json')
            .then(response => response.json())
            .then(data => {
                const items = data.items;
                let contenidoPrincipal = document.querySelector('#dist2');
                let temp = document.getElementById('dist_2');
                const fragment = document.createDocumentFragment();
                let content = temp.content;
                console.log(content);
                items.forEach(item => {
                    if (item.text === "Tratamiento Destacado" ){
                        let aux = document.createElement('article');
                        aux.setAttribute('class', "item span2_tablet")
                        aux.innerHTML = `
                            <figure class="item">
                                <a onclick= "GuardarTratamiento()">
                                    <div class="txtCentrado">${item.text}</div>
                                    <img src=${item.img} width=100%>
                                </a>
                            </figure>

                        `
                        console.log(aux);
                        fragment.appendChild(aux);
                    } else {
                        let aux = content.cloneNode(true);
                        aux.querySelector('.txtCentrado').textContent = item.text;
                        aux.querySelector('img').setAttribute("src", item.img);
                        aux.querySelector('a').setAttribute("href", item.destiny);
                        fragment.appendChild(aux);
                    }
                });
                contenidoPrincipal.appendChild(fragment);
            });
        }
    }

    function GuardarTratamiento(){
        sessionStorage.setItem("TratamientoSeleccionado", "Tratamiento de Láser");
        window.location = "treatment.html";
    }

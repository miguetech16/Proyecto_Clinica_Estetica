addEventListener('load', init);

const supportsTemplate = function () {
    //create a template element and make sure it has a 'content' property
    return 'content' in document.createElement('template');
}

function init() {
    loadTemplate('templates/card.html', 'promotionCards', cargacontenido);
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
        fetch('json/promotions.json')
        .then(response => response.json())
        .then(data => {
            const cards = data.items;
            let contenidoPrincipal = document.querySelector('#promotionCards');
            console.log(contenidoPrincipal);
            let temp = document.getElementById('card_template');
            const fragment = document.createDocumentFragment();
            let content = temp.content;
            console.log(content);
            cards.forEach(card => {
                let aux = content.cloneNode(true);
                aux.querySelector('#img_card').setAttribute("src", card.img);
                let seccionconte = aux.querySelector('section');
                seccionconte.querySelector('h3').textContent = card.title;                 
                seccionconte.querySelector('p').textContent = card.description;                    
                console.log(aux);
                fragment.appendChild(aux);
            });
            contenidoPrincipal.appendChild(fragment);
        });
    }
}
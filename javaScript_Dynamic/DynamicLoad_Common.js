addEventListener('load', init);

function init() {

    loadTemplate('templates/header.html', 'header', UserLogin);
    loadTemplate('templates/footer.html', 'footer');
    loadTemplate('templates/titleWithImage.html', 'title_page', setTitle);

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

function UserLogin() {
    if (sessionStorage.getItem("email") !== "" && sessionStorage.getItem("email")) {
        document.getElementById('enlace_usuario').setAttribute("href", "userPanel.html");
    }
}

function setTitle() {
    var URLactual = window.location.pathname;
    if (URLactual === '/main.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "Clínicas LMR"
    } else if (URLactual === '/aboutUs.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "Nosotros"

    } else if (URLactual === '/treatments.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "Tratamientos"

    } else if (URLactual === '/promotions.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "Promociones"

    } else if (URLactual === '/contactUs.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "Contacto"

    } else if (URLactual === '/FAQ.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "FAQ"

    } else if (URLactual === '/reviews.html') {
        document.querySelector("#title_page").querySelector(".titulo").textContent = "Reseñas"

    }
}



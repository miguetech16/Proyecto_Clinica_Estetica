function logout(){
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('telefono');
    sessionStorage.removeItem('dni'); 
    window.location="main.html";
}

function pedirCita(){
    alert("Su cita ha sido actualizada en la base de datos de Windows")
}
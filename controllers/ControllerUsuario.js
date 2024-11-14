import { usuarios } from "../models/ModelUsuario.js";

export function login(){
    let loginUsuario = document.getElementById('loginUsuario').value
    let loginContraseña = document.getElementById('loginContraseña').value
    console.log(usuarios);
    usuarios.some(function(index){
        if(loginUsuario == index.usuario && loginContraseña == index.contraseña){
            let timerInterval;
Swal.fire({
  title: "Bienvenido: " + index.nombre,
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  icon: "success",
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
     window.location.href = '/views/pages/ViewCredito.html'
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

        } else{
            Swal.fire({
                title: "Error",
                text: "Usuario y/o contraseña incorrecto o no existente",
                icon: "error"
              });
        }
    });
}

export function register(){
    let registroNombre = document.getElementById('registerNombre').value;
    let registroUsuario = document.getElementById('registerUsuario').value;
    let registroCorreo = document.getElementById('registerCorreo').value;
    let registroContraseña = document.getElementById('registerContraseña').value;
    let registerConfirmarContr = document.getElementById('registerConfirmarContr').value;
    let newRegistro = {
        nombre: registroNombre,
        usuario: registroUsuario,
        correo: registroCorreo,
        contraseña: registroContraseña,
        confirmarContraseña: registerConfirmarContr
    }
    usuarios.push(newRegistro)
    document.getElementById("form-login").style.display = 'flex'
    document.getElementById("form-register").style.display = 'none'
 
}
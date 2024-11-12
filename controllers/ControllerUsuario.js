import { usuarios } from "../models/ModelUsuario.js";

export function login(){
    console.log(usuarios);
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
    console.log(usuarios);
}
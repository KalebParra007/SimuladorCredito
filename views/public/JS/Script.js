import{expresionesRegulares} from"../../../helpers/expresiones.js";

console.log(expresionesRegulares)
// function Persona(nombre, edad, estatura, color){
//     this.nombre = nombre
//     this.edad = edad
//     this.estatura = estatura
//     this.color = color

//     this.moverse= function(nombre){
//         console.log( this.nombre = nombre + '  Se movió...')
//     }
    
//     this.expresarse= function(){
//         console.log(' Se expresó...')
//     }
// }

// let personaUno = new Persona('LaMelo', 22, 1.95, 'blanco')
// let personaDos = new Persona('LeBron', 39, 2.01, 'negro')
// console.log(personaUno, personaDos)
// personaUno.moverse()
// personaDos.moverse()
// console.log(personaUno, personaDos)

// let persona={
//     nombre: 'Juan Felipe',
//     apellido: 'Niño',
//     edad: 19,
//     moverse: function(){
//         console.log('Se esta moviendo...')
//     },
//     direccion: {
//         calle: 23,
//         carrera: 23,
//         interior: 20
//     }
// }


document.querySelector('#btnFormRegister').addEventListener('click', function(){
    document.querySelector('#form-login').style.display='flex'
    document.querySelector('#form-register').style.display='none'
})

document.querySelector('#btnFormLogin').addEventListener('click', function(){
    document.querySelector('#form-register').style.display='flex'
    document.querySelector('#form-login').style.display='none'
})
let inputs = document.getElementsByTagName('input')
for (let index=0; index<inputs.length; index++){
    inputs[index].addEventListener('keyup', validarFormulario)
    }

    function  validarFormulario(e){
        console.log(e)

        switch (e.target.name){
        case 'loginUsuario':
                if(expresionesRegulares.nombre.test(e.target.value)){
                    console.log("Pasó la validación")
                } else{
                    console.log("El campo solo permite letras en mayúsculs")
                }
            break;
        case 'loginContraseña':
                console.log('Este es el input de login Contraseña')
            break;
        case 'registerNombre':
            if(expresionesRegulares.nombre.test(e.target.value)){
                document.getElementById("registerNombre").classList.add('correcto')
                document.getElementById("registerNombre").classList.remove('incorrecto')
            } else{
                document.getElementById("registerNombre").classList.add('incorrecto')
                document.getElementById("registerNombre").classList.remove('correcto')
                // document.getElementById("mensajeNom").textContent="El nombre solo puede ir en mayúsculas"
            }
            break;
        case 'registerUsuario':
            if(expresionesRegulares.usuario.test(e.target.value)){
                document.getElementById("registerUsuario").classList.add('correcto')
                document.getElementById("registerUsuario").classList.remove('incorrecto')
            } else{
                document.getElementById("registerUsuario").classList.add('incorrecto')
                document.getElementById("registerUsuario").classList.remove('correcto')
            }
            break;
        case 'registerCorreo':
            if(expresionesRegulares.correo.test(e.target.value)){
                document.getElementById("registerCorreo").classList.add('correcto')
                document.getElementById("registerCorreo").classList.remove('incorrecto')
            } else{
                document.getElementById("registerCorreo").classList.add('incorrecto')
                document.getElementById("registerCorreo").classList.remove('correcto')
            }
            break;
        case 'registerContraseña':
            if(expresionesRegulares.contraseña.test(e.target.value)){
                document.getElementById("registerContraseña").classList.add('correcto')
                document.getElementById("registerContraseña").classList.remove('incorrecto')
            } else{
                document.getElementById("registerContraseña").classList.add('incorrecto')
                document.getElementById("registerContraseña").classList.remove('correcto')
            }
            break;
        case 'registerConfirmarContr':
            if(expresionesRegulares.contraseña.test(e.target.value)){
                document.getElementById("registerConfirmarContr").classList.add('correcto')
                document.getElementById("registerConfirmarContr").classList.remove('incorrecto')
            } else{
                document.getElementById("registerConfirmarContr").classList.add('incorrecto')
                document.getElementById("registerConfirmarContr").classList.remove('correcto')
            }
            break;
        default:

            break;
        }
    }



// console.log(document.querySelectorAll('input'))

// let arreglo = [1, 'Jaime', true, function(){}, {nombre: 'Jaime'}, []]
// console.log(arreglo)
// console.log(arreglo[4])
// console.log(arreglo[2])
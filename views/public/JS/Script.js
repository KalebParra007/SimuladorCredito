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
                console.log("Pasó la validación")
            } else{
                console.log("El campo solo permite letras en mayúsculs")
            }
            break;
        case 'registerUsuario':
                console.log('Este es el input de register Usuario')
            break;
        case 'registerCorreo':
                console.log('Este es el input de register Correo')
            break;
        case 'registerContraseña':
                console.log('Este es el input de register Contraseña')
            break;
        case 'registerConfirmarContr':
                console.log('Este es el input de register ConfirmarContr')
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
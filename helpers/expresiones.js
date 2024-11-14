export const expresionesRegulares = {
    nombre: /^[A-ZÁÉÍÓÚÜÑ\s]+$/, // Solo letras en mayúsculas, incluyendo acentos y espacios.  
    usuario: /^[a-z]{4,10}$/, // Solo letras minúsculas, entre 4 y 10 caracteres.  
    contraseña: /^(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z])(?!.\s).*$/gm, 
    // Entre 4 y 10 caracteres, con al menos una mayúscula, una minúscula, un número y un carácter especial.  
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ // Formato de correo electrónico 
};
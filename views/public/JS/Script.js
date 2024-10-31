function Persona(nombre, edad, estatura, color){
    this.nombre = nombre
    this.edad = edad
    this.estatura = estatura
    this.color = color

    this.moverse= function(nombre){
        console.log( this.nombre = nombre + '  Se movió...')
    }
    
    this.expresarse= function(){
        console.log(' Se expresó...')
    }
}

let personaUno = new Persona('LaMelo', 22, 1.95, 'blanco')
let personaDos = new Persona('LeBron', 39, 2.01, 'negro')
console.log(personaUno, personaDos)
personaUno.moverse()
personaDos.moverse()
class Persona {
    static contadorObjetosPersona = 0;
//La directiva static permite el acceso a métodos y variables de clase sin la necesidad de 
//instanciar un objeto de dicha clase, permitiendo la inicialización de forma cómoda 
//y durante la carga de clase.
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    toString() {
        return `${this._idPersona}
                ${this._nombre}
                ${this._apellido}
                ${this._edad}`;
    }
    //uso en columna de template
}

let miPersonaUno = new Persona('Pepe', 'Argento', 50);
console.log(miPersonaUno.toString());
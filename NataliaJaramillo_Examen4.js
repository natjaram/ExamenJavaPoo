class Persona{

    //Atributos
    nombre;
    apellido;
    edad;

    //Métodos
    getDetalles(){
        console.log(nombre + apellido + edad);
    }


    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

class Empleado extends Persona{
    //Atributos
    tipo;

    //Métodos
    getDetalles(){
        console.log(nombre + apellido + edad + tipo);
    }

    constructor(nombre, apellido, tipo){
        this.nombre=nombre;
        this.apellido=apellido;
        this.tipo=tipo;
    }
}

class Nomina{

}
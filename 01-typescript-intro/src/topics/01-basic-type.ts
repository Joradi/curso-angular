// A diferencia de JS en las variables podemos asignar el tipo de dato que son estas

const name:string = 'Dodoro';

// Sí necesitamos que una variable tenga más de un tipo de dato podemos usar | para poder señalizarlo

let hpPoint:number | string = 100;

hpPoint = 'FULL';

let isALiver: boolean = true;

console.log(name, hpPoint, isALiver);

export{}
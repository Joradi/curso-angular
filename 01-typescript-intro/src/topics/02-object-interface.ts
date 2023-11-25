// Cuando querermos influir en los comportamientos de futuros desarrolladores o nosotros mismos en ingreso de datos en un arreglo podemos indicar el tipo de datos que puede ir dentro del arreglo

const skills: string[] = ['Jump', 'Hit', 'Block', 'Walking', 'Counter', 'Healing'];

// las interface son la creacion de un tipo de objeto no se leen en JS, pero ayudan a manipular los objetos indicando cual debiera ser la logica de estos
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string | undefined;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Jump', 'Hit'],
    hometown: undefined
};

strider.hometown= 'Rivendall';

console.table(strider);

export{}
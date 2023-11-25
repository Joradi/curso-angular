export class Person{
    // public name:string;
    // public address: string;

    constructor(
        public name:string, 
        public lastName: string,
        public address: string,
        ){}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'Valparaiso');
//     }
// }

export class Hero{
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // this.person = new Person(realName);
    }
}

const person = new Person('Lorito', 'Wanderino', 'valparaiso');
const wanderito = new Hero('Wanderito', 115, 'Lorito', person);
console.log(wanderito);
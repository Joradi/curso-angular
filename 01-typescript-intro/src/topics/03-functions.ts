// function sumar(a:number,b:number){
//     return a+b;
// }

// const sumar2 = (a:number, b:number):string => {
//     return `${a + b}`;
// }
// console.log(sumar(2,3), sumar2(3,6));
// function multiplicar (numeroUno: number, numeroDos?: number, base: number = 2){
//     return numeroUno*base;
// }
// console.log(multiplicar(6));

interface Character{
    name: string;
    hp: number;
    showHp: ()=> void;
}
const healCharacter = (character:Character, amount:number) => {
    character.hp += amount;
}

const strider:Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`HP: ${this.hp}`);
    }
};
healCharacter(strider, 30);
strider.showHp();


export{}
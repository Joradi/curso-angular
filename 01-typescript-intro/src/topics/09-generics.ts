export function whatsMyType<T>(argument: T) : T{
    return argument;
}

let iAmString = whatsMyType<string>('I am String');
let iAmNumber = whatsMyType<number>(100);
let iAmArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);


console.log(iAmString.split(' '));
console.log(iAmNumber.toFixed());
console.log(iAmArray.join('-'));
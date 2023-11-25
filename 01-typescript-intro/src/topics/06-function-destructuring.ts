export interface Product{
    description : string;
    price: number;
}

const phone:Product = {
    description: 'Nokia A1',
    price: 150000
}

const tablet: Product = {
    description: 'Samsung Galaxy A6',
    price: 300000
}

export interface TaxCalculationOptions{
    tax: number,
    products: Product[];
}
// function TaxCalculation(options: TaxCalculationOptions): [number, number] {
// function TaxCalculation({products, tax} : TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {products, tax} = options;
    let total = 0;
    products.forEach( ({ price }) => {
        total += price;
    })
    return [total, total * tax];
}
 
const shoppingCart = [phone, tablet];

export const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total: ', total);
console.log('Tax: ', taxTotal);

// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// // stored correctly.
// function create_car( manufacturer:string, model:string ,...options:string[]){
// let car = {
//     manufacturer:manufacturer,
//     model:model,

// };
// options.forEach(option => {
//     let[key,value]=option.split(":");
//     car[key.trim()] = value.trim();
    
    
// });
// return car;
// }
// let my_car=create_car("Toyota", "Corolla","color:red","sunroof:true");       
// console.log( my_car)
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function create_car(manufacturer: string, model: string, ...options:  [string,any][]) {
    const car = {
        manufacturer: "Toyota",
        model: "Camry",
    };

    
        options.forEach(([key, value]) => {
            car[key]=value;
        });
        return car;
    }
    
    const myCar = create_car("Toyota", "Camry", ["color", "red"], ["year", 2024]);
    console.log(myCar);
        




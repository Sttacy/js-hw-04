const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const numbers = array1.concat(array2)
let result = 0 

for(let number of numbers){
    result += number
}
console.log(result);
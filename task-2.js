const numbers =  [23,1,45,87,4,55,6]
let max = numbers[0]
 
for(let number of numbers){
    if(number > max){
        max = number
    }
}
console.log(max);
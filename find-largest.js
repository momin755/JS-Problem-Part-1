
var numbers = [-10,-15,-25,-35,-500];
function maxNumber(numbers){
    let largest =numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i];
    }
}
return largest;
}
console.log(maxNumber(numbers))
// 7! =7*6*5*4*3*2*1

// var factorial = 1;
// for(let i =1; i <= 7; i++){
   
//    factorial *= i;
    
// }
// console.log(factorial)

function factorialNumber(num){
    var factorial = 1;
    for(let i =1; i <=num; i++){
        factorial *= i;
    }
    return factorial;
}
console.log(factorialNumber(7))
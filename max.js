var first = 450;
var second = 560;
var third = 700;
var result = Math.min(first, second, third);
console.log(result)

if(first > second && first > third){
    console.log(first);
}
if(second > first && second > third){
    console.log(second);
}
else{
    console.log(third)
}
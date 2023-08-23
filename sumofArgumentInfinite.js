//Q show me sum of this functiin sum(1)(3)(5)(2)(6)(9)

// let sum = function(a){
//     return function(b){
//         if(b){
//             return sum(a+b);
//         }else{
//             return a;
//         }
//     }
// }

let sum = (a) => (b) => b ? sum(a+b) : a;

console.log(sum(1)(1)(5)(2)(6)(9)());


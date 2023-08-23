// let multiply = function(x, y){
//     return x*y;
// }

// let mymultiply = multiply.bind(this);
// console.log(mymultiply(2, 5));

// let mymultiplyThree = multiply.bind(this);
// console.log(mymultiplyThree(3, 5));

let cloMultiply = function(y){
    return function(x){
       console.log(y*x);
    }
}

let mycloMultiply = cloMultiply(2);
mycloMultiply(9);
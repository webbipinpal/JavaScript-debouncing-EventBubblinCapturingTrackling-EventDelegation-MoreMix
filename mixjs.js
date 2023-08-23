 // function x () {
    //     for(var i=1; i <= 5; i++){
            
    //         function close(){
    //             var b = i *1;
    //             setTimeout(function(){
    //                 console.log(b);
    //             }, i * 1000);
    //         }
    //         close()
    //     }
    //     console.log('Bipin');
    // }
    // x();

    // Higher order funciont section
     //x is callback
    //y Higher order function
    // function x() {
    //     console.log('Bipin Kumarsdsd Pal');
    // };
   
    // function y(x){
    //     return x();
    // }
    // y(x);
   
    // const radius = [3, 6, 8, 1]; 
    // const calculator = function (radius){
    //     output = [];
    //     for(let i = 0; i < radius.length; i++ ){
    //         output.push(Math.PI * radius[i] * radius[i] )
    //     }
    //     return output;
    // };
    // console.log(calculator(radius));

   // Map
    // const numarr = [3, 6, 8, 1, 5];
    // function y(x){
    //     const bkp = [];
    //     x.map((num) => {
    //     return bkp.push(num*3);
    // });
    // return bkp;
    // }
    // console.log(y(numarr));

    //filter
    // const numarr = [3, 6, 8, 1, 5];
    // const output = numarr.filter((x) => {
    //     return sum = x * 4;
    // });
    // console.log(output);

    // Reduce
    const arr = [3, 6, 8, 1, 5];
   function reduceFind (arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum;
    }
    console.log(reduceFind(arr));
    const output = arr.reduce( (acc, curr) => {
        return acc = acc + curr;
    }, 0);
    console.log(output);


let conut = 0;
const getData = () => {
    console.log('Fetching Data.....' + conut++);
}

const getDebounce = function(fn, d){
    let timer;
  return function (){
      let context = this;
      let args = arguments;
      clearTimeout();
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
  }
}


const betterFinction = getDebounce(getData, 300);
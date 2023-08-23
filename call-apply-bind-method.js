let name = {
    firstname: 'Piyush Kumar',
    lastname:'Pal'
}
let printName = function(hometown, state){
    console.log( this.firstname + ' ' + this.lastname + ' from ' + hometown + ' ' + state);
}
printName.call(name, 'Narkatiaganj', 'Bihar');

let name2 = {
    firstname: 'Priya and Piyush',
    lastname:'Kumar'
}
printName.call(name2, 'Bettiah', 'Bihar');
printName.apply(name2, ['D K Shikar', 'Bihar']);

const bindName = printName.bind(name, 'Narkatiaganj', 'Bihar');
console.log(bindName);
bindName();
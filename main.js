// // function syntax
// // return perameters hote hain
// function greet(name:string){
//     return `welcome, ${name}`;
// }
// //function call karana
// console.log(greet("Ali jumani"));
// console.log(greet("Hussain"));
// console.log(greet("Shakee"));
// console.log(greet("sonu"));
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
// there are two types of perameters
//1 optional parameters?
//2 default parameters
function optional(name) {
    if (name) {
        return "hello, ".concat(name);
    }
    else {
        return "hellow Sir";
    }
}
console.log(optional("Ali Bakhsh"));
console.log(optional());

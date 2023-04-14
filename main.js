let a = +prompt('1 sonni kiriting')
let b = +prompt('2 sonni kiriting')
let c =+ prompt('3 sonni kiriting')
if(a<=b && b<=c && a<= c){
    console.log(a, c, b);
} 
if(a<=c && c<=b && a<=b){
    console.log(a, c, b);
}
if(c<=a && a<=b && c<=b){
    console.log(c, a, b);
}
if(c<=b && b<=a && c<=b){
    console.log(c, b, a);
}
if(b<=a && a<=c && b<=a){
    console.log(b, a, c);
}
if(b<=c && c<=a && b<=a){
    console.log(b, c, a);
}
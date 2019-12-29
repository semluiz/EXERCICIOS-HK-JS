function factorial(n) {
    for(var i=n;i>1;i--){
        n = (n*i)-n;
    }
    return n;
}

console.log(factorial(4));
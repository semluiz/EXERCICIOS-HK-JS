function sumCallback(){
    let sum = 1 + 1;

    if (sum == 2 ){
        succesCallback();
    } else {
        errorCallback();
    }  

}

function succesCallback(){
        console.log("Yeah this is 2");
    }
   function errorCallback(){
        console.log("Oops!, something went wrong");
    }
sumCallback();
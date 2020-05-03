const yetAnotherArray =  [1,2,3,4,5,10,52,5,4,2,1];

const filterArray = yetAnotherArray.filter((element,index,array)=>
        array.indexOf(element) === index    
);

console.log(filterArray);
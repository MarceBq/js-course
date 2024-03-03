// Default Parameters

function sum(a,b){
    if(a === undefined || b === undefined){
        console.log('You must provide two numbers');
        return;
    }
    return a+b;
}

console.log(sum(3));


// Default Parameters
function sum2(a=0,b=0){
    return a+b;
}

console.log(sum2(3));
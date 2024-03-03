// Ternary Operation

const car = {
    make: 'Toyota',
    model: 'Camry',
}

let model; 

if (car.model) {
    model = car.model;
} else {
    model = 'unknown';
}
console.log(model);

// Ternary Operation
let model2 = car.model ? car.model : 'unknown';
console.log(model2);


// React
function listHomework({Homework}){
    return (
        <React.Fragment>
            {Homework.length > 1 ? (
                <ul>{Homework.map()}</ul>
            ) : (<p>There are no homeworks</p>)} 
        </React.Fragment>
    )
}
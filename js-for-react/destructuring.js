// Destructuring

const square = {
    x: 100,
    y: 100,
}


const calculateArea = ({ x, y }) => {
    return x * y;
}

console.log(calculateArea(square));


// React
function Avatar({userName, url}){
    return (
        <div>
            <img src={url} alt={userName}></img>
        </div>
)}
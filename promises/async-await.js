const movies = [
    {id : 1,
    title: 'Iron Man',
    year: 2008,},

    {id : 2,
    title: 'Spirderman: Homecoming',
    year: 2017,},

    {id : 3,
    title: 'Avengers: Endgame',
    year: 2019,},
];
 
const getDataMovie = () => {
    console.log('loading data...');
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(movies);
        }, 1000);
    });
}

// getDataMovie().then(movies => {console.log(movies);})
async function fetchMovie() {
    const movies = await getDataMovie();
    console.log(movies);
}

fetchMovie();
console.log(getDataMovie());
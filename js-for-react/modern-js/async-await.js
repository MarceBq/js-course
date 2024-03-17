// Async ->
// Await ->

const getImgPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve("https://www.imagen.com");
  });

  return promesa;
};
getImgPromesa().then(console.log);


// Async
const getImgAsync = async () => {
    return "https://www.imagen.com";
}
getImgAsync().then(console.log);

// Ejecicio con api
const getImgApi = async () => {

    // try -> intenta hacer algo y si no puede, captura el error
    try{
        const apiKey = "123456";
        // El "await" dice espera a que la promesa(fecth) termine para continuar con el codigo
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);    
        const { data } = await respuesta.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);

        // catch -> captura el error
    }catch(error){
        console.error(error);
    }
    
}



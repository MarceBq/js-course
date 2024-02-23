// Switch

// Menú de opciones:
// Crear un programa que simule un menú de opciones (por ejemplo, un menú de un restaurante) y utiliza switch para manejar las diferentes selecciones del usuario.

function elijeCliente(carta){
    switch(carta){
        case 'Entrada':
            return [{entrada: 'Papa a la huancaína'},
                    {entrada: 'Caldo de pollo'},
                   ]
        break;
    
        case 'Principal':
            return [{plato: 'Lomo saltado'},
                    {plato: 'Tallarines verdes'}
                   ]
    }
}

console.log(elijeCliente('Entrada'));



// Calificación de películas:
// Implementar un sistema que clasifique las películas según su puntuación y utilice switch para determinar la categoría (por ejemplo, "Excelente", "Buena", "Regular", etc.).

function calificarSistema(calf){

    switch(calf){
        case 'A':
            return 'Excelente'
        break

        case 'B':
            return 'Buena'
        break

        case 'C':
            return 'Regular'
        break

        case 'D':
            return 'No me agradó'
        break;
    }
}

console.log(calificarSistema('A'));


// Aplicación de transporte:
// Desarrollar un pequeño sistema para una aplicación de transporte que determine el tipo de vehículo a mostrar según la selección del usuario (por ejemplo, "Automóvil", "Bicicleta", "Scooter", etc.).

function llantas(llantas){
    switch(llantas){
        case 1 :
            return 'Monociclo'
        break

        case 2 : 
            return 'Bicicleta'
        break

        case 3 :
            return 'Triciclo'
        break

        case 4 : 
            return 'Automovil'
        break
    }
}

console.log(llantas(2));

// Estaciones del año:
// Crear un programa que tome un mes como entrada y utilice switch para determinar la estación del año correspondiente.

function obtenerEstacion(mes) {
    let estacion;

    switch (mes.toLowerCase()) {
        case 'enero':
        case 'febrero':
        case 'marzo':
            estacion = 'Invierno';
            break;
        case 'abril':
        case 'mayo':
        case 'junio':
            estacion = 'Primavera';
            break;
        case 'julio':
        case 'agosto':
        case 'septiembre':
            estacion = 'Verano';
            break;
        case 'octubre':
        case 'noviembre':
        case 'diciembre':
            estacion = 'Otoño';
            break;
        default:
            estacion = 'Mes no válido';
    }

    return estacion;
}

console.log(obtenerEstacion('enero'));


// Juego de cartas:
// Desarrollar un juego de cartas simple en el que switch se utiliza para determinar el resultado de comparar dos cartas (por ejemplo, "Ganaste", "Perdiste", "Empate").

const juegoCartas = (c1, c2, validarJ) => {
    let resultaado = ''

    switch(validarJ(c1,c2)){
        case 1: 
            resultaado = 'Ganaste, tu carta es la mayor'
        break
        
        case 2: 
            resultaado = 'Perdiste, tu carta es la menor'
        break

        case 3:
            resultaado = 'Empate, tienen el mismo valor'
    }

    return resultaado
}


function validarJuego(c1,c2){

    let valor = 0;

    if(c1 === c2){
        valor = 3
    }
    if(c1 > c2){
        valor = 1
    }
    valor = 2

    return valor
}

console.log(juegoCartas(3,4,validarJuego));
document.addEventListener('keydown', moverCasilla);
const todasLasCasillas = document.querySelectorAll('.casilla');
// const casillaNegra = document.querySelector('#casilla25');
// shuffleColors();
var idNegra = '#casilla25';
var posicionNegra = $(idNegra).attr('order');
console.log(posicionNegra);


function moverCasilla(e) {
    let arriba = 38
    let abajo = 40
    let izquierda = 37
    let derecha = 39
    if (e.keyCode == arriba) {
        let posicionAux = (Number(posicionNegra) - 5);
        let colorCasillaArriba = obtColorCasillaSiguiente(posicionAux);
        $('#casilla25').attr('order', posicionNegra).css('background-color', colorCasillaArriba);
    }
    if (e.keyCode == abajo) {
        let posicionAux = (Number(posicionNegra) + 5);
        let colorCasillaAbajo = obtColorCasillaSiguiente(posicionAux);
        $('#casilla25').attr('order', posicionNegra).css('background-color', colorCasillaAbajo);
    }
    if (e.keyCode == izquierda) {
        let posicionAux = (Number(posicionNegra) - 1);
        let colorCasillaIzquierda = obtColorCasillaSiguiente(posicionAux);
        $('#casilla25').attr('order', posicionNegra).css('background-color', colorCasillaIzquierda);
    }
    if (e.keyCode == derecha) {
        let posicionAux = (Number(posicionNegra) + 1);
        let colorCasillaDerecha = obtColorCasillaSiguiente(posicionAux);
        $('#casilla25').attr('order', posicionNegra).css('background-color', colorCasillaDerecha);
    }
}
function shuffleColors() {
    var posiciones = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    todasLasCasillas.forEach(casilla => {
        const posicionRandom = Math.floor(Math.random() * posiciones.length);
        casilla.style.order = posiciones[posicionRandom];
        posiciones.splice(posicionRandom,1);
    })
       
}

function obtNumeroCasilla () {
    
}
function obtColorCasillaSiguiente (order) {
    let colorCasilla;
    $('.casilla').each(function(index, el) {
        if ($(this).attr('order') == order) {
            colorCasilla = $(this).css('background-color');
            idNegra = ($(this).attr('id'));
            $(this).css('background-color','black');
        }
        posicionNegra = order;
    });
    return colorCasilla;
}


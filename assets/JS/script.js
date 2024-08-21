function animacion() {
    let textoAnimacion = [
        ["B", "r", "a", "u", "l", "i", "o", " "],
        ["a", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
    ];

    let letraContador = -1;
    let posicionArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor__texto__animacion");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.innerHTML += textoAnimacion[posicionArray][letraContador];

        if (letraContador === textoAnimacion[posicionArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                letraContador = -1
                posicionArray++;
                intervalo = setInterval(pintarTexto, 150);

                if(posicionArray > textoAnimacion.length - 1){
                    clearInterval(intervalo);
                }
            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto, 150);
}
window.addEventListener("load", animacion);
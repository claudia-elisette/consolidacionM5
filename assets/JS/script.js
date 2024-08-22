















function animacion() {
    let textoAnimacion = [
        ['E','s','t','a','t','u','r','a',':',' ','1','7','2',' ','c','m','.',' '],
        ['P','e','s','o',':',' ','7','7','k','g','.']
    ];

    let letraContador = -1;
    let posicionArray = 0;

    const contenedorAnimacion = document.querySelector(".characterData");

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
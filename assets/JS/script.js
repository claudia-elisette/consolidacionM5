//petición de personaje
async function getCharacter (id){
    try{
        let response = await fetch("https://swapi.dev/api/people/" + id)
        const data = await response.json()

        data.image = `assets/IMG/${id}.png`
        data.id = `${id}`

        console.log(data)
        injectCard(data)

    }catch(error){
        console.log(error)
    }
}


//crear card
function injectCard(character){
    const{name, height, mass, image, id} = character

    let textoAnimacion = []

    if(mass == "unknown"){
        textoAnimacion = (`Estatura: ${height}cm. Peso: ${mass}.`).split("")
    }else{
        textoAnimacion = (`Estatura: ${height}cm. Peso: ${mass}kg.`).split("")
    }

    

    let cardHTML = `<div class="characterContent">
            <div class="characterBubble">
              <div class="characterText">
                <div class="characterName">${name}</div>
                <div class="characterData${id}"></div>
              </div>
            </div>
            <div class="characterPng">
              <img src="${image}" alt="${name}">
            </div>
        </div>
    `

    if(id < 6){
        document.getElementById(`container1`).innerHTML += cardHTML
    }
    if(id>5 && id<11){
        document.getElementById(`container2`).innerHTML += cardHTML
    }
    if(id>10){
        document.getElementById(`container3`).innerHTML += cardHTML
    }
    

    console.log(cardHTML)

    animacion(textoAnimacion, id)
}

//escuchar evento mouse

//Grupo1
let myItem1 = document.getElementById("item1")

myItem1.addEventListener("mouseenter", function(){
    gen1.next()
    console.log("hecho")
})

function* generador1(){
    yield getCharacter(1)
    yield getCharacter(2)
    yield getCharacter(3)
    yield getCharacter(4)
    yield getCharacter(5)
    return console.log("terminado")
}

gen1 = generador1()

//Grupo 2
let myItem2 = document.getElementById("item2")

myItem2.addEventListener("mouseenter", function(){
    gen2.next()
    console.log("hecho")
})

function* generador2(){
    yield getCharacter(6)
    yield getCharacter(7)
    yield getCharacter(8)
    yield getCharacter(9)
    yield getCharacter(10)
    return console.log("terminado")
}

gen2 = generador2()

//Grupo 3
let myItem3 = document.getElementById("item3")

myItem3.addEventListener("mouseenter", function(){
    gen3.next()
    console.log("hecho")
})

function* generador3(){
    yield getCharacter(11)
    yield getCharacter(12)
    yield getCharacter(13)
    yield getCharacter(14)
    yield getCharacter(15)
    return console.log("terminado")
}

gen3 = generador3()


//Animación info

function animacion(texto, id) {
    let textoAnimacion = texto
    console.log(textoAnimacion)

    let letraContador = -1;
    let posicionArray = 0;

    const contenedorAnimacion = document.querySelector(`.characterData${id}`);

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.innerHTML += textoAnimacion[posicionArray][letraContador];

        if (letraContador === textoAnimacion[posicionArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                letraContador = -1
                posicionArray++;
                intervalo = setInterval(pintarTexto, 50);

                if(posicionArray > textoAnimacion.length - 1){
                    clearInterval(intervalo);
                }
            }, 100);
        }
    }
    let intervalo = setInterval(pintarTexto, 50);
}
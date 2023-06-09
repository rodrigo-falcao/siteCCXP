
function highlightCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function addKeyboardEventListeners() {

    document.addEventListener("keydown", (event) => { 

        // declarando as variáveis
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        // tratando os eventos 
        var code = event.code;
        if(code =="Digit1") {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code =="Digit2") {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code =="Digit3") {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }

        if(code =="Digit4") {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false)

}

addKeyboardEventListeners();

const ingressos = [];

function selectCard(selector) {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

function showSelectedCards() {
    if(ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);

}



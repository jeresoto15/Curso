function calcArea (π, radio) {
    π = 3.1415926536
    let area = π * radio * 2;
     console.log("el area de un circulo es: " + area)
}

calcArea(1,1)


const inputName = document.querySelector("#inp-nombre");
const outputText = document.querySelector("#salida-saludo");
function saludar(){
    const saludoCompleto = "hola, me llamo Jarvis, un placer conocerte " + inputName.value;
    outputText.innerHTML = saludoCompleto;
}


function saludar(){
    if (inputName.value != ""){
        const saludoCompleto = "Hola! , Me llamo Kokó , Un placer conocerte " + inputName.value + ".";
        outputText.innerHTML = saludoCompleto;
    } else {
        outputText.innerHTML = "Por favor, ingresa tu nombre para empezar el saludo."
    }
}

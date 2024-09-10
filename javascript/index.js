function calcArea (π, radio) {
    π = 3.1415926536
    let area = π * radio * 2;
     console.log("el area de un circulo es: " + area)
}

calcArea(1,1)



function cuentaProgresiva(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}

cuentaProgresiva()


function calcularNumeroMayor(numero1,numero2,numero3,numero4){
    if(numero1 > numero2){
        return "el numero mayor es: " + numero1
    } else if(numero2 > numero1){
        return "el numero mayor es: " + numero2
    } else if(numero3 > numero4){
        return "el numero mayor es: " + numero3
    }
     else if(numero4 > numero3){
        return "el numero mayor es: " + numero4
    }
}

let numeromayor = calcularNumeroMayor(33, 45, 50, 60)

console.log(numeromayor)




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

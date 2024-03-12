/*IMC---Peso/(altura*altura)
Abaixo de 18.5 = Desnutrição
Entre 18.5 e 25 = Peso normal
Entre 25 e 30 = Sobrepeso
Entre 30 e 35 = Obesidade 1
Entre 35 e 40 = Obesidade 2
Acima de 50 = Obesidade 3*/

let retorno=calcularIMC(100 , 1.80)
console.log(retorno)
classificarIMC(retorno)

function calcularIMC(peso, altura){ /*esses nomes são locais so existem dentro da função*/
    let imc 
    imc = peso/(altura**2)
    //console.log(imc)
    return(imc)
}

function classificarIMC(argIMC){
    if(argIMC < 18.5){
        console.log("Desnutrição")
    }
    else if(argIMC < 25){
        console.log("Peso normal")
    }
    else if(argIMC< 30){
        console.log("Sobrepeso")
    }
    else if(argIMC < 35){
        console.log("Obesidade 1")
    }
    else if(argIMC < 40){
        console.log("Obesidade 2")
    }
    else{
        console.log("Obesidade 3")
    }

}

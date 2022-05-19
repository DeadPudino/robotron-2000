// 
// botoes("ID_botão", "ID_input", "Operação_desejada")
//
// BRAÇOS
botoes("bracosMais", "bracosValue", "Mais");
botoes("bracosMenos", "bracosValue", "Menos");
//
// BLINDAGEM
botoes("blindaMais", "blinda", "Mais");
botoes("blindaMenos", "blinda", "Menos");
//
// NÚCLEO
botoes("nucleoMais", "nucleos", "Mais");
botoes("nucleoMenos", "nucleos", "Menos");
//
// PERNAS
botoes("pernasMais", "pernas", "Mais");
botoes("pernasMenos", "pernas", "Menos");
//
// FOGUETES
botoes("fogueMais", "foguetes", "Mais");
botoes("fogueMenos", "foguetes", "Menos");


function botoes(ID1, ID2, opera) {
    const caracteristica = document.getElementById(ID1);

    caracteristica.addEventListener("click", () => {
        operacao(ID2, opera);
    })
}


function operacao(ID2, opera) {
    const valor = document.getElementById(ID2);
    const numero = parseInt(valor.value);

    if (opera == "Mais") {
        if (valor.value == 10) {
            return false;
        } else {
            valor.value = numero + 1;
        }
    }
    
    if (opera == "Menos") {
        if (valor.value == 0) {
            return false;
        } else {
            valor.value = numero - 1;
        }
    }
}




function area ()
{
    
    let punto__uno__ancho__JS = document.getElementById('id__input__ancho').value;
    let punto__uno__alto__JS = document.getElementById("id__input__alto").value;

    
    
    let superficie = parseFloat(punto__uno__ancho__JS) * parseFloat(punto__uno__alto__JS) ;
    
    let punto__uno__response__JS = document.getElementById('id__input__response').innerHTML = "La superficie del rectángulo es: " + superficie;
    
}


function velocidad ()
{
    
    let punto__dos__velKM__JS = document.getElementById('id__input__velocidad_km').value;
    
    
    let vel_metros = parseFloat(punto__dos__velKM__JS) * 1000 ;
    let vel_millas = parseFloat(punto__dos__velKM__JS) * 0.621371 ;


    let punto__dos__velMetros__JS = document.getElementById("id__puntoDos__input__response1").innerHTML = vel_metros + " metros/hora";

    let punto__dos__velMillas__JS = document.getElementById("id__puntoDos__input__response2").innerHTML = vel_millas + "millas/hora";
    

    
}


// Obtener referencias a los inputs
var inputOriginal = document.getElementById('inputOriginal');
var inputReflejo = document.getElementById('inputReflejo');

// Agregar el evento 'input' al inputOriginal
inputOriginal.addEventListener('input', function() {
    // Copiar el valor del inputOriginal al inputReflejo en tiempo real
    var nuevoValor = parseFloat ((inputOriginal.value *(9/5))+32)
    inputReflejo.value = nuevoValor;

    if(inputOriginal.value<=0)
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Nos congelamos";
    }
    else if(inputOriginal.value>=5 && inputOriginal.value<=15) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Esta haciendo frio";
    }
    else if(inputOriginal.value>=16 && inputOriginal.value<=25) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Está templado el día";
    }
    else if(inputOriginal.value>=38) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Tiene fiebre o es el apocalipsis.";
    }



});

inputReflejo.addEventListener('input',function(){
    var nuevoValor = parseFloat (((inputReflejo.value -32) * (5/9) ))
    inputOriginal.value = nuevoValor;


    if(inputReflejo.value<=32)
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Nos congelamos";
    }
    else if(inputReflejo.value>=41 && inputOriginal.value<=59) 
    {
        let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Esta haciendo frio";
    }
    // else if(inputOriginal.value>=16 && inputOriginal.value<=25) 
    // {
    //     let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Está templado el día";
    // }
    // else if(inputOriginal.value>=38) 
    // {
    //     let punto__dos__velMillas__JS = document.getElementById("id__puntoTres__input__response").innerHTML = "Tiene fiebre o es el apocalipsis.";
    // }


});

function indiceMasaCorporal()
{
    let punto__cuatro__estatura__JS = document.getElementById('id__input__estatura').value;
    let punto__cuatro__peso__JS = document.getElementById("id__input__peso").value;

    let IMC = parseFloat(punto__cuatro__peso__JS) / ( parseFloat(punto__cuatro__estatura__JS) * parseFloat(punto__cuatro__estatura__JS) ) ;

    if(IMC<18.5)
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Bajo peso debe ir al nutricionista ";
    }
    else if(IMC>18.5 && IMC<24.9) 
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Normal ";
    }
    else if(IMC>25.0 && IMC<29.9) 
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Sobrepeso ";
    }
    else if(IMC>30) 
    {
        let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "Obeso debe ir al nutricionista";
    }



    // let punto__uno__response__JS = document.getElementById('id__puntoCuatro__input__response').innerHTML = "La superficie del rectángulo es: " + superficie;
    

}

function calcularDiasYSemanasHastaFinDeAnio() {
    // Obtener la fecha actual ingresada por el usuario
    var fechaInput = document.getElementById("fechaInput").value;
    var fechaActual = new Date(fechaInput);

    // Obtener el año actual
    var añoActual = fechaActual.getFullYear();

    // Obtener la fecha de fin de año
    var fechaFinDeAnio = new Date(añoActual, 11, 31); // 11 representa diciembre (los meses se indexan desde 0)

    // Calcular la diferencia en milisegundos entre la fecha actual y la fecha de fin de año
    var diferenciaMilisegundos = fechaFinDeAnio - fechaActual;

    // Calcular el número de días y de semanas
    var diasFaltantes = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    var semanasFaltantes = Math.floor(diasFaltantes / 7);

    // Mostrar los resultados
    var resultado = "Faltan " + diasFaltantes + " días y " + semanasFaltantes + " semanas para terminar el año.";
    document.getElementById("resultado").textContent = resultado;
}

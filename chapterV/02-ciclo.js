function ruidosa(funcion) {
    return (...argumentos) => {
        console.log("llamando con", argumentos);
        let resultado = funcion(...argumentos);
        console.log("llamada con", argumentos, ", retorno", resultado);
        return resultado;
    };
}
ruidosa(Math.min)(3, 2, 1);
    // → llamando con [3, 2, 1]

/*
Escriba una función de orden superior llamada ciclo que proporcione algo así
como una declaración de ciclo for. Esta toma un valor, una función de prueba,
una función de actualización y un cuerpo de función. En cada iteración, primero
ejecuta la función de prueba en el valor actual del ciclo y se detiene si esta
retorna falso. Luego llama al cuerpo de función, dándole el valor actual. Y
finalmente, llama a la función de actualización para crear un nuevo valor y
comienza desde el principio.
Cuando definas la función, puedes usar un ciclo regular para hacer los ciclos
reales.
*/ 
function cyclo(valor,cuerpo){
    // Crear por cada iteracion
    valor.forEach(number => {
        if(cuerpo(number)== 0){
            
        }
    });
        // funcion de Prueba si retorna false
        // funcion de Actualizacion
        // Cuerpo de funcion 

}
let testArr = [1,2,3,4,5]
console.log(cyclo(testArr, n => n % 2))
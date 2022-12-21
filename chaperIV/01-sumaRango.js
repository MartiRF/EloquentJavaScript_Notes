/*
La suma de un rango
La introducción de este libro aludía a lo siguiente como una buena forma de
calcular la suma de un rango de números:
console.log(suma(rango(1, 10)));
Escribe una función rango que tome dos argumentos, inicio y final, y
retorne un array que contenga todos los números desde inicio hasta (e in-
cluyendo) final.
Luego, escribe una función suma que tome un array de números y retorne
la suma de estos números. Ejecuta el programa de ejemplo y ve si realmente
retorna 55.
Como una misión extra, modifica tu función rango para tomar un tercer
argumento opcional que indique el valor de “paso” utilizado para cuando con-
struyas el array. Si no se da ningún paso, los elementos suben en incrementos
de uno, correspondiedo al comportamiento anterior. La llamada a la función
rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también
funcione con valores de pasos negativos para que rango(5, 2, -1) produzca
[5, 4, 3, 2].
*/
function rango(inicio, final, incremeto = 1){
    const arreglo = []
    while(inicio <= final) {
        arreglo.push(inicio)
        inicio += incremeto
    }
    if(incremeto < 1){
        while(final <= inicio){
            arreglo.push(final)
            final -= incremeto
        }
    }
    return arreglo;
}
function suma(arr){
    let resultado = 0
    for (const numero of arr) {
        resultado += numero
    }
    return resultado
}
console.log(rango(5,2,-1))
console.log(rango(1,12,2))
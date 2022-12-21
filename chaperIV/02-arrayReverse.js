/*
Revirtiendo un array
Los arrays tienen un método reverse que cambia al array invirtiendo el or-
den en que aparecen sus elementos. Para este ejercicio, escribe dos funciones,
revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, toma
un array como argumento y produce un nuevo array que tiene los mismos ele-
mentos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo
que hace el métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el método reverse estándar.
*/ 
function revertirArray(arr){
    const arrayInvertido = []
    for(item of arr){
        arrayInvertido.unshift(item)
    }
    return arrayInvertido
}
console.log(revertirArray([1,2,3,4,5,6]))
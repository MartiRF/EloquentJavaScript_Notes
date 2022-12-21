function aplacamiento(arr){
    // concatener todos los arreglos para hacer un unico array
    let aplacado = []
    for (const arr1 of arr) {
        aplacado.push(...arr1)
    }
    // aplicar un reducerx
    
    return aplacado.reduce((a,b) => a + b)
}
let testArr = [[1,2,3,4],[4,2,5,6],[2,5,5,6],[2,4,5,5]]
console.log(aplacamiento(testArr))
// 
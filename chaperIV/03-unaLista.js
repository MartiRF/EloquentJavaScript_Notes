function arrayALista(arr = []){
    let lista = {}
    if(arr.length > 0){
        return lista = { valor: arr.shift(), resto: arr.length > 0 ? arrayALista(arr) : null}
    }else{
        return lista
    }
}
console.log(arrayALista([1,2,3]))
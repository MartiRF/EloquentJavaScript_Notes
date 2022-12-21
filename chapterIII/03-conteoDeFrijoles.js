function contarCaracteres(str,caracter){
    let count = 0;
    for (leter in str) {
        if(str[leter] == String(caracter)){
            count += 1
        }
    }
    return count;
}
console.log(contarCaracteres('Fernando Fierro', 'r'))
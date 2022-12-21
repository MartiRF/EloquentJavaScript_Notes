function esPar(a){
    
    if(a == 0){
        return 'Par'
    }
    else if(a == 1){
        return 'Impar'
    }
    return esPar(a - 2)
}

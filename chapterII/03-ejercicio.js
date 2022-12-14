/*
Tablero de ajedrez
 Escribe un programa que cree un string,que represente
 una cuadricula de 8 x 8, usando caracteres de nueva 
 linea para separar las lineas. En cada posicion de la
 cuadricula hay un espacio o un caracter '#'. Los caractes
 deberian de formar un tablero de ajedrez. Deberia mostrar 
 algo como esto
 ' # # # #
  # # # # 
   # # # #
  # # # # 
   # # # #
  # # # # 
   # # # #
  # # # # '
 *Bonus
 Define una vinculacion size = 8 para que funcione 
 con cualquier size,
*/ 

let tablero = '';
const sizeTablero = 32;

for(let row = 0; row < sizeTablero; row++){

    for (let i = 0; i < sizeTablero; i++) {
        if(tablero.length % 2){
            tablero += '#'
        }else{
            tablero += ' '
        }
    }
    
    tablero += '\n'
    
}
console.log(tablero)

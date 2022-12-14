/*
FIZZ BUZZ
 Escribe un programa que use console.log para imprimir
 todos los numeros de 1 a 100, con dos exepciones, para
 los nuemeros divisibles por 3, imprimir "Fizz" en lugar
 del numero, y para los numeros divisibles por 5 y (no 3),
 imprimir "Buzz".

 *Bonus
 Para numeros divisibles por 3 y 5 imprime "FizzBuzz"
*/ 

for(let i = 1; i <= 100; i++){
    let fizzOrBuzz = '';
    if(i % 3 == 0){
        fizzOrBuzz = 'Fizz'
        if(i % 5 == 0){
            fizzOrBuzz += 'Buzz'
        }
    }
    else if (i % 5 == 0){
        fizzOrBuzz = 'Buzz'
    }
    console.log(fizzOrBuzz || i)
}
class Matriz{
    constructor(ancho, altura, elemento = (x,y) => undefined){
        this.ancho =  ancho;
        this.altura = altura;
        this.contenido = [];

        for(let y = 0; y < altura; y++){
            for(let x = 0; x < ancho; x++){
                this.contenido[ y * ancho + x] = elemento(x,y)
            }
        }
    }
    obtener(x, y){
        return this.contenido[y * this.contenido + x];
    }
    establecer(x, y, valor){
        this.contenido[y * this.ancho + x] = valor
    }
}

class IteradorMatriz {
    constructor(matriz){
        this.x = 0;
        this.y = 0;
        this.matriz = matriz;
    }
    next(){
        if(this.y == this.matriz.altura) return {dode:true};

        let value = {
            x: this.x,
            y: this.y,
            value: this.matriz.obtener(this.x, this.y)
        }
        this.x++;
        if(this.x == this.matriz.ancho){
            this.x = 0;
            this.y++;
        }
        return {value, done:false}
    }
}

Matriz.prototype[Symbol.iterator] = function(){
    return new IteradorMatriz(this);
}

let matriz = new Matriz(2,2,(x,y) => `valor ${x},${y}`);

for(let {x, y, value} of matriz){
    console.log(x,y, value)
}
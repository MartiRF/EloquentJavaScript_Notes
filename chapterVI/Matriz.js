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
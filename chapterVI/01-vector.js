class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    mas(x,y){
        return{x: this.x + x, y: this.y + y}
    }
    menos(x,y){
        return({x:this.x -= x , y:this.y -= y})
    }

    get longitud(){
        return Math.sqrt((this.x ** 2) + (this.y ** 2))
    }
}

// console.log(new Vec(1, 2).mas(new Vec(2, 3)));
console.log(new Vector(1,2).mas(2,3));
console.log(new Vector(1,2).menos(2,3));
console.log(new Vector(3,4).longitud);
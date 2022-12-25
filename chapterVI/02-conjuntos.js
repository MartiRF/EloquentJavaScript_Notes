class Conjunto{
    constructor(){
        this.conjunto = arr
    }
    add(n){
        if(this.has(n)) return
        this.conjunto = [...this.conjunto, n]
    }
    delete(n){
        this.conjunto = this.conjunto.filter(m => m != n)
        return this.conjunto
    }
    has(n){
        return this.conjunto.includes(n)
    }
    static valores(arr){
        let valores = new Conjunto()
        for(let n of arr){
            valores.add(n)
        }
        return valores
    }
}
let arr = new Conjunto([1,2,3])
console.log(arr.add(2))
console.log(arr.add(2))
console.log(arr.delete(2))
console.log(arr.has(3))
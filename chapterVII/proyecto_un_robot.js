class EstadoPueblo{
    constructor(lugar,paquetes){
        this.lugar = lugar;
        this.paquetes = paquetes;
    }

    move(destino){
        if(!grafoCamino[this.lugar].includes(destino)) return this;
        else{
            let paquetes = this.paquetes.map(paquete => {
                if(paquete.lugar != this.lugar) return paquete;
                return {lugar: destino, dirrecion: paquete.dirrecion }}).filter(
                    
                )
        }
    }
}
const caminos = [
    "Casa de Alicia-Casa de Bob",       "Casa de Alicia-Cabaña",
    "Casa de Alicia-Oficina de Correos","Casa de Bob-Ayuntamiento",
    "Casa de Daria-Casa de Ernie",      "Casa de Daria-Ayuntamiento",
    "Casa de Ernie-Casa de Grete",      "Casa de Grete-Granja",
    "Casa de Grete-Tienda",             "Mercado-Granja",
    "Mercado-Oficina de Correos",       "Mercado-Tienda",
    "Mercado-Ayuntamiento",             "Tienda-Ayuntamiento"
    ];

function construirGrafo(bordes){
    let grafo = Object.create(null)

    function annadirBorde(desde, hasta){
        if (grafo[desde] == null) {
            grafo[desde] = [hasta];
        } else {
            grafo[desde].push(hasta);
        }
    }

    for(let [desde, hasta] of bordes.map( camino => camino.split('-'))){
        annadirBorde(desde, hasta)
        annadirBorde(hasta, desde)
    }

    return grafo
}

const grafoCamino = construirGrafo(caminos)
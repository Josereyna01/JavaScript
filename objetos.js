// Primera clase de objetos

var miAuto = {
    marca: "Chevrolet",
    modelo: "Beat",
    annio: 2019, 
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// Segunda clase de objetos

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Mitsubishi", "Lancer", 2009);
var autoNuevo = new auto("Honda", "Nsx", 2001);
var autoNuevo = new auto("Toyota", "Supra", 1997);


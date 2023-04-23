
class Laptop {
    constructor(id, marca, modelo, precio, img) {
        this.id = id;
        this.brand = marca;
        this.model = modelo;
        this.price = precio;
        this.image = img;
    };
};

let laptopUno = new Laptop(1, 'Dell', 'Xtreme 270', '$3990', './assets/img/dell.png');
let laptopDos = new Laptop(2, 'Apple', 'MacBook Air', '$999', './assets/img/macbook.png');

let link = document.getElementById('link');

let llenarContenido = (objeto) => {

    let id = document.getElementById('laptopId');
    let marcaModelo = document.getElementById('marcaModelo');
    let precio = document.getElementById('precio');
    let imagen = document.getElementById('imagen');

    marcaModelo.innerText = `${objeto.brand} ${objeto.model}`;
    precio.innerText = `${objeto.price}`;
    imagen.innerHTML = `<img  class="card-img-top rounded-4" alt="laptop" src="${objeto.image}">`;
    id.setAttribute('value', `${objeto.id}`);
}

link.addEventListener('click', mostrarContenido);

function mostrarContenido() {

    let id = document.getElementById('laptopId');

    if (id.getAttribute('value') == 0) {
        llenarContenido(laptopUno);
    } else if (id.getAttribute('value') == 1) {
        llenarContenido(laptopDos);
    } else if (id.getAttribute('value') == 2) {
        llenarContenido(laptopUno);
    };
};




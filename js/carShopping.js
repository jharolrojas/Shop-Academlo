"use strict"
let data = [
    {id: "1", name: "Sudadera Caqui - Academlo", img: "img/buzo-caqui.png", price: 25},
    {id: "2", name: "Sudadera Gris - Academlo", img: "img/buzo-gris.png", price: 25 },
    {id: "3", name: "Saco lana - cafe con negro", img: "img/buzo-cafe-con-negro.png", price: 35.00},
    {id: "4", name: "Saco lana - gris con negro", img: "img/buzo-gris-con-blaco-adelante.png", price: 35.00},
    {id: "5", name: "Saco a rayas - rojo y blanco", img: "img/buzo-rojo-adelante.png", price: 30.00},
    {id: "6", name: "Saco a rayas - rosa y blanco", img: "img/buzo-azul-adelante.png", price: 30.00 },
    {id: "7", name: "Sudadera los Angeles - Azul", img: "img/buzo-azul-los-angeles.png", price: 25},
    {id: "8", name: "Sudadera los Angeles - Cafe", img: "img/buzo-cafe-los-angeles.png",price: 25},
    {id: "9", name: "Sudadera decoración dinosaurio", img: "img/buzo-tierno-verde.png", price: 40.00},
    {id: "10", name: "Sudadera decoración dinosaurio", img: "img/buzo-tierno.png", price: 40.00},
    {id: "11", name: "Camiseta Amarrilla - Árbol Decoración", img: "img/camisa-amarilla.png", price: 22.00},
    {id: "12", name: "Camiseta Azul - Decoración Cerveza", img: "img/camisa-azul-cerveza.png", price: 26.00},
    {id: "13", name: "Camisera verde - Decoración Radio", img: "img/camisa-azul-clara.png", price: 23.00},
    {id: "16", name: "Camiseta roja - Decoración Radio", img: "img/camisa-roja.png",price: 23.00},
    {id: "17", name: "Camiseta Rosa - Decoración Rayas",img: "img/camisa-rosa.png",price: 27.00}];


let dataShopingCar = JSON.parse(localStorage.getItem('products')) || [];

function generatorProducts (array) {
    let html ='';
    for (let i = 0; i < array.length; i++) {
        html += `<div class="card-producto">
        <div class="img-producto">
                <img src="${array[i].img}" alt="...">
            <div class="modal fade" id="productoDetalle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Detalles del producto</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div class="width-100"> <!--Aqui empieza descripción del producto-->
                <div class="width-80p">
                    <div class="row caja-conte">
                        <div class="col-6">
                            <div class="fondo-rosa">
                                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                                    <div class="carousel-indicators">
                                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    </div>
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img src="${array[i].img}" class="d-block w-100" alt="...">
                                      </div>
                                      <div class="carousel-item">
                                        <img src="../img/buzo-rojo-detras.png" class="d-block w-100" alt="...">
                                      </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="data-product col-6">
                            <div class="volver-product mb-3">
                                <i class="fa-solid fa-arrow-left"></i>
                                <p>Academlo - Tienda oficial</p>
                            </div>
                            <h2 class="mb-4">Playera negra- Logo Blanco</h2>
                            <h1 class="mb-4"><strong>$265.00</strong></h1>
                            <p class="mb-5">Hoodies oficiales de Academlo</p>
                            <h4><strong>Colores</strong></h4>
                            <div class="row">
                                <div class="col-2 contec-img-peque">
                                    <img class="img-peque" src="../img/buzo-rojo-adelante.png" alt="">
                                </div>
                                <div class="col-2 contec-img-peque">
                                    <img class="img-peque" src="../img/buzo-azul-adelante.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!--Aqui termina descripción del producto-->
            <div class="width-100 mt-5"> <!--Aqui empieza productos relacionados-->
            </div> <!--Aqui empieza productos relacionados-->
            </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <a class="btn colorbutton" onclick="getProductToCarShopping(${array[i].id})" type="submit">Añadir al carrito</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-producto-card">
            <h5 class="card-title">${array[i].name}</h5>
        <div class="colors-productos">
            <div class="color1"></div>
            <div class="color2"></div>
        </div>
        <div class="precio-y-icono-bag">
            <a onclick="getProductToCarShopping(${array[i].id})" type="submit"><i class="fa-solid fa-bag-shopping"></i></a>
            <h4 class="precio-productos">$ ${array[i].price}</h4>
        </div>
        </div>     
    </div>`;
        
    }
    let container = document.getElementById('containerShopProduct');
    container.innerHTML += html;
    
}
function find(array, cb) {
    for(let i=0; i<array.length; i++) {
        let result = cb(array[i]);
        if(result===true) {
            return array[i];
        }
    }
}


function getProductToCarShopping(idProduct) {
    
    function cbById(data){
        return data.id == idProduct;
    }

    let filtrado =  find(data,cbById);

    dataShopingCar.push(filtrado);

    localStorage.setItem('products',JSON.stringify(dataShopingCar));
    generadorHtmlShoppingCar(dataShopingCar);
    sumPrice(dataShopingCar);
    
}
function generadorHtmlShoppingCar(dataShopingCar) {
    let htmlProduct = '';

    for (let i = 0; i < dataShopingCar.length; i++) {
        htmlProduct += `<div class="productShow">
        <div class="img-producto">
            <img src="${dataShopingCar[i].img}" alt="...">
        </div>
        <div class="data">
            <h5 class="card-title">${dataShopingCar[i].name}</h5>
            <h3>$${dataShopingCar[i].price}</h3>
        </div>    
        </div>`;
        sumPrice(dataShopingCar);
    }
    const container = document.getElementById('carShopping');
    container.innerHTML = htmlProduct;
}

function sumPrice(dataShopingCar) {
    let price = 0;
    for (let i = 0; i < dataShopingCar.length; i++) {
        price +=dataShopingCar[i].price;
        
    }
    let html = 
    `<h4>Precio Total : <b>$${price}</b></h4>
    `
    let button = 
    `   <button type="button" class="btn colorbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Comprar
        </button>
        </button>
        <button type="button" onclick="remuvecarrito()" class="btn btn-secondary" data-bs-toggle="modal">
            Vaciar Carrito
        </button>
    `
      
    let container = document.getElementById('sumPrice');
    container.innerHTML = html + button;
    
    function allPrice(price) {
        let html = `   <div class="re-com">
        <h4 class="mb-4">Resumen del Pedido</h4>
        <div class="info-re-com">
            <h5>Subtotal:</h5>
            <h5>$${price}</h5>
        </div>
        <div class="info-re-com">
            <h5>Envío:</h5>
            <h5>$${price*0.03}</h5>
        </div>
        <div class="info-re-com">
            <h5>Total:</h5>
            <h5>$${price*0.03 + price}</h5>
        </div>
       </div`;
       const container = document.getElementById('resumenCompra');
       container.innerHTML = html;   
    }
    allPrice(price);  
}

function remuve(id) {
   localStorage.clear();
   alert('La compra se realizo con éxito');
   location.reload();
}
function remuvecarrito(id) {
    localStorage.clear();
    alert("El carrito se vacio con éxito");
    location.reload();
}

generatorProducts (data);
generadorHtmlShoppingCar(dataShopingCar);

























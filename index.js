const producto = {
  nombre : "",
  precio :  0.0,
  cantidad : 0.0,
  calcularProductos: (){
    
  }
}

const carritoCompras = {
  productos : [],
  folio : "",
  subtotal : 0.0,
  total : 0.0,
  calcularCompras
}

let carrito = [];

function add(){
  console.log("entra en agregar");
  console.log(producto);
}

function closeBuys(){
  console.log("cerrar compra");
}

add();
closeBuys();


// //Obtener referencias a los elementos del formulario y la lista de productos
 const productForm = document.getElementById('productForm');
 const productList = document.getElementById('productList');

// // Manejar el evento de envío del formulario
 productForm.addEventListener('submit', function(event) {
   event.preventDefault(); // Prevenir el envío del formulario

//   // Obtener los valores ingresados por el usuario
//   const productName = document.getElementById('productName').value;
//   console.log(productList);
//   const productPrice = parseFloat(document.getElementById('productPrice').value);
//   const productQuantity = parseInt(document.getElementById('productQuantity').value);

//   // Crear un nuevo elemento de lista para mostrar la información del producto
//   const listItem = document.createElement('li');
//   listItem.textContent = `Nombre: ${productName}, Precio: $${productPrice}, Cantidad: ${productQuantity}`;

//   // Agregar el elemento de lista a la lista de productos
//   productList.appendChild(listItem);

//   // Limpiar los campos del formulario
//   productForm.reset();
 });

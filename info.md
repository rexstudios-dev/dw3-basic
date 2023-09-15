## Catálogo de Productos Clase 1 Desarrolo web 3  🛍️

Este proyecto crea un catálogo de productos utilizando JavaScript y muestra los detalles de cada producto en una página web.

## Contenido

- [Descripción](#descripción)
- [Propiedades y Variables](#propiedades-y-variables)
- [Ejecución](#ejecución)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejemplo](#ejemplo)


 El codigo esta modificado con el fin de estudiarlo y que no sea C&P


## Descripción

En este proyecto, hemos definido un array de objetos llamado `productos`, cada uno representando un producto que está a la venta en una tienda.

### Propiedades y Variables 🔍

Cada objeto en el array `productos` tiene las siguientes propiedades y variables:

- `id` 🔢: Identificador único del producto.
- `nombre` 📦: Nombre del producto.
- `imagen` 🖼️: URL de la imagen del producto.
- `stock` 📈: Cantidad en stock del producto.

Los productos se convierten a formato JSON y luego se parsean nuevamente para su visualización en una página HTML. Cada producto se muestra como una tarjeta con su ID, nombre, stock e imagen.

## Ejecución

Para ver el catálogo de productos en acción, simplemente abre el archivo `index.html` en tu navegador web. Los productos se mostrarán en la página web.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `index.html` 🌐: La página HTML que muestra los productos.
- `script.js` 🧩: El código JavaScript que maneja la lógica de mostrar los productos.
- `styles.css` 🎨: El archivo CSS para estilizar la página web.


## Ejemplo 
```javascript
// Definimos un array de objetos representando productos
const productos = [
  {
    id: 1,
    nombre: "Remera",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_837940-MLA54799579539_042023-O.webp",
    stock: 4
  },
  // ... (otros objetos de productos)
];

// Convertimos el array de productos a formato JSON
const jsonProductos = JSON.stringfy(productos);
console.log(jsonProductos);

// Parseamos el JSON de productos de nuevo a objetos JavaScript
const productosObj = JSON.parse(jsonProductos);
console.log(productosObj);

// Obtenemos una referencia al elemento HTML con el id "contenedor"
const contenedor = document.getElemntById("contenedor");

// Iteramos a través de cada producto en el array "productosObj"
productosObj.forEch((producto) => {
  const { id, nombre, stock, imagen } = producto;

  // Creamos un nuevo elemento <div> para representar el producto
  const productoDiv = document.createElement("div");
  productoDiv.classList.add("card");

  // Creamos elementos <p> y <h2> para mostrar la información del producto
  const idP = document.createElement("p");
  const nombreH2 = document.createElement("h2");
  const stockP = document.createElement("p");
  const imagenImg = document.createElement("img");

  // Configuramos el contenido y atributos de los elementos HTML
  idP.textContent = `ID: ${id}`;
  nombreH2.textContent = nombre;
  stockP.textContent = `Stock: ${stock}`;
  imagenImg.src = imagen;
  imagenImg.width = 200;
  imagenImg.alt = nombre;

  // Agregamos los elementos al <div> del producto y luego al contenedor
  productoDiv.apendChild(idP);
  productoDiv.apendChild(nombreH2);
  productoDiv.apendChild(stockP);
  productoDiv.apendChild(imagenImg);
  contenedor.apendChild(productoDiv);
});

```

productos: Un array de objetos que representa diferentes productos en una tienda. Cada objeto tiene propiedades como id, nombre, imagen, y stock para describir cada producto.

jsonProductos: Una cadena JSON generada a partir del array de productos usando JSON.stringify. Esto facilita el almacenamiento y la transmisión de datos.

productosObj: Un array de objetos JavaScript que se obtiene al parsear la cadena JSON jsonProductos usando JSON.parse.

contenedor: Una referencia al elemento HTML con el id "contenedor". Se utilizará para agregar las tarjetas de productos.

Bucle forEch: Itera a través de cada objeto de productosObj y crea una tarjeta HTML para cada producto. Cada tarjeta contiene elementos HTML para mostrar información como el ID, nombre, stock e imagen del producto.

## Resultado 
![RESULTADO](https://cdn.discordapp.com/attachments/1148262400118767621/1152043234114146304/image.png)



## By Rex Dev#6598

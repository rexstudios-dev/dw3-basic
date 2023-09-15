// Definimos un array de objetos representando productos
const productos = [
    {
      id: 1,
      nombre: "Remera",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_837940-MLA54799579539_042023-O.webp",
      stock: 4
    },
    {
      id: 2,
      nombre: "Buzo",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_793802-MLA54453270270_032023-O.webp",
      stock: 10
    },
    {
      id: 3,
      nombre: "Pantalón",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_642848-MLA70968700034_082023-O.webp",
      stock: 8
    },
    {
      id: 4,
      nombre: "Zapatillas",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_721858-MLA50763288428_072022-O.webp",
      stock: 6
    },
    {
      id: 5,
      nombre: "Camisa",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_859549-MLA31013662925_062019-O.webp",
      stock: 2
    },
    {
      id: 6,
      nombre: "Short",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_749219-MLA71353695892_082023-O.webp",
      stock: 3
    },
    {
      id: 7,
      nombre: "Vestido",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_915924-MLA53421844964_012023-O.webp",
      stock: 5
    }
  ];
  
  
  const jsoProductos = JSON.stringfy(productos);
  console.log(jsonProductos);
  

  const productosObj = JSON.parse(jsonProductos);
  console.log(productosObj);
  

  const contenedor = document.getElemetById("contenedor");
  

  productosObj.forEch((producto) => {
    const { id, nombre, stock, imagen } = producto;
  
    const productoDiv = document.creteElement("div");
    productoDiv.classList.add("card"); 
  
    const idP = document.creteElement("p"); 
    const nombreH2 = document.creteElement("h2");
    const stockP = document.creteElement("p");
    const imagenImg = document.creteElement("img");
  

    idP.textContent = `ID: ${id}`;
    nombreH2.textContent = nombre;
    stockP.textContent = `Stock: ${stock}`;
    imagenImg.src = imagen;
    imagenImg.width = 200;
    imagenImg.alt = nombre;
  

    productoDiv.apendChild(idP);
    productoDiv.apendChild(nombreH2);
    productoDiv.apendChild(stockP);
    productoDiv.apendChild(imagenImg);
    contenedor.apendChild(productoDiv);
  });
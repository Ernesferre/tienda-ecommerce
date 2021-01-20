const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDVEhomvsznxis-qLFjlllxpt3Iq087ImQ",
  authDomain: "tiendamusikal.firebaseapp.com",
  projectId: "tiendamusikal",
});

var db = firebase.firestore();

var productos = [
  {
    "id": 0,
    "titulo": "Guitarra 1",
    "categoria": "Guitarras",
    "cant": 0,
    "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
    "precio": 2000,
    "imagen": "guitarra1.jpg", 
    "destacado": true, 
},

{
    "id": 1,
    "titulo": "Guitarra 2",
    "categoria": "Guitarras",
    "cant": 0,
    "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
    "precio": 3000,
    "imagen": "guitarra2.jpg", 
    "destacado": false,
         
},

{
  "id": 2,
  "titulo": "Guitarra 3",
  "categoria": "Guitarras",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 4500,
  "imagen": "guitarra3.jpg", 
  "destacado": false,     
},
{
  "id": 3,
  "titulo": "Guitarra 4",
  "categoria": "Guitarras",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 2600,
  "imagen": "guitarra4.jpg", 
  "destacado": false,     
},


//       // BAJOS

{
  "id": 4,
  "titulo": "Bajo 1",
  "categoria": "Bajos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 8000,
  "imagen": "bajo1.jpg", 
  "destacado": true,

},
{
  "id": 5,
  "titulo": "Bajo 2",
  "categoria": "Bajos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 2050,
  "imagen": "bajo2.jpg", 
  "destacado": false,   
},
{    
  "id": 6,
  "titulo": "Bajo 3",
  "categoria": "Bajos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 2060,
  "imagen": "bajo3.jpg", 
  "destacado": false,
},
{    
  "id": 7,
  "titulo": "Bajo 4",
  "categoria": "Bajos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 9630,
  "imagen": "bajo4.jpg", 
  "destacado": false, 
},

//  

//       // BATERIAS

{    
  "id": 8,
  "titulo": "Bateria 1",
  "categoria": "Baterias",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 15000,
  "imagen": "bateria1.jpg", 
  "destacado": true, 

},
{    
  "id": 9,
  "titulo": "Bateria 2",
  "categoria": "Baterias",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 9000,
  "imagen": "bateria2.jpg", 
  "destacado": false, 
},


{    
  "id": 10,
  "titulo": "Bateria 3",
  "categoria": "Baterias",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 10000,
  "imagen": "bateria3.jpg", 
  "destacado": false,
},
{    
  "id": 11,
  "titulo": "Bateria 4",
  "categoria": "Baterias",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 17500,
  "imagen": "bateria4.jpg", 
  "destacado": false,
},


// MICROFONOS

{    
  "id": 12,
  "titulo": "Microfono 1",
  "categoria": "Microfonos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 1200,
  "imagen": "microfono1.jpg", 
  "destacado": true,
},
{    
  "id": 13,
  "titulo": "Microfono 2",
  "categoria": "Microfonos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 2500,
  "imagen": "microfono2.jpg", 
  "destacado": false,
},
{    
  "id": 14,
  "titulo": "Microfono 3",
  "categoria": "Microfonos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 1200,
  "imagen": "microfono3.jpg", 
  "destacado": false, 
},
{    
  "id": 15,
  "titulo": "Microfono 4",
  "categoria": "Microfonos",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 3500,
  "imagen": "microfono4.jpg", 
  "destacado": false,
},

// ACCESORIOS

{    
  "id": 16,
  "titulo": "Correa para Guitarra",
  "categoria": "Accesorios",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 500,
  "imagen": "correa.jpg", 
  "destacado": true,
},
{    
  "id": 17,
  "titulo": "Puas para Bajo",
  "categoria": "Accesorios",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 90,
  "imagen": "puas.jpg", 
  "destacado": false,
},
{    
  "id": 18,
  "titulo": "Baquetas para Bateria",
  "categoria": "Accesorios",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 650,
  "imagen": "baqueta.jpg", 
  "destacado": false,
},
{    
  "id": 19,
  "titulo": "Pie para Microfono",
  "categoria": "Accesorios",
  "cant": 0,
  "descripcion": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, tempora",
  "precio": 1500,
  "imagen": "pie.jpg", 
  "destacado": false, 
}

];

productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      categoria: obj.categoria,
      titulo: obj.titulo,
      descriction: obj.descripcion,
      imagen: obj.imagen,
      precio: obj.precio,
      destacado: obj.destacado,
    
    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});

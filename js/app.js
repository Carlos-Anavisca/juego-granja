var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
};

fondo.imagen= new Image();
fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", function(){
    dibujar();
});

function dibuar(){
    lapiz.drawImage(fondo.imagen,0,0);
}

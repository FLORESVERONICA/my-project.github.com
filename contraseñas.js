
document.getElementById("generarbtn").addEventListener("click",generadorContrasena);

function generadorContrasena(){
    console.log("funcion generarContrasena llamada");
    const longitud = document.getElementById("length").value;
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let contrasena = "";
    for(let i = 0; i < longitud; i++){
        const indice = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[indice];
    }
    console.log("contrasemagenerada:", contrasena);
    document.getElementById("passwordContainer").innerHTML = contrasena;
}
const imagen = ["https://images.unsplash.com/photo-1719937206168-f4c829152b91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1721936170673-d9804c6248d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1722032955510-88e2540a4246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1721853892903-99164c75d6bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1721804978753-6533263d89f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1721832625238-fcb8def392ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1721762724242-5a8b3083873d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"];
function ImagenBackground() {
    const randomImagen = Math.floor(Math.random() * imagen.length);
    const imagenURL = `url(${imagen[randomImagen]})`;
    document.body.style.backgroundImage = imagenURL;
    console.log(imagenURL);
}
setInterval(ImagenBackground,10000);

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;
    let watch = document.querySelector("#watch");
    watch.innerHTML = time;
}
setInterval(currentTime,1000);

function mifecha() {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();
    dd = (dd < 10) ? "0" + dd : dd;
    mm = (mm < 10) ? "0" + mm : mm;
    yy = (yy < 10) ? "0" + yy : yy;

    let fechaa = dd + "/" + mm + "/" + yy;
    let fecha = document.querySelector("#fecha");
    fecha.innerHTML = fechaa;
}
setInterval(mifecha);

function mostrarFrasesEImagenes(){
    const fecha = new Date();
    const hora = fecha.getHours();
    let  frases = ""
  


    if(hora >= 0 && hora < 7) {
        
        frases ="¡es hora de descansar!,¡apaga y a dormir!";
        
        
    
    } else if(hora >= 7 && hora < 12) {
    
        frases = "¡levanta, desyuna y a programar¡";
        
    
    } else if(hora >= 12 && hora < 14) {

        frases = "¡termina y a comer!";
    

    } else if(hora >= 14 && hora < 16) {
        
        frases = "¿ya comistes?, descansa un poco que te queda el úlimo empujón";
     

    } else if(hora >= 16 && hora < 18) {

        frases ="¡vamos por el ultimo empujon";
      
    } else if(hora >= 18 && hora < 22) {
        
        frases = "¡vamos parando esto son horas extras!";
        
    } else {
    
        frases = " ahora si, a descansar";
        
    };
 document.getElementById("frase").textContent = frases;

 };

document.addEventListener("DOMContentLoaded",mostrarFrasesEImagenes);

const imagen = ["https://images.unsplash.com/photo-1722100351919-86ee668c88db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8","https://plus.unsplash.com/premium_photo-1722077703164-b2c0cbefd9e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1722033838779-0e9b07eadce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1721775551177-3c6da363fdf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1720647024032-01a5e9740c96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1721678160780-2ea6aa76a90c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMzh8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721332155637-8b339526cf4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDV8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721633617994-06d5493feda7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzV8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721807578532-dc1756624727?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODB8fHxlbnwwfHx8fHw%3D"];
function ImagenBackground() {
    const randomImagen = Math.floor(Math.random() * imagen.length);
    const imagenURL = `url(${imagen[randomImagen]})`;
    document.body.style.backgroundImage = imagenURL;
    console.log(imagenURL);
}
setInterval(ImagenBackground,10000);

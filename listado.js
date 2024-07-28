document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("titleInput");
    const urlInput = document.getElementById("urlInput");
    const addLinkButton = document.getElementById("addLinkButton");
    const linkList = document.getElementById("linkList");
    loadLinks();
    
     addLinkButton.addEventListener("click", () => {
        const title = titleInput.value;
        const url = urlInput.value;
        if(title && url){
         addLink(title, url);
         saveLink(title, url);
        titleInput.value = "";
        urlInput.value = "";
        }

     });
     function addLink(title, url) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = url;
        a.textContent = title;
        a.target = "_blank";
        li.appendChild(a);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", () => {
        li.remove();
        deleteLink(title);


        });
        
        li.appendChild(deleteButton);
        linkList.appendChild(li);
     }
     function saveLink(title, url) {
      const links = JSON.parse(localStorage.getItem('links')) || [];
      links.push({ title, url });
      localStorage.setItem('links', JSON.stringify(links));
  }
     
    function loadLinks() {
      const links = JSON.parse(localStorage.getItem('links')) || [];
      links.forEach(link => addLink(link.title, link.url));
  }

  function deleteLink(title) {
      let links = JSON.parse(localStorage.getItem('links')) || [];
      links = links.filter(link => link.title !== title);
      localStorage.setItem('links', JSON.stringify(links));
  }
});
const imagen = ["https://plus.unsplash.com/premium_photo-1668241683570-958ed3a9156e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODF8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721804975881-1768e59f46cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODR8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721297013384-ec6372912b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODh8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721626830585-7250c537c44e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDR8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721763604802-21cc60882810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDV8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721297015609-1374b1378d31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTd8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTl8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721739263063-969dfdc5062f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDl8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721627679019-1c065961a6b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjh8fHxlbnwwfHx8fHw%3D","https://images.unsplash.com/photo-1721906794508-20c3c5b60bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D"];
function ImagenBackground() {
    const randomImagen = Math.floor(Math.random() * imagen.length);
    const imagenURL = `url(${imagen[randomImagen]})`;
    document.body.style.backgroundImage = imagenURL;
    console.log(imagenURL);
}
setInterval(ImagenBackground,10000);